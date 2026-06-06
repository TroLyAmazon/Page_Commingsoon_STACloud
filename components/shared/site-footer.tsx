import Link from 'next/link';
import { homeConfig } from '@/components/home/content';

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-lg border border-cyan-300/15 bg-black/65 px-5 py-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-6 sm:py-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:gap-8">
        <div>
          <Link
            href="/"
            className="interactive-card group inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06] sm:gap-4 sm:px-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/20 bg-black/60 p-2 sm:h-14 sm:w-14">
              <img
                src="/picture/logoSTACloud.png"
                alt={homeConfig.logoAlt}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xl font-semibold text-white">{homeConfig.name}</p>
              <p className="text-sm text-slate-400">stacloud.dev</p>
            </div>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400 sm:mt-5">
            Theo dõi nhanh portal, gói dịch vụ, chính sách và kênh hỗ trợ chính thức của STACloud
            trong một nơi.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
            Dịch Vụ
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <Link href="/free-server" className="block transition hover:text-white">
              Gói dịch vụ
            </Link>
            <Link href="/egg" className="block transition hover:text-white">
              Eggs
            </Link>
            <a href={homeConfig.panelUrl} className="block transition hover:text-white">
              Portal
            </a>
            <a href={homeConfig.panelUrl} className="block transition hover:text-white">
              VPS Compute
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
            Group Chat
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <Link href="/#infrastructure" className="block transition hover:text-white">
              Tổng quan dịch vụ
            </Link>
            <a href={homeConfig.discordUrl} className="block transition hover:text-white">
              Tạo ticket Discord
            </a>
            <a href={homeConfig.messengerUrl} className="block transition hover:text-white">
              Messenger
            </a>
            <a href={homeConfig.zaloUrl} className="block transition hover:text-white">
              Zalo
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
            Legal
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <Link href="/terms" className="block transition hover:text-white">
              Điều khoản dịch vụ
            </Link>
            <Link href="/privacy" className="block transition hover:text-white">
              Chính sách quyền riêng tư
            </Link>
            <Link href="/sla" className="block transition hover:text-white">
              SLA
            </Link>
            <Link href="/partner" className="block transition hover:text-white">
              Partner
            </Link>
            <span className="block">© 2018 - 2026 STACloud. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
