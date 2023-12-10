import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'नमामि गंगे:संवादकृत्',
  description: 'Introducing Namami Gange, your virtual guide to the revitalization journey of the sacred Ganges River! This AI chatbot is here to provide you with real-time updates, insightful information, and engaging conversations about the Namami Gange initiative.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sa">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
