import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://stacloud.dev';

export const metadata: Metadata = {
  title: 'STA Cloud — Đang phát triển | Hosting & Panel',
  description:
    'STA Cloud đang phát triển. Hệ thống hosting & panel đang hoàn thiện. Game hosting, Web hosting. Theo dõi Discord để cập nhật.',
  keywords: ['STA Cloud', 'hosting', 'game hosting', 'web hosting', 'panel', 'stacloud.dev'],
  authors: [{ name: 'STA Cloud' }],
  openGraph: {
    title: 'STA Cloud — Đang phát triển',
    description:
      'Hệ thống hosting & panel đang hoàn thiện. Theo dõi Discord để cập nhật.',
    url: SITE_URL,
    siteName: 'STA Cloud',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STA Cloud — Đang phát triển',
    description: 'Hệ thống hosting & panel đang hoàn thiện. Theo dõi Discord để cập nhật.',
  },
  robots: 'index, follow',
  // Thêm public/favicon.ico nếu cần; trình duyệt tự tìm /favicon.ico
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="relative">
        <div className="glow-blur" aria-hidden />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
