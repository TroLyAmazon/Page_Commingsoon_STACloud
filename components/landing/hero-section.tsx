import { freePlans, heroStats, siteConfig } from './content';
import { Reveal } from '@/components/ui/reveal';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="space-y-8" delayMs={40}>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100 sm:text-xs sm:tracking-[0.28em]">
              Official Hosting Landing
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Game hosting và dev server miễn phí, vận hành gọn gàng cho cộng đồng.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                STACloud đã ra mắt chính thức. Landing này được viết lại theo hướng hosting
                brand rõ ràng hơn: dễ nhìn, dễ đăng ký, dễ hiểu location, dễ hiểu rule và dễ
                vào panel ngay khi cần.
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
                Xem panel và store
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {heroStats.map((item, index) => (
                <Reveal key={item.label} delayMs={120 + index * 70}>
                  <div className="interactive-card rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur sm:rounded-[1.5rem] sm:p-5">
                    <p className="text-2xl font-semibold text-white sm:text-3xl">{item.value}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative hero-orbit" delayMs={120}>
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-transparent blur-3xl" />
            <div className="panel-float relative rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur sm:rounded-[2rem] sm:p-6">
              <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                    Tổng quan free server
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Cấp nhanh, policy rõ, ưu tiên cộng đồng đang hoạt động.
                  </p>
                </div>
                <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Slots Live
                </span>
              </div>

              <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                {freePlans.map((plan, index) => (
                  <Reveal key={plan.name} delayMs={180 + index * 70}>
                    <div className="interactive-card rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[1.5rem]">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-lg font-semibold text-white">{plan.name}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-400">
                            {plan.description}
                          </p>
                        </div>
                        <span
                          className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                            plan.status === 'Open'
                              ? 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                              : 'border border-amber-300/20 bg-amber-300/10 text-amber-200'
                          }`}
                        >
                          {plan.status}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {plan.specs.map((spec) => (
                          <span
                            key={spec}
                            className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-4 rounded-[1.25rem] border border-cyan-300/15 bg-cyan-300/5 p-4 text-sm leading-7 text-cyan-50 sm:mt-5 sm:rounded-[1.5rem]">
                Xem tài nguyên còn lại tại kênh {siteConfig.statusChannel}. Server không hoạt
                động 3 ngày có thể bị suspended và dữ liệu có thể bị xóa từ ngày thứ 4.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
