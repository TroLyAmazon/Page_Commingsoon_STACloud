import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://stacloud.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'STACloud | Community Hosting, VPS and Service Plans',
  description:
    'STACloud cung cấp portal, OpenClaw Beta, TESTER, DEV SG, MC SG, PROXY HK và VPS OVH Singapore với giá, slot, cấu hình và tùy chọn upsize rõ ràng.',
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
    title: 'STACloud | Bảng Giá Và Dịch Vụ',
    description:
      'Xem giá, cấu hình, slot, OpenClaw Beta, upsize và lưu ý sử dụng của các gói TESTER, DEV SG, MC SG, PROXY HK, STA-XEON-01, STA-AMD-EPYC-01 và STA-AMD-EPYC-02 tại STACloud.',
    url: SITE_URL,
    siteName: 'STACloud',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STACloud | Bảng Giá Và Dịch Vụ',
    description:
      'Xem nhanh OpenClaw Beta, gói dịch vụ, slot còn lại, giá hiện tại và chính sách mới nhất của STACloud cho dev, Minecraft, proxy và VPS OVH Singapore.',
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
