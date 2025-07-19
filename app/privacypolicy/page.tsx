import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
          <h1 className="text-3xl font-bold text-gray-900">隱私政策</h1>
          <p className="text-gray-600 mt-2">最後更新：2024年1月1日</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 資訊收集</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我們收集以下類型的資訊：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>個人資訊：</strong>姓名、電子郵件地址、電話號碼</li>
              <li><strong>設備資訊：</strong>設備型號、作業系統版本、eSIM 支援狀態</li>
              <li><strong>使用資訊：</strong>購買記錄、網路使用情況、服務偏好</li>
              <li><strong>位置資訊：</strong>使用服務時的地理位置（僅在必要時收集）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 資訊使用</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我們使用收集的資訊用於：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>提供和改善我們的 eSIM 服務</li>
              <li>處理付款和訂單</li>
              <li>提供客戶支援</li>
              <li>發送服務相關通知</li>
              <li>分析使用模式以改善服務</li>
              <li>遵守法律義務</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 資訊分享</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我們不會出售、出租或交易您的個人資訊。我們可能在以下情況下分享資訊：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>與授權的服務提供商合作（如支付處理商、網路運營商）</li>
              <li>遵守法律要求或政府請求</li>
              <li>保護我們的權利、財產或安全</li>
              <li>在業務轉讓或合併時（事先通知）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 資料安全</h2>
            <p className="text-gray-700 leading-relaxed">
              我們實施適當的技術和組織措施來保護您的個人資訊，包括加密、安全伺服器和存取控制。然而，沒有任何網路傳輸或電子儲存方法是 100% 安全的。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 資料保留</h2>
            <p className="text-gray-700 leading-relaxed">
              我們保留您的個人資訊的時間僅限於提供服務、遵守法律義務、解決爭議和執行協議所需的時間。當不再需要時，我們會安全地刪除或匿名化這些資訊。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 您的權利</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              根據適用的隱私法律，您可能擁有以下權利：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>存取和查看您的個人資訊</li>
              <li>更正不準確的資訊</li>
              <li>刪除您的個人資訊</li>
              <li>限制或反對處理您的資訊</li>
              <li>資料可攜性</li>
              <li>撤回同意（如適用）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookie 和追蹤技術</h2>
            <p className="text-gray-700 leading-relaxed">
              我們使用 Cookie 和類似的追蹤技術來改善用戶體驗、分析網站使用情況和提供個人化內容。您可以透過瀏覽器設定控制 Cookie 偏好。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 第三方服務</h2>
            <p className="text-gray-700 leading-relaxed">
              我們的服務可能包含第三方連結或整合（如 LINE、支付處理商）。這些第三方有自己的隱私政策，我們不對其做法負責。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. 兒童隱私</h2>
            <p className="text-gray-700 leading-relaxed">
              我們的服務不針對 13 歲以下的兒童。我們不會故意收集 13 歲以下兒童的個人資訊。如果您認為我們可能收集了兒童的資訊，請立即聯繫我們。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. 國際傳輸</h2>
            <p className="text-gray-700 leading-relaxed">
              您的資訊可能在台灣境外處理和儲存。我們確保所有國際傳輸都受到適當的保護措施保護。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. 政策更新</h2>
            <p className="text-gray-700 leading-relaxed">
              我們可能會不時更新此隱私政策。重大變更將透過電子郵件或應用程式內通知告知您。建議您定期查看此政策。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. 聯繫我們</h2>
            <p className="text-gray-700 leading-relaxed">
              如果您對本隱私政策有任何疑問或想要行使您的權利，請聯繫我們：
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700">LINE 官方帳號：@canet</p>
              <p className="text-gray-700">電子郵件：service@canet.tech</p>
              <p className="text-gray-700">地址：新北市中和區橋和路87號3樓</p>
              <p className="text-gray-700">服務時間：週一至週五 09:00–18:00</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 