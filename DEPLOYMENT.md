# CANET 官方網站部署指南

## 本地開發

### 1. 安裝依賴
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```

### 3. 訪問網站
打開瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

## 生產部署

### Vercel 部署（推薦）

1. **準備專案**
   ```bash
   npm run build
   ```

2. **部署到 Vercel**
   - 將專案推送到 GitHub
   - 在 [Vercel](https://vercel.com) 中連接 GitHub 倉庫
   - 選擇 Next.js 框架
   - 自動部署完成

### 其他平台部署

#### Netlify
1. 將專案推送到 GitHub
2. 在 Netlify 中連接 GitHub 倉庫
3. 設定建置命令：`npm run build`
4. 設定發布目錄：`.next`

#### Railway
1. 將專案推送到 GitHub
2. 在 Railway 中連接 GitHub 倉庫
3. 自動檢測 Next.js 並部署

#### 自架伺服器
1. 建置專案：
   ```bash
   npm run build
   npm start
   ```

2. 使用 PM2 管理程序：
   ```bash
   npm install -g pm2
   pm2 start npm --name "canet-website" -- start
   ```

## 環境變數

創建 `.env.local` 文件（可選）：
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_LINE_OA_ID=@canet
```

## 自訂設定

### 修改 LINE OA 連結
在以下文件中搜尋並替換 LINE OA 連結：
- `app/components/Header.tsx`
- `app/components/CountriesSection.tsx`
- `app/components/ReviewsSection.tsx`
- `app/components/TutorialSection.tsx`
- `app/components/FAQSection.tsx`
- `app/components/Footer.tsx`

### 修改聯絡資訊
在 `app/components/Footer.tsx` 中修改：
- 電子郵件地址
- 公司地址
- 聯絡電話

### 修改法律條款
在以下文件中修改內容：
- `app/terms/page.tsx` - 服務條款
- `app/privacypolicy/page.tsx` - 隱私政策

## 效能優化

### 圖片優化
- 使用 Next.js Image 組件
- 設定適當的圖片尺寸
- 使用 WebP 格式

### SEO 優化
- 已包含完整的 meta 標籤
- 結構化資料標記
- 網站地圖生成

### 快取策略
- 靜態資源快取
- API 路由快取
- CDN 配置

## 監控和分析

### Google Analytics
在 `app/layout.tsx` 中添加 GA 追蹤碼：
```tsx
// Google Analytics
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

### 效能監控
- 使用 Vercel Analytics
- 設定 Core Web Vitals 監控
- 錯誤追蹤

## 安全設定

### HTTPS
- 確保所有外部連結使用 HTTPS
- 設定 HSTS 標頭
- 內容安全政策 (CSP)

### 安全標頭
在 `next.config.js` 中添加：
```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
```

## 故障排除

### 常見問題

1. **建置失敗**
   ```bash
   npm run build
   ```
   檢查錯誤訊息並修復

2. **樣式問題**
   ```bash
   npm run dev
   ```
   確保 Tailwind CSS 正確編譯

3. **TypeScript 錯誤**
   ```bash
   npm run lint
   ```
   修復所有 TypeScript 錯誤

### 支援
如有問題，請聯繫：
- LINE 官方帳號：@canet
- 電子郵件：support@canet.com 