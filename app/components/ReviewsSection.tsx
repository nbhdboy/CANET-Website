import React from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: '王小明',
    location: '台北',
    rating: 5,
    comment: '去日本旅遊時使用 CANET，網路速度超快，而且操作非常簡單，推薦給所有朋友！',
    avatar: '👨‍💼'
  },
  {
    id: 2,
    name: '李小華',
    location: '台中',
    rating: 5,
    comment: '歐洲旅遊必備！一次購買就能在 30 多個國家使用，省去了很多麻煩，客服也很貼心。',
    avatar: '👩‍💼'
  },
  {
    id: 3,
    name: '張小美',
    location: '高雄',
    rating: 5,
    comment: 'LINE Mini App 介面很直觀，AI 推薦的組合很適合我的行程，價格也很實惠。',
    avatar: '👩‍🎓'
  },
  {
    id: 4,
    name: '陳小強',
    location: '新竹',
    rating: 5,
    comment: '出差到美國時使用，網路穩定，沒有斷線問題，比當地買 SIM 卡方便多了。',
    avatar: '👨‍💻'
  },
  {
    id: 5,
    name: '林小芳',
    location: '台南',
    rating: 5,
    comment: '泰國旅遊時網路速度比預期快，覆蓋範圍也很廣，在偏遠地區都有訊號。',
    avatar: '👩‍🏫'
  },
  {
    id: 6,
    name: '黃小偉',
    location: '桃園',
    rating: 5,
    comment: '第一次使用 eSIM，沒想到這麼簡單，幾分鐘就設定完成，以後出國都會用 CANET。',
    avatar: '👨‍🔬'
  }
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            用戶 <span className="text-gradient glow-text">好評如潮</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            超過 10,000+ 用戶選擇 CANET，享受全球網路連接的便利
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">10,000+</div>
            <div className="text-gray-600">滿意用戶</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">4.9</div>
            <div className="text-gray-600">平均評分</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100+</div>
            <div className="text-gray-600">支援國家</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">客服支援</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{review.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-6 h-6 text-primary-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-4">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            為什麼用戶選擇 CANET？
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">即時啟用</h4>
              <p className="text-gray-600">
                購買、安裝、使用，一次在 LINE 完成，秒速開通 eSIM！
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">安全可靠</h4>
              <p className="text-gray-600">
                經 LINE 官方認證，不用擔心買到來路不明的 eSIM，拒絕詐騙風險！
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">AI導遊</h4>
              <p className="text-gray-600">
                全球首創 AI 導遊服務，依您需求量身推薦方案，旅程更輕鬆、預算更聰明！
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://line.me/R/ti/p/@canet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            加入滿意用戶行列
          </a>
        </div>
      </div>
    </section>
  )
} 