'use client'

import type { ReactNode } from 'react'
import { X } from 'lucide-react'

export function Modal({ title, children, close }: { title: string; children: ReactNode; close: () => void }) {
  return <div className="modal-overlay"><div className="modal-panel"><div className="modal-title"><h3>{title}</h3><button onClick={close} aria-label="Fechar"><X size={18}/></button></div>{children}</div></div>
}
