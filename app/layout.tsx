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
    description: '安全便利的全球網路連接服務，支援 100+ 國家，透過 LINE Mini App 輕鬆購買 eSIM',
    type: 'website',
    url: 'https://canet-website.vercel.app',
    siteName: 'CANET',
    images: [
      {
        url: '/mini app logo.png',
        width: 1200,
        height: 630,
        alt: 'CANET - 全球 eSIM 服務',
      },
    ],
    locale: 'zh_TW',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CANET - 全球 eSIM 服務',
    description: '安全便利的全球網路連接服務，支援 100+ 國家',
    images: ['/mini app logo.png'],
    creator: '@canet_esim',
  },
  icons: {
    icon: '/mini app logo.png',
    shortcut: '/mini app logo.png',
    apple: '/mini app logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="icon" href="/mini app logo.png" type="image/png" />
        <link rel="shortcut icon" href="/mini app logo.png" />
        <link rel="apple-touch-icon" href="/mini app logo.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 