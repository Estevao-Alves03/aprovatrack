'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Pencil, Plus, Trash2 } from 'lucide-react'
import { Modal } from '@/components/layout/modal'
import type { StudyState, Subject, Subsubject, Topic } from '@/types/study'

type OpenModal = (name: string, item?: { id?: string; name?: string; subjectId?: string; subsubjectId?: string }) => void
type ConfirmAction = (value: { name: string; action: () => void }) => void

type Props = { store: StudyState; selected: string; select: (id: string) => void; open: OpenModal; ask: ConfirmAction }

export function ContentHierarchy({ store, selected, select, open, ask }: Props) {
  const [subsubject, setSubsubject] = useState<string | null>(null)
  const subject = store.subjects.find((item: Subject) => item.id === selected)
  const activeSubsubject = store.subsubjects.find((item: Subsubject) => item.id === subsubject)
  const topics = store.topics.filter((item: Topic) => item.subjectId === selected && (subsubject ? item.subsubjectId === subsubject : !item.subsubjectId))
  const subsubjects = store.subsubjects.filter((item: Subsubject) => item.subjectId === selected)

  if (!subject) return <div className="empty"><h2>Selecione uma matéria</h2><p>Escolha uma matéria para organizar seus assuntos.</p></div>

  return <div className="content-hierarchy">
    <div className="content-breadcrumb"><button className="back-link" onClick={() => { select(''); setSubsubject(null) }}><ChevronLeft size={15} />Matérias</button>{subsubject && <><ChevronRight size={14} /><span>{subject.name}</span><ChevronRight size={14} /><b>{activeSubsubject?.name}</b></>}</div>
    <div className="page-actions"><div><h2>{subsubject ? activeSubsubject?.name : subject.name}</h2><p>{subsubject ? 'Assuntos específicos desta submatéria.' : 'Organize assuntos gerais ou crie submatérias para aprofundar o conteúdo.'}</p></div><div className="button-row"><button className="secondary-button" onClick={() => open('topic', { subjectId: selected, subsubjectId: subsubject ?? undefined })}><Plus size={16} />Novo assunto</button>{!subsubject && <button className="primary-button" onClick={() => open('subsubject', { subjectId: selected })}><Plus size={16} />Nova submatéria</button>}</div></div>
    {!subsubject && <section className="content-section"><div className="section-heading"><div><h3>Submatérias</h3><p>Acesse uma submatéria para gerenciar seus assuntos específicos.</p></div><span className="count">{subsubjects.length}</span></div>{subsubjects.length ? <div className="subsubject-grid">{subsubjects.map((item: Subsubject) => <article className="subsubject-card" key={item.id}><button className="subsubject-open" onClick={() => setSubsubject(item.id)}><strong>{item.name}</strong><small>{store.topics.filter((topic: Topic) => topic.subsubjectId === item.id).length} assuntos <ChevronRight size={14} /></small></button><div className="subject-actions"><button aria-label={`Editar ${item.name}`} onClick={() => open('subsubject', item)}><Pencil size={13} /></button><button aria-label={`Excluir ${item.name}`} onClick={() => ask({ name: item.name, action: () => store.deleteSubsubject(item.id) })}><Trash2 size={13} /></button></div></article>)}</div> : <p className="muted-copy">Nenhuma submatéria criada.</p>}</section>}
    <section className="content-section"><div className="section-heading"><div><h3>{subsubject ? 'Assuntos da submatéria' : 'Assuntos gerais'}</h3><p>{subsubject ? 'Conteúdo vinculado somente a esta submatéria.' : 'Conteúdo diretamente vinculado à matéria.'}</p></div><span className="count">{topics.length}</span></div>{topics.length ? <div className="topic-grid">{topics.map((topic: Topic) => <article className="topic-card" key={topic.id}><div><strong>{topic.name}</strong><small>Assunto de {subsubject ? activeSubsubject?.name : subject.name}</small></div><div className="subject-actions"><button aria-label={`Editar ${topic.name}`} onClick={() => open('topic', topic)}><Pencil size={13} /></button><button aria-label={`Excluir ${topic.name}`} onClick={() => ask({ name: topic.name, action: () => store.deleteTopic(topic.id) })}><Trash2 size={13} /></button></div></article>)}</div> : <p className="muted-copy">Nenhum assunto cadastrado neste nível.</p>}</section>
  </div>
}

export function ContentModal({ type, store, item, subjectId, close }: { type: 'subsubject' | 'topic'; store: StudyState; item?: { id?: string; name?: string; subjectId?: string; subsubjectId?: string }; subjectId: string; close: () => void }) {
  const [name, setName] = useState(item?.name ?? '')
  return <Modal title={item ? `Editar ${type === 'topic' ? 'assunto' : 'submatéria'}` : `Novo ${type === 'topic' ? 'assunto' : 'submatéria'}`} close={close}><form className="form-stack" onSubmit={event => { event.preventDefault(); if (!name.trim()) return; if (type === 'topic') item?.id ? store.updateTopic(item.id, name.trim(), item.subsubjectId) : store.addTopic(subjectId, name.trim(), item?.subsubjectId); else item?.id ? store.updateSubsubject(item.id, name.trim()) : store.addSubsubject(subjectId, name.trim()); close() }}><label>Nome<input value={name} onChange={event => setName(event.target.value)} autoFocus /></label><button className="primary-button">Salvar</button></form></Modal>
}
