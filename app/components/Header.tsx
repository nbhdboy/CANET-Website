import React from 'react'
import { Shield, Zap, Brain, ArrowRight, Globe, Wifi } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gradient">CANET</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#countries" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  支援國家
                </a>
                <a href="#reviews" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  用戶評價
                </a>
                <a href="#tutorial" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  使用教學
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-primary-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-green-50 to-accent-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              全球 <span className="text-gradient glow-text">eSIM</span> 服務
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              透過 LINE Mini App 享受安全、便利的全球網路連接服務，AI 智能推薦最適合您的方案
            </p>
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">安全性保障</h3>
                <p className="text-gray-600">
                  通過 LINE 官方認證，免下載額外 App、不怕個資外洩，使用更放心！
                </p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">便利性</h3>
                <p className="text-gray-600">
                  從購買 eSIM 到呼叫 LINE TAXI，全程在 LINE 內完成，出國就該這麼簡單！
                </p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI 推薦</h3>
                <p className="text-gray-600">
                  由 AI 分析您的旅遊需求，把錢花在美食與購物上，輕鬆規劃最懂你的假期！
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://miniapp.line.me/2007721917-lOzPDpGm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <Globe className="w-5 h-5 mr-2" />
                立即體驗 LINE Mini App
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#tutorial" 
                className="btn-secondary inline-flex items-center"
              >
                <Wifi className="w-5 h-5 mr-2" />
                查看使用教學
              </a>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse-slow"></div>
        </div>
      </div>
    </header>
  )
} 