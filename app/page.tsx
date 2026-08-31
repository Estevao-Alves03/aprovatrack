'use client'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/app-shell'

export const App = AppShell

export default function Page() {
  if (typeof window === 'undefined') return null
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<AppShell />} />
          <Route path="/conteudo" element={<AppShell />} />
          <Route path="/questoes" element={<AppShell />} />
          <Route path="/caderno-de-erros" element={<AppShell />} />
          <Route path="/caderno-de-erros/todos" element={<AppShell />} />
          <Route path="/cronograma" element={<AppShell />} />
          <Route path="/desempenho" element={<AppShell />} />
          <Route path="/configuracoes" element={<AppShell />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { DashboardPage, ContentPage, QuestionsPage, ErrorsPage, SchedulePage, PerformancePage, SettingsPage }
