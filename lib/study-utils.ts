import { QuestionSession, Subject, Topic } from '@/types/study'
export const pct = (correct:number, quantity:number) => quantity ? Math.round(correct/quantity*100) : 0
export const errors = (s:QuestionSession) => s.quantity-s.correct
export const inWeek = (date:string) => { const now=new Date(); const start=new Date(now); start.setDate(now.getDate()-6); return new Date(date)>=start }
export const subjectStats = (subjects:Subject[], sessions:QuestionSession[]) => subjects.map(subject => { const rows=sessions.filter(s=>s.subjectId===subject.id); const q=rows.reduce((a,s)=>a+s.quantity,0); const c=rows.reduce((a,s)=>a+s.correct,0); return {subject,q,correct:c,percentage:pct(c,q)} })
export const topicStats = (topics:Topic[], subjects:Subject[], sessions:QuestionSession[]) => topics.map(topic=>{const rows=sessions.filter(s=>s.topicId===topic.id);const q=rows.reduce((a,s)=>a+s.quantity,0);const c=rows.reduce((a,s)=>a+s.correct,0);return {topic,subject:subjects.find(x=>x.id===topic.subjectId)?.name??'',q,percentage:pct(c,q)}}).sort((a,b)=>a.percentage-b.percentage)
export const weeklyQuestions=(sessions:QuestionSession[])=>sessions.filter(s=>inWeek(s.date)).reduce((a,s)=>a+s.quantity,0)
export const weeklyAccuracy=(sessions:QuestionSession[])=>{const r=sessions.filter(s=>inWeek(s.date));return pct(r.reduce((a,s)=>a+s.correct,0),r.reduce((a,s)=>a+s.quantity,0))}
export const chartData=(sessions:QuestionSession[])=>Array.from({length:7},(_,i)=>{const date=new Date();date.setDate(date.getDate()-(6-i));const key=date.toISOString().slice(0,10);const rows=sessions.filter(s=>s.date===key);return {day:date.toLocaleDateString('pt-BR',{weekday:'short'}).replace('.',''),accuracy:pct(rows.reduce((a,s)=>a+s.correct,0),rows.reduce((a,s)=>a+s.quantity,0)),reference:80}})
