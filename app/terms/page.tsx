import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首頁
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">服務條款</h1>
          <p className="text-gray-600 mt-2">最後更新：2024年1月1日</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 服務概述</h2>
            <p className="text-gray-700 leading-relaxed">
              CANET 提供全球 eSIM 服務，讓用戶能夠在世界各地享受高速網路連接。我們的服務透過 LINE Mini App 平台提供，包括但不限於 eSIM 購買、啟用和管理。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 用戶資格</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              使用我們的服務，您必須：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>年滿 18 歲或具有法定監護人同意</li>
              <li>擁有支援 eSIM 功能的設備</li>
              <li>提供真實、準確的個人資訊</li>
              <li>遵守所有適用的法律法規</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 服務使用</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              您同意：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>僅將服務用於合法目的</li>
              <li>不從事任何可能損害服務或影響其他用戶的行為</li>
              <li>保護您的帳戶安全，不與他人分享帳戶資訊</li>
              <li>遵守所有適用的網路使用政策</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 付款和退款</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              付款條款：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>所有價格均以新台幣顯示，包含稅金</li>
              <li>付款完成後，eSIM 將立即啟用</li>
              <li>eSIM 一旦啟用，恕不退款</li>
              <li>未啟用的 eSIM 可在購買後 24 小時內申請退款</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 服務可用性</h2>
            <p className="text-gray-700 leading-relaxed">
              我們致力於提供高品質的服務，但無法保證服務的連續性或無錯誤運行。網路覆蓋範圍和速度可能因地區、設備和當地網路狀況而有所不同。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 隱私保護</h2>
            <p className="text-gray-700 leading-relaxed">
              我們重視您的隱私。有關我們如何收集、使用和保護您的個人資訊，請參閱我們的隱私政策。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 免責聲明</h2>
            <p className="text-gray-700 leading-relaxed">
              在法律允許的最大範圍內，CANET 不對因使用我們的服務而產生的任何直接、間接、偶然或特殊損害承擔責任。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 條款修改</h2>
            <p className="text-gray-700 leading-relaxed">
              我們保留隨時修改這些條款的權利。重大變更將透過電子郵件或應用程式內通知告知用戶。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. 聯繫我們</h2>
            <p className="text-gray-700 leading-relaxed">
              如果您對這些條款有任何疑問，請透過以下方式聯繫我們：
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700">LINE 官方帳號：@canet</p>
              <p className="text-gray-700">電子郵件：service@canet.tech</p>
              <p className="text-gray-700">服務時間：週一至週五 09:00–18:00</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 