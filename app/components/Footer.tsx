import React from 'react'
import { Globe, Shield, FileText, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">CANET</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              全球領先的 eSIM 服務提供商，為您提供安全、便利的網路連接解決方案。
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://line.me/R/ti/p/@canet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 p-3 rounded-lg transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a 
                href="mailto:support@canet.com" 
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2">
              <li>
                <a href="#countries" className="text-gray-300 hover:text-white transition-colors">
                  支援國家
                </a>
              </li>
              <li>
                <a href="#tutorial" className="text-gray-300 hover:text-white transition-colors">
                  使用教學
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  常見問題
                </a>
              </li>
              <li>
                <a 
                  href="https://line.me/R/ti/p/@canet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LINE Mini App
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">法律條款</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/terms" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  服務條款
                </a>
              </li>
              <li>
                <a 
                  href="/privacypolicy" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  隱私政策
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  一般條款
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CANET. 保留所有權利。
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                服務條款
              </a>
              <a href="/privacypolicy" className="text-gray-400 hover:text-white text-sm transition-colors">
                隱私政策
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                一般條款
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 