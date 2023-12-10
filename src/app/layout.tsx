import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Namami Gange: Revitalizing the Sacred Flow',
  description: 'Namami Gange is a government-led initiative in India aimed at cleaning and rejuvenating the Ganges River. The Ganges, also known as the Ganga, is one of the holiest rivers in Hinduism and holds significant cultural and religious importance in India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
