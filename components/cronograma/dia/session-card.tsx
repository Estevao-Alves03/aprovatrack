'use client'
import { useState } from 'react'
import { CalendarDays,ChevronLeft,ChevronRight,Clock3,Plus,Trash2,X } from 'lucide-react'
import type { ScheduleEntry,ScheduleStatus,StudyState } from '@/types/study'

export function SessionCard({store,item,select}:{store:StudyState;item:ScheduleEntry;select:(x:ScheduleEntry)=>void}){return <button className="schedule-card" onClick={()=>select(item)}><span className="schedule-time"><Clock3 size={12}/>{item.start}–{item.end}</span><b>{store.subjects.find(s=>s.id===item.subjectId)?.name||'Matéria'}</b><small>{store.topics.find(t=>t.id===item.topicId)?.name||'Assunto'}</small><span className="schedule-duration">Planejado {item.planned} min · Realizado {item.actual} min</span><em className={statusClass(item.status)}>{item.status}</em></button>}
