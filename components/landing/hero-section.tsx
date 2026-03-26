import { heroStats, servicePlans, siteConfig } from './content';
import { Reveal } from '@/components/ui/reveal';

function getPlanBadgeClasses(status: string) {
  if (status === 'paused') {
    return 'border border-amber-300/20 bg-amber-300/10 text-amber-200';
  }

  if (status === 'warning') {
    return 'border border-rose-300/20 bg-rose-300/10 text-rose-100';
  }

  return 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-300';
}

function getPlanDotClasses(status: string) {
  if (status === 'paused') {
    return 'bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.9)]';
  }

  if (status === 'warning') {
    return 'bg-rose-300 shadow-[0_0_14px_rgba(253,164,175,0.9)]';
  }

  return 'bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]';
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="space-y-8" delayMs={40}>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100 sm:text-xs sm:tracking-[0.28em]">
              Service Board
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Giá, slot và cảnh báo được ghim thành một dashboard để nhìn là hiểu.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Landing này được đẩy về đúng vai trò service board: để thấy ngay gói nào đang mở,
                gói nào tạm ngưng, giá bao nhiêu và TESTER cần chủ động backup dữ liệu như thế nào.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.discordUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
              >
                Mở Discord để tạo ticket
              </a>
              <a
                href={siteConfig.panelUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:w-auto"
              >
                Mở Portal
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {servicePlans.map((plan, index) => (
                <Reveal key={plan.name} delayMs={120 + index * 60}>
                  <div className="status-tile interactive-card rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                          {plan.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">{plan.highlight}</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold ${getPlanBadgeClasses(plan.status)}`}
                      >
                        {plan.statusLabel}
                      </span>
                    </div>
                    <p className="mt-4 text-lg font-semibold text-cyan-100">{plan.price}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative hero-orbit" delayMs={120}>
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-transparent blur-3xl" />
            <div className="status-panel panel-float relative rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur sm:rounded-[2rem] sm:p-6">
              <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                    Bảng trạng thái dịch vụ
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Một màn hình để quét nhanh portal, slot, giá và cảnh báo vận hành.
                  </p>
                </div>
                <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Live
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map((item, index) => (
                  <Reveal key={item.label} delayMs={180 + index * 60}>
                    <div className="status-tile rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-2xl font-semibold text-white sm:text-3xl">{item.value}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                        {item.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {servicePlans.map((plan, index) => (
                  <Reveal key={plan.name} delayMs={320 + index * 50}>
                    <div className="status-tile interactive-card flex flex-col gap-3 rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`h-2.5 w-2.5 rounded-full ${getPlanDotClasses(plan.status)}`} />
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                            {plan.name}
                          </p>
                          <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-slate-200">
                            {plan.highlight}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{plan.description}</p>
                      </div>

                      <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                        <p className="text-sm font-semibold text-cyan-100">{plan.price}</p>
                        <span
                          className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${getPlanBadgeClasses(plan.status)}`}
                        >
                          {plan.statusLabel}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-5 rounded-[1.35rem] border border-rose-300/15 bg-rose-300/5 p-4 text-sm leading-7 text-rose-50">
                Theo dõi tài nguyên còn lại tại kênh {siteConfig.statusChannel}. Gói TESTER là node
                tài trợ, nên cảnh báo backup dữ liệu sẽ luôn được đặt ở vị trí nổi bật nhất.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
