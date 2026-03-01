# STA Cloud — Trang Coming Soon

Trang đơn "Đang phát triển" cho [STA Cloud](https://stacloud.dev/), xây bằng **Next.js (App Router)** + **Tailwind CSS**, tối ưu cho GitHub Pages và custom domain `stacloud.dev`.

## Cấu trúc thư mục (chính)

```
├── app/
│   ├── layout.tsx    # Layout + metadata SEO, OG
│   ├── page.tsx      # Nội dung: header, hero, cards, footer
│   └── globals.css   # Tailwind + gradient, glow
├── public/
│   ├── picture/      # Logo: logo.png hoặc logoSTACloud.png
│   └── favicon.ico   # (tùy chọn) Thêm favicon vào đây
├── picture/          # Logo nguồn (copy vào public/picture khi deploy)
├── .github/workflows/deploy.yml
├── next.config.js    # output: export, images unoptimized
├── tailwind.config.ts
├── postcss.config.js
└── package.json
```

## Logo

- **Ưu tiên:** `public/picture/logo.png`
- **Fallback:** `public/picture/logoSTACloud.png`
- Workflow deploy **tự copy** thư mục `picture/` → `public/picture/`, nên nếu bạn giữ logo trong `picture/logoSTACloud.png` (hoặc `picture/logo.png`) thì không cần copy tay. Nếu chưa có `logo.png`, có thể đổi tên/ copy `logoSTACloud.png` thành `logo.png` trong `picture/` hoặc trong `public/picture/`.

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Build static (cho GitHub Pages)

```bash
npm run build
```

Output nằm trong thư mục `out/`. GitHub Actions dùng bước này rồi đẩy `out/` lên branch `gh-pages` (hoặc dùng GitHub Pages source = branch đó).

## Deploy lên GitHub Pages + custom domain

1. **Push repo lên GitHub**
   - Đẩy toàn bộ code (bao gồm `.github/workflows/deploy.yml`) lên repository.

2. **Bật GitHub Pages**
   - Vào repo → **Settings** → **Pages**
   - **Source:** GitHub Actions (workflow `deploy` sẽ chạy khi push lên `main`).

3. **Gắn custom domain `stacloud.dev`**
   - Trong **Pages** → **Custom domain**: nhập `stacloud.dev`
   - Ở DNS (nơi quản lý domain), thêm:
     - **A record** trỏ đến địa chỉ IP của GitHub Pages (hoặc dùng CNAME `username.github.io` nếu dùng subdomain; với apex `stacloud.dev` thường dùng A hoặc ALIAS/CNAME flatten theo hướng dẫn của GitHub).
   - Không dùng `basePath` trong `next.config.js` vì dùng apex domain.

4. **Workflow**
   - Mỗi lần push lên `main`, workflow sẽ:
     - Copy `picture/` → `public/picture/`
     - Chạy `npm ci` và `npm run build`
     - Deploy nội dung thư mục `out/` lên GitHub Pages.

## Liên kết

- **Website:** https://stacloud.dev/
- **Panel:** https://panel.stacloud.dev/
- **Discord:** https://discord.gg/nq8B4JXmnm

## Công nghệ

- Next.js 14 (App Router), export tĩnh
- Tailwind CSS (dark theme, gradient nền, glow nhẹ)
- Hiệu ứng: fade-in, float nhẹ, hover/focus rõ
- SEO: title, description, Open Graph, Twitter card
- Responsive, mobile-first

## Favicon

Nếu cần favicon: đặt file `favicon.ico` vào `public/`. Có thể dùng `picture/iconSTACloud.png` chuyển sang `.ico` bằng tool online rồi đặt vào `public/favicon.ico`.
