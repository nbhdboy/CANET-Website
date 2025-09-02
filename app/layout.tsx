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
        url: 'https://canet-website.vercel.app/canet-logo-new.png',
        width: 1200,
        height: 630,
        alt: 'CANET - 全球 eSIM 服務',
        type: 'image/png',
      },
    ],
    locale: 'zh_TW',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CANET - 全球 eSIM 服務',
    description: '安全便利的全球網路連接服務，支援 100+ 國家',
    images: ['https://canet-website.vercel.app/canet-logo-new.png'],
    creator: '@canet_esim',
  },
  icons: {
    icon: '/canet-logo-new.png',
    shortcut: '/canet-logo-new.png',
    apple: '/canet-logo-new.png',
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
        <link rel="icon" href="/canet-logo-new.png" type="image/png" />
        <link rel="shortcut icon" href="/canet-logo-new.png" />
        <link rel="apple-touch-icon" href="/canet-logo-new.png" />
        
        {/* 手動添加 Open Graph 標籤 */}
        <meta property="og:title" content="CANET - 全球 eSIM 服務" />
        <meta property="og:description" content="安全便利的全球網路連接服務，支援 100+ 國家，透過 LINE Mini App 輕鬆購買 eSIM" />
        <meta property="og:image" content="https://canet-website.vercel.app/canet-logo-new.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://canet-website.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CANET" />
        <meta property="og:locale" content="zh_TW" />
        
        {/* Twitter Card 標籤 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CANET - 全球 eSIM 服務" />
        <meta name="twitter:description" content="安全便利的全球網路連接服務，支援 100+ 國家" />
        <meta name="twitter:image" content="https://canet-website.vercel.app/canet-logo-new.png" />
        <meta name="twitter:creator" content="@canet_esim" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 