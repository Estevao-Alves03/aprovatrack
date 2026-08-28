import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'AprovaTrack — Seu progresso, sua aprovação', description: 'Acompanhe seus estudos para concursos públicos.' }
export const viewport: Viewport = { colorScheme: 'light dark', themeColor: '#f7f9fc' }
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
