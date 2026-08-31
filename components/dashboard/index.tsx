'use client'
import { useState } from 'react'
import { Modal } from '@/components/layout/modal'
import { pct,subjectPerformance,topicPerformance } from '@/types/study'
import type {ErrorEntry,ErrorReason,ErrorStatus,StudyState} from '@/types/study'
import { BookOpen,CircleHelp,ChevronRight,Filter,Plus,Pencil,Trash2,NotebookPen,TriangleAlert } from 'lucide-react'
import { Metric } from '@/components/dashboard/cards'

import { DashboardCards } from '@/components/dashboard/cards'
import { PerformanceBySubject } from '@/components/dashboard/desempenho'
import { TodayView } from '@/components/dashboard/visao-de-hoje'

export function Dashboard({store}:{store:any}){return <div className="stack"><DashboardCards store={store}/><div className="two-col"><PerformanceBySubject store={store}/><TodayView store={store}/></div></div>}
