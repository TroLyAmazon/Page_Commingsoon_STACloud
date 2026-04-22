import Link from 'next/link';
import { OpenClawSpotlight } from '@/components/shared/openclaw-spotlight';
import { Reveal } from '@/components/ui/reveal';

import {
  dashboardEntries,
  faqs,
  features,
  heroSignals,
  heroStats,
  heroStatusStrip,
  homeConfig,
  locations,
  products,
  testimonials,
} from './content';

type Tone = 'amber' | 'blue' | 'cyan' | 'emerald' | 'rose';

function getToneClasses(tone: Tone) {
  switch (tone) {
    case 'amber':
      return {
        dot: 'bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.9)]',
        pill: 'border border-amber-300/20 bg-amber-300/10 text-amber-100',
      };
    case 'blue':
      return {
        dot: 'bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)]',
        pill: 'border border-sky-300/20 bg-sky-300/10 text-sky-100',
      };
    case 'emerald':
      return {
        dot: 'bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]',
        pill: 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-100',
      };
    case 'rose':
      return {
        dot: 'bg-rose-300 shadow-[0_0_14px_rgba(253,164,175,0.9)]',
        pill: 'border border-rose-300/20 bg-rose-300/10 text-rose-100',
      };
    default:
      return {
        dot: 'bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]',
        pill: 'border border-cyan-300/20 bg-cyan-300/10 text-cyan-100',
      };
  }
}

function Header() {
  return (
    <header className="px-4 pt-6 sm:px-6 sm:pt-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/70 px-4 py-4 backdrop-blur sm:px-5 xl:grid xl:grid-cols-[auto_1fr_auto] xl:items-center">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/[0.04] px-3 py-3 transition hover:border-cyan-300/20 hover:bg-white/[0.07] sm:gap-4 sm:px-4"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-white/5 p-2 shadow-[0_0_24px_rgba(34,211,238,0.15)] sm:h-16 sm:w-16">
            <img
              src="/picture/logoSTACloud.png"
              alt={homeConfig.logoAlt}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xl font-semibold text-white sm:text-2xl">{homeConfig.name}</p>
            <p className="max-w-[16rem] text-xs leading-5 text-slate-400 sm:max-w-none sm:text-sm">
              Portal, VPS và gói dịch vụ cộng đồng
            </p>
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-6 text-sm text-slate-300 lg:flex xl:justify-self-center">
          <a href="#products" className="transition hover:text-white">
            Dịch vụ
          </a>
          <a href="#infrastructure" className="transition hover:text-white">
            Hạ tầng
          </a>
          <a href="#locations" className="transition hover:text-white">
            Vị trí
          </a>
          <a href="#faq" className="transition hover:text-white">
            Câu hỏi
          </a>
        </nav>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-center xl:justify-self-end">
          <a
            href={homeConfig.panelUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
          >
            Mở Portal
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-4 pb-14 pt-8 sm:px-6 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <Reveal className="space-y-8" delayMs={40}>
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
            {homeConfig.tagline}
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            <span className="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_16px_rgba(147,197,253,0.9)]" />
            OpenClaw Beta miễn phí
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Xem nhanh portal, giá dịch vụ và các gói cộng đồng của STACloud trong một nơi.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {homeConfig.summary} Từ đăng nhập portal đến chọn gói phù hợp, mọi thông tin quan
              trọng đều được đặt sẵn để bạn theo dõi thuận tiện hơn.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={homeConfig.freeServerUrl}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
            >
              Xem Gói Dịch Vụ
            </a>
            <a
              href={homeConfig.discordUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-300/10 px-6 py-3.5 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300/35 hover:bg-indigo-300/15 sm:w-auto"
            >
              Tham gia Discord
            </a>
            <a
              href={homeConfig.zaloUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-6 py-3.5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300/35 hover:bg-emerald-300/15 sm:w-auto"
            >
              Cộng đồng Zalo
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        {heroSignals.map((item, index) => (
              <Reveal key={item} delayMs={120 + index * 80}>
                <div className="status-tile interactive-card rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300 backdrop-blur">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative hero-orbit" delayMs={120}>
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.24),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.18),transparent_24%)] blur-2xl" />
          <div className="status-panel panel-float relative rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-slate-950/50 backdrop-blur sm:rounded-[2rem] sm:p-6">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                  Tổng Quan Dịch Vụ
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Theo dõi nhanh portal, tài nguyên còn lại và các gói hiện đang mở.
                </p>
              </div>
              <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                Live
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {heroStatusStrip.map((item, index) => {
                const tone = getToneClasses(item.tone);

                return (
                  <Reveal key={item.label} delayMs={160 + index * 60}>
                    <div className="status-tile rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${tone.pill}`}>
                          {item.value}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {heroStats.map((item, index) => (
                <Reveal key={item.label} delayMs={220 + index * 60}>
                  <div className="status-tile tech-card interactive-card rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[1.5rem] sm:p-5">
                    <p className="text-2xl font-semibold text-white sm:text-3xl">{item.value}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              {dashboardEntries.map((item, index) => {
                const tone = getToneClasses(item.tone);

                return (
                  <Reveal key={item.label} delayMs={320 + index * 50}>
                    <div className="status-tile interactive-card flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full ${tone.dot}`} />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white">{item.label}</p>
                          <p className="text-xs text-slate-500">{item.meta}</p>
                        </div>
                      </div>
                      <span className="break-words text-sm font-semibold leading-6 text-slate-100 sm:max-w-[16rem] sm:text-right">
                        {item.value}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TesterAlert() {
  return (
    <section className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-rose-300/20 bg-rose-300/[0.07] px-5 py-4 text-sm leading-7 text-rose-50 sm:px-6">
        {homeConfig.testerAlertMessage}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="px-4 py-14 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Dịch Vụ</p>
          <h2 className="section-title">
            Các dịch vụ chính của STACloud cho game server, app và môi trường thử nghiệm
          </h2>
          <p className="section-copy">
            Từ portal quản lý đến hạ tầng compute và các gói cộng đồng, bạn có thể xem nhanh từng
            nhóm dịch vụ để chọn đúng nhu cầu sử dụng.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 xl:grid-cols-4 xl:gap-6">
          {products.map((product, index) => (
            <Reveal key={product.title} delayMs={index * 90}>
              <article
                className={`interactive-card group relative overflow-hidden rounded-[1.5rem] border p-5 backdrop-blur sm:rounded-[1.9rem] sm:p-6 ${
                  index === 0
                    ? 'border-cyan-300/20 bg-cyan-300/[0.06]'
                    : index === 1
                      ? 'border-amber-300/20 bg-amber-300/[0.06]'
                      : index === 2
                        ? 'border-emerald-300/20 bg-emerald-300/[0.06]'
                        : 'border-blue-300/20 bg-blue-300/[0.06]'
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent opacity-60" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300/80">
                    {product.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{product.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{product.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-200"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Infrastructure() {
  return (
    <section id="infrastructure" className="px-4 py-14 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur sm:rounded-[2rem] sm:p-8">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Hạ Tầng</p>
          <h2 className="section-title">
            Thông tin hạ tầng được trình bày rõ ràng để bạn chọn đúng dịch vụ
          </h2>
          <p className="section-copy">
            Bạn có thể xem nhanh trạng thái gói, khu vực triển khai và mức tài nguyên trước khi đăng
            ký hoặc liên hệ hỗ trợ.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delayMs={index * 80}>
              <article className="tech-card interactive-card rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-5 sm:rounded-[1.75rem] sm:p-6">
                <div className="mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-amber-300" />
                <h3 className="text-lg font-semibold text-white sm:text-xl">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="locations" className="px-4 py-14 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Vị Trí</p>
          <h2 className="section-title">Các khu vực triển khai hiện có cho gói cộng đồng và dịch vụ trả phí</h2>
          <p className="section-copy">
            Xem nhanh từng location, băng thông và phạm vi hỗ trợ để chọn khu vực phù hợp với nhu cầu
            sử dụng của bạn.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6">
          {locations.map((location, index) => (
            <Reveal key={location.name} delayMs={index * 100}>
              <article className="interactive-card rounded-[1.4rem] border border-white/10 bg-slate-950/75 p-5 shadow-[0_20px_80px_rgba(3,7,18,0.45)] sm:rounded-[1.75rem] sm:p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <img
                        src={location.flagSrc}
                        alt={`${location.name} flag`}
                        className="h-full w-full rounded-xl object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-2xl font-semibold text-white">{location.name}</p>
                      <p className="mt-2 text-base leading-7 text-slate-400">{location.badge}</p>
                    </div>
                  </div>
                  <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100 sm:tracking-[0.28em]">
                    {location.availability}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-500 sm:text-sm">Bandwidth</p>
                    <p className="mt-2 text-2xl font-semibold text-amber-300">{location.speed}</p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-500 sm:text-sm">Uptime</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{location.uptime}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Phản Hồi</p>
          <h2 className="section-title">
            Khách hàng nói gì về trải nghiệm sử dụng STACloud
          </h2>
          <p className="section-copy">
            Một vài phản hồi từ người dùng sau khi trải nghiệm portal, theo dõi trạng thái dịch vụ
            và đăng ký các gói cộng đồng của STACloud.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delayMs={index * 90}>
              <article className="interactive-card rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-5 sm:rounded-[1.75rem] sm:p-6">
                <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-cyan-300 to-transparent" />
                <p className="text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                  "{item.quote}"
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="px-4 py-14 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur sm:rounded-[2rem] sm:p-8">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Câu Hỏi</p>
          <h2 className="section-title">
            Những câu hỏi thường gặp trước khi vào portal hoặc đăng ký gói dịch vụ
          </h2>
          <p className="section-copy">
            FAQ được viết lại theo ngạch quyết định thực tế: chọn gói nào, xem trạng thái ở đâu và
            cần chú ý gì trước khi tạo ticket.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4">
          {faqs.map((question, index) => (
            <Reveal key={question} delayMs={index * 50}>
              <div className="interactive-card rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-sm leading-7 text-slate-200 sm:px-5 sm:text-base">
                {question}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-10 pt-10 sm:px-6">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-3 py-3 transition hover:border-cyan-300/20 hover:bg-white/[0.07]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-white/5 p-2">
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
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
            <a href={homeConfig.freeServerUrl} className="transition hover:text-white">
              Gói dịch vụ
            </a>
            <a href={homeConfig.panelUrl} className="transition hover:text-white">
              Portal
            </a>
            <a href={homeConfig.discordUrl} className="transition hover:text-white">
              Discord
            </a>
            <a href={homeConfig.zaloUrl} className="transition hover:text-white">
              Zalo
            </a>
            <Link href="/terms" className="block transition hover:text-white">
              Điều khoản dịch vụ
            </Link>
            <Link href="/privacy" className="block transition hover:text-white">
              Chính sách quyền riêng tư
            </Link>
            <Link href="/sla" className="block transition hover:text-white">
              SLA
            </Link>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-500">© 2025-2026 STACloud</p>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <main className="min-h-screen pb-10">
      <Header />
      <Hero />
      <OpenClawSpotlight discordUrl={homeConfig.discordUrl} zaloUrl={homeConfig.zaloUrl} />
      <TesterAlert />
      <Products />
      <Infrastructure />
      <Locations />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
