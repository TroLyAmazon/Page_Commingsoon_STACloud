import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://stacloud.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'STACloud | Free Server Hosting for Dev and Game Communities',
  description:
    'STACloud cung cấp free server cho dev, Minecraft và cộng đồng cần khởi tạo nhanh qua Discord.',
  keywords: [
    'STACloud',
    'free server hosting',
    'minecraft hosting',
    'python hosting',
    'pterodactyl panel',
    'jexactyl fork',
  ],
  openGraph: {
    title: 'STACloud | Official Landing Page',
    description:
      'Free server cho dev và game community, cấp nhanh qua Discord và quản lý bằng panel trên nền Jexactyl fork.',
    url: SITE_URL,
    siteName: 'STACloud',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STACloud | Official Landing Page',
    description:
      'Free server cho dev và game community, cấp nhanh qua Discord và theo dõi slot còn trống theo thời gian thực.',
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
    <html lang="vi">
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
