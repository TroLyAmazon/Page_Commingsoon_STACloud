import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://stacloud.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'STACloud | Community Hosting, VPS and Service Plans',
  description:
    'STACloud cung cấp portal, VPS và các gói DEV, MC, TESTER cho cộng đồng với thông tin giá, slot và policy rõ ràng.',
  keywords: [
    'STACloud',
    'community hosting',
    'vps plans',
    'minecraft hosting',
    'free server hosting',
    'pterodactyl panel',
    'jexactyl fork',
  ],
  openGraph: {
    title: 'STACloud | Official Landing Page',
    description:
      'Cập nhật gói DEV, MC, PROXY FREE và TESTER với giá, slot và lưu ý sử dụng rõ ràng ngay trên landing.',
    url: SITE_URL,
    siteName: 'STACloud',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STACloud | Official Landing Page',
    description:
      'Theo dõi gói dịch vụ, slot còn lại và policy mới nhất của STACloud cho dev, Minecraft và node test.',
  },
  icons: {
    icon: [
      { url: '/picture/iconSTACloud.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/picture/iconSTACloud.png', type: 'image/png' },
    ],
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <body
        className="relative overflow-x-hidden bg-[var(--surface-950)] text-slate-100 antialiased"
        suppressHydrationWarning
      >
        <div className="background-mesh" aria-hidden />
        <div className="background-grid" aria-hidden />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
