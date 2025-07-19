'use client'

import React, { useState } from 'react'
import { Smartphone, Wifi, CreditCard, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'

const steps = [
  {
    id: 1,
    icon: Smartphone,
    title: '開啟 LINE CANET easy eSIM App',
    description: '在 LINE 中搜尋 CANET 或掃描 QR Code 進入 Mini App',
    color: 'primary'
  },
  {
    id: 2,
    icon: CreditCard,
    title: '選擇方案並付款',
    description: '選擇目的地國家和流量方案，使用安全支付方式完成付款',
    color: 'accent'
  },
  {
    id: 3,
    icon: Wifi,
    title: '即時啟用 eSIM',
    description: '付款完成後立即在Line收到 eSIM 設定檔，按照指引輕鬆完成設定',
    color: 'secondary'
  },
  {
    id: 4,
    icon: CheckCircle,
    title: '開始使用網路',
    description: '到達目的地後自動連接當地網路，享受高速上網體驗',
    color: 'primary'
  }
]

const deviceInstructions = [
  {
    device: 'iPhone',
    steps: [
      '開啟「設定」應用程式',
      '點擊「行動服務」或「蜂窩網路」',
      '點擊「新增 eSIM」',
      '掃描 QR Code 或手動輸入設定檔',
      '啟用 eSIM 並設定為主要或次要網路'
    ]
  },
  {
    device: 'Android',
    steps: [
      '開啟「設定」應用程式',
      '點擊「網路和網際網路」',
      '點擊「SIM 卡管理員」',
      '點擊「新增行動方案」',
      '掃描 QR Code 或手動輸入設定檔'
    ]
  }
]

const faqs = [
  {
    id: 1,
    question: '什麼是 eSIM？',
    answer: 'eSIM（嵌入式 SIM 卡）是一種數位化的 SIM 卡技術，無需實體卡片即可提供行動網路服務。它直接內建在您的設備中，可以透過軟體方式下載和啟用不同的網路方案。'
  },
  {
    id: 2,
    question: '我的手機支援 eSIM 嗎？',
    answer: '大多數 2018 年後推出的 iPhone（iPhone XS 及更新機型）和 Android 手機都支援 eSIM。您可以在手機設定中查看「行動服務」或「SIM 卡管理員」選項來確認。'
  },
  {
    id: 3,
    question: '如何購買和啟用 eSIM？',
    answer: '1. 在 LINE 中搜尋 CANET 或掃描 QR Code 進入 Mini App\n2. 選擇目的地國家和流量方案\n3. 完成付款後立即收到 eSIM 設定檔\n4. 按照手機設定指引完成 eSIM 啟用'
  },
  {
    id: 4,
    question: 'eSIM 的網路速度如何？',
    answer: 'CANET 與當地頂級電信商合作，提供 4G/LTE 網路服務，網速可達 100Mbps 以上，足以支援視訊通話、串流影片和一般上網需求。'
  },
  {
    id: 5,
    question: '如何檢查網路覆蓋範圍？',
    answer: '在 CANET Mini App 中，每個國家方案都會顯示詳細的覆蓋範圍資訊。我們與當地主要電信商合作，確保在主要城市和旅遊景點都有良好的網路覆蓋。'
  },
  {
    id: 6,
    question: 'eSIM 的有效期是多久？',
    answer: 'eSIM 的有效期根據您選擇的方案而定，通常為 7-30 天。在有效期內，您可以隨時啟用和停用網路服務。'
  },
  {
    id: 7,
    question: '如果遇到網路問題怎麼辦？',
    answer: 'CANET 提供 24/7 客服支援。您可以透過 LINE 官方帳號聯繫我們，我們會協助您解決任何網路連接問題。'
  },
  {
    id: 8,
    question: '可以同時使用多個 eSIM 嗎？',
    answer: '是的，大多數支援 eSIM 的手機可以同時儲存多個 eSIM 設定檔，但通常只能啟用一個作為主要網路。您可以在設定中切換不同的 eSIM。'
  },
  {
    id: 9,
    question: 'eSIM 比實體 SIM 卡有什麼優勢？',
    answer: 'eSIM 的優勢包括：無需等待實體卡片、即時啟用、可遠端管理、支援多個網路方案、環保且不佔用實體空間。'
  },
  {
    id: 10,
    question: '如何取消或退款？',
    answer: 'eSIM 一旦啟用後無法退款。如果您在啟用前需要取消，請在購買後 24 小時內聯繫客服。詳細的退款政策請參考我們的服務條款。'
  }
]

export default function TutorialSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="tutorial" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            簡單 <span className="text-gradient glow-text">4 步驟</span> 開始使用
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            無需複雜設定，幾分鐘內即可享受全球網路連接
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="card p-6 text-center h-full">
                <div className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className={`w-8 h-8 text-${step.color}-600`} />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Device Instructions */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {deviceInstructions.map((device) => (
            <div key={device.device} className="card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {device.device} 設定教學
              </h3>
              <div className="space-y-4">
                {device.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">即時啟用</h4>
            <p className="text-gray-600">
              付款完成後立即收到 eSIM，無需等待
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">簡單設定</h4>
            <p className="text-gray-600">
              詳細的圖文教學，輕鬆完成設定
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">多裝置支援</h4>
            <p className="text-gray-600">
              支援 iPhone 和 Android 各種機型
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-primary-50 via-green-50 to-accent-50 rounded-2xl p-8 mb-12 glow-effect">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            常見問題
          </h3>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="card">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-t-xl"
                >
                  <h4 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h4>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Contact Support */}
          <div className="mt-8 text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              還有其他問題？
            </h4>
            <p className="text-gray-600 mb-4">
              我們的客服團隊隨時為您提供協助
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://line.me/R/ti/p/@canet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                聯繫客服
              </a>
              <a 
                href="#terms" 
                className="btn-secondary inline-flex items-center"
              >
                查看服務條款
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="https://line.me/R/ti/p/@canet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            立即開始使用
          </a>
        </div>
      </div>
    </section>
  )
} 