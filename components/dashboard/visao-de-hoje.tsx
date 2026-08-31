'use client'
import { CircleHelp,BookOpen } from 'lucide-react'
export function TodayView({store}:{store:any}){return <section className="panel insight"><h2>Visão de hoje</h2><p>Continue registrando suas sessões para acompanhar sua evolução real.</p><div className="insight-line"><CircleHelp/><span>{store.sessions.length} sessões registradas</span></div><div className="insight-line"><BookOpen/><span>{store.subjects.length} matérias organizadas</span></div></section>}
