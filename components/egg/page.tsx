import Link from 'next/link';
import { SiteFooter } from '@/components/shared/site-footer';
import { Reveal } from '@/components/ui/reveal';
import { eggGroups, eggTotals, type EggGroup, type EggItem } from './content';

const accentClasses: Record<
  EggGroup['accent'],
  {
    border: string;
    band: string;
    dot: string;
    pill: string;
  }
> = {
  blue: {
    border: 'border-blue-300/20',
    band: 'from-blue-300/16 via-cyan-300/10',
    dot: 'bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.75)]',
    pill: 'border-blue-300/20 bg-blue-300/10 text-blue-100',
  },
  cyan: {
    border: 'border-cyan-300/20',
    band: 'from-cyan-300/16 via-sky-300/10',
    dot: 'bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.75)]',
    pill: 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100',
  },
  slate: {
    border: 'border-slate-300/15',
    band: 'from-slate-300/12 via-cyan-300/8',
    dot: 'bg-slate-300 shadow-[0_0_14px_rgba(203,213,225,0.55)]',
    pill: 'border-slate-300/15 bg-slate-300/10 text-slate-100',
  },
  teal: {
    border: 'border-teal-300/20',
    band: 'from-teal-300/16 via-cyan-300/10',
    dot: 'bg-teal-300 shadow-[0_0_14px_rgba(94,234,212,0.7)]',
    pill: 'border-teal-300/20 bg-teal-300/10 text-teal-100',
  },
};

function countItem(item: EggItem) {
  return item.variants?.length ?? 1;
}

function Header() {
  return (
    <header className="px-4 pt-6 sm:px-6 sm:pt-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-lg border border-cyan-300/15 bg-slate-950/80 px-4 py-4 backdrop-blur sm:px-5 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/"
          className="interactive-card group flex items-center gap-3 rounded-lg border border-cyan-300/15 bg-cyan-300/[0.04] px-3 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.07] sm:gap-4 sm:px-4"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-slate-950/80 p-2 shadow-[0_0_24px_rgba(34,211,238,0.12)] sm:h-16 sm:w-16">
            <img src="/picture/logoSTACloud.png" alt="STACloud" className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <p className="text-xl font-semibold text-white sm:text-2xl">STACloud</p>
            <p className="max-w-[18rem] text-xs leading-5 text-slate-400 sm:max-w-none sm:text-sm">
              Egg catalog cho panel và service templates
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
          <Link
            href="/"
            className="inline-flex min-h-10 items-center rounded-lg border border-white/10 bg-white/[0.04] px-4 transition hover:border-cyan-300/30 hover:text-white"
          >
            Trang chủ
          </Link>
          <Link
            href="/free-server"
            className="inline-flex min-h-10 items-center rounded-lg border border-white/10 bg-white/[0.04] px-4 transition hover:border-cyan-300/30 hover:text-white"
          >
            Gói dịch vụ
          </Link>
          <a
            href="https://portal.stacloud.dev/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center rounded-lg bg-cyan-300 px-4 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Portal
          </a>
        </nav>
      </div>
    </header>
  );
}

function Summary() {
  const stats = [
    { value: `${eggTotals.items}`, label: 'Mục đang hiển thị' },
    { value: `${eggTotals.groups}`, label: 'Nhóm cấp cao' },
  ];

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1fr_0.65fr] lg:items-end">
        <Reveal className="space-y-5" delayMs={40}>
          <div className="inline-flex items-center gap-3 rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
            STACloud Egg Catalog
          </div>
          <div>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Danh sách egg đang hỗ trợ cho AI, Code Languages, Linux, Minecraft và Voice Servers.
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Trang này gom egg theo đúng nhóm chính trong STACloudMultiEgg/Egg. Riêng Linux hiển thị
              toàn bộ hệ điều hành trong egg Linux VPS, không tách thành nhiều card rời rạc.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delayMs={120 + index * 70}>
              <div className="status-tile rounded-lg border border-cyan-300/15 bg-slate-950/70 px-4 py-4 backdrop-blur">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EggItemRow({ item, accent }: { item: EggItem; accent: (typeof accentClasses)[EggGroup['accent']] }) {
  if (item.variants?.length) {
    return (
      <div className="rounded-lg border border-cyan-300/10 bg-slate-950/60 px-4 py-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-white">{item.name}</p>
          <span className={`w-fit rounded-lg border px-2.5 py-1 text-[11px] font-semibold ${accent.pill}`}>
            {item.variants.length} OS
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.variants.map((variant) => (
            <span
              key={variant}
              className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-200"
            >
              {variant}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-cyan-300/10 bg-slate-950/60 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <p className="min-w-0 break-words text-sm font-semibold text-white">{item.name}</p>
        <span className={`w-fit shrink-0 rounded-lg border px-2.5 py-1 text-[11px] font-semibold ${accent.pill}`}>
          Egg
        </span>
      </div>
    </div>
  );
}

function EggCard({ group, index }: { group: EggGroup; index: number }) {
  const accent = accentClasses[group.accent];
  const spanClass = group.wide ? 'md:col-span-2 xl:col-span-3' : '';
  const totalItems = group.items.reduce((sum, item) => sum + countItem(item), 0);

  return (
    <Reveal className={spanClass} delayMs={(index % 4) * 70}>
      <article
        className={`interactive-card status-panel h-full rounded-lg border ${accent.border} bg-slate-950/80 p-5 shadow-[0_20px_80px_rgba(3,7,18,0.34)] backdrop-blur sm:p-6`}
      >
        <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${accent.band} to-transparent opacity-80`} />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${accent.dot}`} />
                <h2 className="break-words text-xl font-semibold text-white">{group.title}</h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">{group.subtitle}</p>
            </div>
            <span className={`shrink-0 rounded-lg border px-3 py-1 text-xs font-semibold ${accent.pill}`}>
              {totalItems}
            </span>
          </div>

          <div className={group.wide ? 'mt-5 grid gap-2.5 lg:grid-cols-2' : 'mt-5 grid gap-2.5'}>
            {group.items.map((item) => (
              <EggItemRow key={`${group.title}-${item.name}`} item={item} accent={accent} />
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Catalog() {
  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-6 max-w-3xl">
          <p className="section-eyebrow">Catalog</p>
          <h2 className="section-title">Nhóm egg hiện có</h2>
          <p className="section-copy">
            Chỉ hiển thị nhóm cấp cao và tên egg sạch. Tên file gốc được ẩn khỏi giao diện.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {eggGroups.map((group, index) => (
            <EggCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function EggPage() {
  return (
    <main className="min-h-screen pb-10">
      <Header />
      <Summary />
      <Catalog />
      <SiteFooter />
    </main>
  );
}
