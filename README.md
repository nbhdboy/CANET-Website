# CANET 官方網站

CANET 是全球領先的 eSIM 服務提供商，為用戶提供安全、便利的網路連接解決方案。此專案是 CANET 的官方網站，採用現代化的設計風格，具有科技感和簡潔的用戶介面。

## 專案特色

- 🎨 **現代化設計**：簡潔且具有科技感的 UI 設計
- 📱 **響應式設計**：完美支援桌面、平板和手機裝置
- ⚡ **高效能**：基於 Next.js 14 和 React 18 建構
- 🎯 **SEO 優化**：完整的 SEO 設定和 meta 標籤
- 🔒 **安全性**：銀行級安全加密保護用戶資料
- 🌍 **多語言支援**：支援繁體中文

## 技術架構

- **框架**：Next.js 14 (App Router)
- **語言**：TypeScript
- **樣式**：Tailwind CSS
- **圖示**：Lucide React
- **動畫**：Framer Motion
- **字體**：Inter (Google Fonts)

## 專案結構

```
CANET官網/
├── app/
│   ├── components/          # React 組件
│   │   ├── Header.tsx      # 頁首組件
│   │   ├── CountriesSection.tsx  # 國家支援區域
│   │   ├── ReviewsSection.tsx    # 用戶評價區域
│   │   ├── TutorialSection.tsx   # 使用教學區域
│   │   ├── FAQSection.tsx        # 常見問題區域
│   │   └── Footer.tsx      # 頁尾組件
│   ├── terms/              # 服務條款頁面
│   ├── privacypolicy/      # 隱私政策頁面
│   ├── globals.css         # 全域樣式
│   ├── layout.tsx          # 根布局
│   └── page.tsx            # 首頁
├── public/                 # 靜態資源
├── package.json            # 專案依賴
├── tailwind.config.js      # Tailwind 配置
├── next.config.js          # Next.js 配置
└── README.md               # 專案說明
```

## 安裝和運行

### 前置需求

- Node.js 18.0 或更高版本
- npm 或 yarn 套件管理器

### 安裝步驟

1. **克隆專案**
   ```bash
   git clone [repository-url]
   cd CANET官網
   ```

2. **安裝依賴**
   ```bash
   npm install
   # 或
   yarn install
   ```

3. **啟動開發伺服器**
   ```bash
   npm run dev
   # 或
   yarn dev
   ```

4. **開啟瀏覽器**
   訪問 [http://localhost:3000](http://localhost:3000)

### 建置生產版本

```bash
npm run build
npm start
```

## 主要功能

### 1. 頁首 (Header)
- 導航選單
- 安全性、便利性和 AI 推薦說明
- LINE Mini App 連結
- 響應式設計

### 2. 國家支援區域
- 熱門目的地展示
- 完整國家清單
- 價格和覆蓋範圍資訊
- 互動式設計

### 3. 用戶評價區域
- 真實用戶評價
- 統計數據展示
- 信任指標
- 動態評分系統

### 4. 使用教學區域
- 4 步驟使用流程
- iPhone 和 Android 設定教學
- 特色功能說明
- FAQ 預覽

### 5. 常見問題 (FAQ)
- 可展開的問題列表
- 詳細解答
- 客服聯繫方式
- 搜尋功能

### 6. 頁尾 (Footer)
- 公司資訊
- 快速連結
- 法律條款連結
- 聯絡方式

## 法律條款頁面

- **服務條款** (`/terms`)：詳細的服務使用條款
- **隱私政策** (`/privacypolicy`)：完整的隱私保護政策

## 自訂設定

### 顏色主題

在 `tailwind.config.js` 中修改顏色配置：

```javascript
colors: {
  primary: {
    // 主色調
  },
  secondary: {
    // 次要色調
  },
  accent: {
    // 強調色調
  }
}
```

### 字體設定

在 `app/globals.css` 中修改字體：

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

## 部署

### Vercel 部署

1. 將專案推送到 GitHub
2. 在 Vercel 中連接 GitHub 倉庫
3. 自動部署完成

### 其他平台

專案支援部署到任何支援 Node.js 的平台：
- Netlify
- Railway
- Heroku
- AWS Amplify

## 貢獻指南

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 授權

此專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件

## 聯絡我們

- **LINE 官方帳號**：@canet
- **電子郵件**：support@canet.com
- **網站**：https://canet.com

## 更新日誌

### v1.0.0 (2024-01-01)
- 初始版本發布
- 完整的官方網站功能
- 響應式設計
- SEO 優化
- 法律條款頁面 