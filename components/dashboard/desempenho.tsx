'use client'
import { subjectPerformance } from '@/types/study'
export function PerformanceBySubject({store}:{store:any}){return <section className="panel"><div className="panel-heading"><div><h2>Desempenho por matéria</h2><p>Resultados calculados pelas suas questões</p></div></div>{store.subjects.map((s:any)=>{const x=subjectPerformance(s.id,store.sessions);return <div className="performance" key={s.id}><div><span>{s.name}</span><b>{x.percentage}%</b></div><div className="progress"><i style={{width:`${x.percentage}%`}}/></div><small>{x.q} questões · {x.c} acertos</small></div>})}</section>}
