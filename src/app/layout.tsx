import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'नमामि गंगे:संवादकृत्',
  description: 'नमस्ते, नमामि गंगे का स्वागत है! यह आपके लिए एक आत्मनिर्देशक बनकर सामर्थ्यपूर्ण गंगा नदी के पुनर्जीवन की यात्रा में मार्गदर्शन करेगा! यह ए.आई. चैटबॉट आपको नमामि गंगे पहल के बारे में तत्काल अपडेट, अद्वितीय जानकारी, और रोचक वार्ता प्रदान करने के लिए यहाँ है।',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
