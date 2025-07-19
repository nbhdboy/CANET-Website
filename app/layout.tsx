import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CANET - 全球 eSIM 服務 | 安全便利的網路連接',
  description: 'CANET 提供安全、便利的 eSIM 服務，支援全球多國網路連接。透過 LINE Mini App 輕鬆購買和管理您的 eSIM。',
  keywords: 'eSIM, 網路連接, 旅遊網路, 全球網路, CANET, LINE Mini App',
  authors: [{ name: 'CANET Team' }],
  openGraph: {
    title: 'CANET - 全球 eSIM 服務',
    description: '安全便利的全球網路連接服務',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 