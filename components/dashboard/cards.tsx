'use client'
import { pct } from '@/types/study'
export function Metric({label,value,tone}:{label:string;value:any;tone:string}){return <div className={`metric ${tone}`}><div className="metric-dot"/><small>{label}</small><strong>{value}</strong></div>}
export function DashboardCards({store}:{store:any}){const q=store.sessions.reduce((a:any,s:any)=>a+s.quantity,0),c=store.sessions.reduce((a:any,s:any)=>a+s.correct,0);return <div className="metrics"><Metric label="Horas estudadas" value={`${(q/10).toFixed(1)}h`} tone="purple"/><Metric label="Questões realizadas" value={q} tone="blue"/><Metric label="Percentual de acerto" value={`${pct(c,q)}%`} tone="green"/><Metric label="Assuntos acompanhados" value={store.topics.length} tone="orange"/></div>}
