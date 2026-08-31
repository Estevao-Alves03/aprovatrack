'use client'
import { useState } from 'react'
import { Modal } from '@/components/layout/modal'
import { pct,subjectPerformance,topicPerformance } from '@/types/study'
import type {ErrorEntry,ErrorReason,ErrorStatus,StudyState} from '@/types/study'
import { BookOpen,CircleHelp,ChevronRight,Filter,Plus,Pencil,Trash2,NotebookPen,TriangleAlert } from 'lucide-react'
import { Metric } from '@/components/dashboard/cards'

export function SettingsPage({store,ask}:{store:any;ask:any}){const [name,setName]=useState(store.settings.userName);return <div className="stack narrow"><div><h2>Configurações</h2><p>Personalize suas metas e preferências de estudo.</p></div><div className="panel"><form className="form-stack" onSubmit={e=>{e.preventDefault();store.updateSettings({userName:name})}}><label>Seu nome<input value={name} onChange={e=>setName(e.target.value)}/></label><button className="primary-button">Salvar alterações</button></form></div><div className="panel"><h3>Dados locais</h3><p>Gerencie os dados armazenados neste navegador.</p><div className="button-row"><button className="secondary-button" onClick={()=>store.resetDemo()}>Restaurar exemplos</button><button className="danger-button" onClick={()=>ask({name:'todos os dados locais',action:()=>store.clearAll()})}>Apagar tudo</button></div></div></div>}
