'use client'

import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/app-shell'

export function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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

export default function Page() {
  return <App />
}

