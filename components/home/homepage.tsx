import Link from 'next/link';
import { OpenClawSpotlight } from '@/components/shared/openclaw-spotlight';
import { Reveal } from '@/components/ui/reveal';
import { Section3DAccent } from '@/components/visual/section-3d-accent';
import { ServerCloudScene } from '@/components/visual/server-cloud-scene';

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
        dot: 'bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.75)]',
        pill: 'border border-blue-300/20 bg-blue-300/10 text-blue-100',
      };
    case 'blue':
      return {
        dot: 'bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)]',
        pill: 'border border-sky-300/20 bg-sky-300/10 text-sky-100',
      };
    case 'emerald':
      return {
        dot: 'bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.75)]',
        pill: 'border border-cyan-300/20 bg-cyan-300/10 text-cyan-100',
      };
    case 'rose':
      return {
        dot: 'bg-slate-100 shadow-[0_0_14px_rgba(248,250,252,0.5)]',
        pill: 'border border-white/15 bg-white/[0.07] text-white',
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
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-lg border border-cyan-300/15 bg-black/70 px-4 py-4 shadow-[0_22px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5 xl:grid xl:grid-cols-[auto_1fr_auto] xl:items-center">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06] sm:gap-4 sm:px-4"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-black/60 p-2 shadow-[0_0_24px_rgba(34,211,238,0.12)] sm:h-16 sm:w-16">
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

        <nav className="hidden items-center justify-center gap-1 rounded-lg border border-white/10 bg-white/[0.025] p-1 text-sm text-slate-300 lg:flex xl:justify-self-center">
          <a href="#products" className="rounded-md px-3 py-2 transition hover:bg-white/[0.06] hover:text-white">
            Dịch vụ
          </a>
          <Link href="/egg" className="rounded-md px-3 py-2 transition hover:bg-white/[0.06] hover:text-white">
            Eggs
          </Link>
          <a href="#infrastructure" className="rounded-md px-3 py-2 transition hover:bg-white/[0.06] hover:text-white">
            Hạ tầng
          </a>
          <a href="#locations" className="rounded-md px-3 py-2 transition hover:bg-white/[0.06] hover:text-white">
            Vị trí
          </a>
          <a href="#faq" className="rounded-md px-3 py-2 transition hover:bg-white/[0.06] hover:text-white">
            Câu hỏi
          </a>
        </nav>

        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap lg:justify-center xl:justify-self-end">
          <a
            href={homeConfig.panelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500 sm:w-auto"
          >
            Mở Portal
          </a>
          <a
            href={homeConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-blue-300/25 bg-blue-300/10 px-4 py-2.5 text-sm font-semibold text-blue-50 transition hover:border-blue-300/45 hover:bg-blue-300/15 sm:w-auto"
          >
            Discord
          </a>
          <a
            href={homeConfig.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.12] sm:w-auto"
          >
            Zalo
          </a>
          <a
            href={homeConfig.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.12] sm:w-auto"
          >
            Messenger
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-4 pb-14 pt-8 sm:px-6 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal className="hero-copy-block space-y-8 sm:w-auto" delayMs={40}>
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur">
              {homeConfig.tagline}
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_14px_rgba(14,165,233,0.45)]" />
              OpenClaw Beta miễn phí
            </div>
          </div>

          <div className="max-w-[20rem] space-y-5 sm:max-w-none">
            <h1 className="max-w-[calc(100vw-2rem)] break-words text-2xl font-semibold leading-tight text-slate-950 sm:max-w-3xl sm:text-5xl lg:text-6xl">
              <span className="block sm:inline">Hạ tầng VPS, game server</span>{' '}
              <span className="block sm:inline">và OpenClaw cho cộng đồng</span>{' '}
              <span className="block sm:inline">STACloud.</span>
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-sky-100/80 sm:text-lg sm:leading-8">
              Xem giá, cấu hình, trạng thái slot và hướng dẫn đăng ký trong một nơi. STACloud tập
              trung vào VPS OVH Singapore, game server, OpenClaw Beta và các gói cộng đồng có chi
              phí rõ ràng.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={homeConfig.panelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(2,132,199,0.26)] transition hover:bg-sky-500 sm:w-auto"
            >
              Mở Portal
            </a>
            <a
              href={homeConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-sky-300/25 bg-sky-300/10 px-6 py-3.5 text-sm font-semibold text-sky-100 transition hover:border-sky-300/45 hover:bg-sky-300/15 sm:w-auto"
            >
              Tạo ticket Discord
            </a>
          </div>
        </Reveal>

        <Reveal className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[620px]" delayMs={120}>
          <ServerCloudScene />
          <div className="pointer-events-none static mt-3 grid gap-3 sm:absolute sm:inset-x-0 sm:bottom-2 sm:mt-0 sm:grid-cols-2">
            {heroStats.map((item) => (
              <div key={item.label} className="cloud-stat rounded-lg px-4 py-3">
                <p className="text-2xl font-semibold text-slate-950">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-5 max-w-6xl">
        <div className="support-spotlight rounded-lg px-5 py-5 sm:px-6 sm:py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-100/80">
                Group Chat Cộng Đồng
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Cần hỏi nhanh? Vào nhóm chat STACloud.
              </h2>
              <p className="mt-2 text-sm leading-7 text-sky-100/80">
                Messenger và Zalo dùng cho trao đổi cộng đồng, cập nhật nhanh và hỏi trước khi tạo
                ticket Discord.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[22rem]">
              <a
                href={homeConfig.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-sky-950 transition hover:bg-sky-100"
              >
                Messenger Group
              </a>
              <a
                href={homeConfig.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[0.14]"
              >
                Zalo Group
              </a>
            </div>
          </div>
          <div className="mt-4 grid gap-3 text-sm text-sky-100/80 sm:grid-cols-3">
            <p className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              Hỏi nhanh trước khi chọn gói
            </p>
            <p className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              Theo dõi cập nhật cộng đồng
            </p>
            <p className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              Chuyển sang ticket khi cần xử lý riêng
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-3 sm:grid-cols-3 sm:gap-4">
        {heroSignals.map((item, index) => (
          <Reveal key={item} delayMs={120 + index * 80}>
            <div className="cloud-stat interactive-card rounded-lg px-4 py-4 text-sm leading-7 text-slate-200">
              {item}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-3 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {heroStatusStrip.map((item, index) => {
          const tone = getToneClasses(item.tone);

          return (
            <Reveal key={item.label} delayMs={180 + index * 50}>
              <div className="cloud-stat interactive-card flex h-full items-start justify-between gap-3 rounded-lg px-4 py-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-950">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${tone.pill}`}>
                  {item.value}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mx-auto mt-3 grid max-w-6xl gap-3 lg:grid-cols-4">
        {dashboardEntries.map((item, index) => {
          const tone = getToneClasses(item.tone);

          return (
            <Reveal key={item.label} delayMs={260 + index * 50}>
              <div className="cloud-stat interactive-card flex h-full flex-col gap-3 rounded-lg px-4 py-4">
                <div className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${tone.dot}`} />
                  <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                </div>
                <p className="text-sm font-semibold leading-6 text-cyan-100">{item.value}</p>
                <p className="text-xs leading-5 text-slate-500">{item.meta}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function TesterAlert() {
  return (
    <section className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-lg border border-blue-300/20 bg-blue-300/[0.06] px-5 py-4 text-sm leading-7 text-slate-100 sm:px-6">
        {homeConfig.testerAlertMessage}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="px-4 py-14 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
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
          <Reveal delayMs={120}>
            <Section3DAccent variant="pricing" size="compact" />
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 xl:grid-cols-4 xl:gap-6">
          {products.map((product, index) => (
            <Reveal key={product.title} delayMs={index * 90}>
              <article
                className={`interactive-card group relative overflow-hidden rounded-lg border p-5 backdrop-blur sm:p-6 ${
                  index % 2 === 0
                    ? 'border-cyan-300/20 bg-cyan-300/[0.045]'
                    : 'border-blue-300/20 bg-blue-300/[0.045]'
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent opacity-60" />
                <span className="card-3d-badge" aria-hidden="true">
                  <span />
                </span>
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
      <div className="status-panel mx-auto max-w-6xl rounded-lg border border-cyan-300/15 bg-slate-950/70 p-4 backdrop-blur sm:p-8">
        <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <Reveal className="max-w-3xl">
            <p className="section-eyebrow">Hạ Tầng</p>
            <h2 className="section-title">
              Thông tin hạ tầng được trình bày rõ ràng để bạn chọn đúng dịch vụ
            </h2>
            <p className="section-copy">
              Bạn có thể xem nhanh trạng thái gói, khu vực triển khai và mức tài nguyên trước khi
              đăng ký hoặc liên hệ hỗ trợ.
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <Section3DAccent variant="network" size="compact" />
          </Reveal>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 md:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delayMs={index * 80}>
              <article className="tech-card interactive-card rounded-lg border border-cyan-300/15 bg-black/35 p-5 sm:p-6">
                <span className="card-3d-badge card-3d-badge--network" aria-hidden="true">
                  <span />
                </span>
                <div className="mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-white via-cyan-300 to-blue-500" />
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
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <Reveal className="max-w-3xl">
            <p className="section-eyebrow">Vị Trí</p>
            <h2 className="section-title">
              Các khu vực triển khai hiện có cho gói cộng đồng và dịch vụ trả phí
            </h2>
            <p className="section-copy">
              Xem nhanh từng location, băng thông và phạm vi hỗ trợ để chọn khu vực phù hợp với nhu
              cầu sử dụng của bạn.
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <Section3DAccent variant="location" size="compact" />
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6">
          {locations.map((location, index) => (
            <Reveal key={location.name} delayMs={index * 100}>
              <article className="interactive-card relative overflow-hidden rounded-lg border border-cyan-300/15 bg-slate-950/75 p-5 shadow-[0_20px_80px_rgba(3,7,18,0.45)] sm:p-6">
                <span className="card-3d-badge card-3d-badge--location" aria-hidden="true">
                  <span />
                </span>
                <div className="flex flex-col gap-4">
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-cyan-300/15 bg-black/40 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <img
                        src={location.flagSrc}
                        alt={`${location.name} flag`}
                        className="h-full w-full rounded-md object-cover"
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
                  <div className="rounded-lg border border-cyan-300/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-500 sm:text-sm">Bandwidth</p>
                    <p className="mt-2 text-2xl font-semibold text-cyan-200">{location.speed}</p>
                  </div>
                  <div className="rounded-lg border border-cyan-300/10 bg-white/[0.03] p-4">
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
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <Reveal className="max-w-3xl">
            <p className="section-eyebrow">Phản Hồi</p>
            <h2 className="section-title">Khách hàng nói gì về trải nghiệm sử dụng STACloud</h2>
            <p className="section-copy">
              Một vài phản hồi từ người dùng sau khi trải nghiệm portal, theo dõi trạng thái dịch vụ
              và đăng ký các gói cộng đồng của STACloud.
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <Section3DAccent variant="service" size="compact" />
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delayMs={index * 90}>
              <article className="interactive-card rounded-lg border border-cyan-300/15 bg-slate-950/70 p-5 sm:p-6">
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
      <div className="status-panel mx-auto max-w-6xl rounded-lg border border-cyan-300/15 bg-slate-950/70 p-4 backdrop-blur sm:p-8">
        <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
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
          <Reveal delayMs={120}>
            <Section3DAccent variant="workflow" size="compact" />
          </Reveal>
        </div>

        <div className="relative z-10 mt-8 grid gap-3 sm:mt-10 sm:gap-4">
          {faqs.map((question, index) => (
            <Reveal key={question} delayMs={index * 50}>
              <div className="interactive-card rounded-lg border border-cyan-300/10 bg-black/30 px-4 py-4 text-sm leading-7 text-slate-200 sm:px-5 sm:text-base">
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
            className="interactive-card group inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/20 bg-black/60 p-2">
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
            <Link href="/egg" className="transition hover:text-white">
              Eggs
            </Link>
            <a href={homeConfig.panelUrl} className="transition hover:text-white">
              Portal
            </a>
            <a href={homeConfig.discordUrl} className="transition hover:text-white">
              Discord Ticket
            </a>
            <span className="text-cyan-100/70">Group Chat:</span>
            <a href={homeConfig.zaloUrl} className="transition hover:text-white">
              Zalo
            </a>
            <a href={homeConfig.messengerUrl} className="transition hover:text-white">
              Messenger
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
            <Link href="/partner" className="block transition hover:text-white">
              Partner
            </Link>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-500">© 2018 - 2026 STACloud. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <main className="min-h-screen pb-10">
      <Header />
      <Hero />
      <OpenClawSpotlight
        discordUrl={homeConfig.discordUrl}
        zaloUrl={homeConfig.zaloUrl}
        messengerUrl={homeConfig.messengerUrl}
      />
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
