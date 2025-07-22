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
          <h1 className="text-3xl font-bold text-gray-900">一般條款與條件</h1>
          <p className="text-gray-600 mt-2">森聯科技有限公司</p>
          <p className="text-gray-600">最後更新時間：2025 年 1 月 31 日</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 條款效力</h2>
            <p className="text-gray-700 leading-relaxed">
              本網站是由「森聯科技有限公司」營運。統一編號：60715791。在整個網站中，「我們」、「我方」、「本公司」均指「森聯科技有限公司」。
            </p>
            <p className="text-gray-700 leading-relaxed">
              造訪我們的網站和/或購買我們的產品，即表示您參與我們的「服務」，並同意受下列條款及條件約束。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 服務使用與帳戶註冊</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              您需要建立帳戶才能使用我們的 eSIM 服務。建立帳戶時，請提供準確和最新的資訊，包括您的姓名、電子郵件和電話號碼。您有責任維護帳戶和密碼的機密性，您的帳戶下的所有活動都由您負責。
            </p>
            <p className="text-gray-700 leading-relaxed">
              如果您代表公司使用服務，您保證您有合法權限使公司受這些條款約束，並且您同意這些條款對公司具有法律約束力。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 服務內容與使用限制</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CANET 提供允許用戶在相容裝置上購買和安裝 eSIM 以進行海外上網的服務。
            </p>
            <p className="text-gray-700 leading-relaxed">
              使用本服務，您應保證您的裝置為 eSIM 相容且已解鎖。我們會提供相容裝置清單，請您在購買前確認。如您勾選「我確認我的裝置相容 eSIM」即代表您自行承擔後續風險與責任。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 費用與付款</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              服務之費用會於網站或應用程式上清楚標示，所有付款將透過第三方金流服務（如信用卡、LINE Pay 等）進行處理。除非另有說明，所有價格均不含稅。
            </p>
            <p className="text-gray-700 leading-relaxed">
              一旦完成購買並收到 eSIM 安裝說明，即視為交易完成，費用不退。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. eSIM 交付與啟用</h2>
            <p className="text-gray-700 leading-relaxed">
              您購買成功後，eSIM 將會顯示於帳戶的「我的 eSIM」頁面，並提供啟用教學。請務必於指定期限內完成啟用，否則 eSIM 將會過期，且不得退費或再次啟用。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 退款與取消政策</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              若因我們的系統錯誤導致您無法使用 eSIM，您可於購買日起 30 天內申請退款。若您已安裝 eSIM 或已使用部分流量，則無法退款。退款前，我們可能會請您提供裝置截圖、網路設定等技術資訊以進行判斷。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              我們不接受以下情形之退款：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>裝置不相容或未解鎖</li>
              <li>使用者誤操作</li>
              <li>透過第三方通路購買（請聯繫該通路退款）</li>
              <li>已超過申請期限</li>
              <li>已安裝 eSIM</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              退款若獲核准，可選擇原付款方式退還，或折抵下次購買。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 客戶責任</h2>
            <p className="text-gray-700 leading-relaxed">
              您不得利用本服務從事任何違法、詐欺、濫用或損害他人網路安全之行為。若您違反本條款，我們有權中止或終止您的帳戶與服務，並不予退費。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 國際使用與資料傳輸</h2>
            <p className="text-gray-700 leading-relaxed">
              雖然我們的公司位於台灣，eSIM 服務將使用於國外，因此，您同意您的個人資料可能因服務提供需求傳輸至其他國家或區域。無論資料處理地為何，我們將採取合理安全措施保護您的資訊。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. 條款變更</h2>
            <p className="text-gray-700 leading-relaxed">
              我們保留隨時修訂本條款之權利。任何重大變更將以網站公告或電子郵件通知。請定期查閱本條款以掌握最新版本。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. 聯絡我們</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              如有任何關於本條款之疑問、帳戶或交易問題，請聯絡我們：
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700">森聯科技有限公司</p>
              <p className="text-gray-700">Email：service@canet.tech</p>
              <p className="text-gray-700">地址：新北市中和區橋和路87號3樓</p>
              <p className="text-gray-700">服務時間：週一至週五 09:00–18:00</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 