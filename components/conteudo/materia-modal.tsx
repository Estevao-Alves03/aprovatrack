'use client'
import { useState } from 'react'
import { Modal } from '@/components/layout/modal'
import { pct,subjectPerformance,topicPerformance } from '@/types/study'
import type {ErrorEntry,ErrorReason,ErrorStatus,StudyState} from '@/types/study'
import { BookOpen,CircleHelp,ChevronRight,Filter,Plus,Pencil,Trash2,NotebookPen,TriangleAlert } from 'lucide-react'
import { Metric } from '@/components/dashboard/cards'

export function SubjectModal({store,item,close}:{store:any;item:any;close:any}){const [name,setName]=useState(item?.name||'');return <Modal title={item?'Editar matéria':'Nova matéria'} close={close}><form className="form-stack" onSubmit={e=>{e.preventDefault();if(name.trim())item?store.updateSubject(item.id,name.trim()):store.addSubject(name.trim());close()}}><label>Nome<input value={name} onChange={e=>setName(e.target.value)} autoFocus/></label><button className="primary-button">Salvar matéria</button></form></Modal>}
