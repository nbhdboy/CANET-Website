import React from 'react'
import { MapPin, Globe, Star } from 'lucide-react'

const popularCountries = [
  { name: '日本', flag: '🇯🇵', coverage: '全國覆蓋', price: 'NT$ 100起' },
  { name: '韓國', flag: '🇰🇷', coverage: '全國覆蓋', price: 'NT$ 100起' },
  { name: '泰國', flag: '🇹🇭', coverage: '全國覆蓋', price: 'NT$ 100起' },
  { name: '新加坡', flag: '🇸🇬', coverage: '全國覆蓋', price: 'NT$ 100起' },
  { name: '香港', flag: '🇭🇰', coverage: '全國覆蓋', price: 'NT$ 100起' },
  { name: '美國', flag: '🇺🇸', coverage: '全國覆蓋', price: 'NT$ 100起' },
  { name: '歐洲', flag: '🇪🇺', coverage: '30+ 國家', price: 'NT$ 100起' },
  { name: '澳洲', flag: '🇦🇺', coverage: '全國覆蓋', price: 'NT$ 100起' },
]

const allCountries = [
  '日本', '韓國', '泰國', '新加坡', '香港', '澳門', '馬來西亞', '越南', '菲律賓', '印尼',
  '美國', '加拿大', '墨西哥', '英國', '法國', '德國', '義大利', '西班牙', '荷蘭', '比利時',
  '瑞士', '奧地利', '捷克', '波蘭', '匈牙利', '希臘', '葡萄牙', '愛爾蘭', '丹麥', '挪威',
  '瑞典', '芬蘭', '澳洲', '紐西蘭', '阿聯酋', '以色列', '土耳其', '埃及', '南非', '巴西',
  '阿根廷', '智利', '秘魯', '哥倫比亞', '印度', '斯里蘭卡', '尼泊爾', '孟加拉', '巴基斯坦'
]

export default function CountriesSection() {
  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            支援 <span className="text-gradient glow-text">100+</span> 個國家
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            無論您前往世界任何角落，CANET 都能為您提供穩定快速的網路連接
          </p>
        </div>

        {/* Popular Countries Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            熱門目的地
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularCountries.map((country, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-3">{country.flag}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{country.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{country.coverage}</p>
                <p className="text-gray-500 font-semibold">{country.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Countries */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            完整國家清單
          </h3>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {allCountries.map((country, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200">
                  <MapPin className="w-4 h-4 text-primary-600" />
                  <span className="text-sm text-gray-700">{country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">全球覆蓋</h4>
            <p className="text-gray-600">
              支援超過 100 個國家和地區，涵蓋全球主要旅遊目的地
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-accent-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">優質網路</h4>
            <p className="text-gray-600">
              與當地頂級電信商合作，提供穩定快速的網路服務
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-accent-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">即時啟用</h4>
            <p className="text-gray-600">
              購買後立即啟用，無需等待，隨時享受網路服務
            </p>
          </div>
        </div>


      </div>
    </section>
  )
} 