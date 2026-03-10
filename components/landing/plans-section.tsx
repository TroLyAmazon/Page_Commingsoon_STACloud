import { freePlans } from './content';

export function PlansSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Plans</p>
          <h2 className="section-title">Gói free được trình bày rõ như một hosting brand</h2>
          <p className="section-copy">
            Không để landing trong tình trạng “thông báo tạm”. Phần này giờ cho người dùng
            thấy ngay gói nào đang mở, gói nào tạm dừng và mỗi gói phục vụ nhu cầu gì.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {freePlans.map((plan) => (
            <article
              key={plan.name}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-br ${plan.accent} opacity-80 blur-3xl transition group-hover:opacity-100`}
              />
              <div className="relative space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{plan.description}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                      plan.status === 'Open'
                        ? 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                        : 'border border-amber-300/20 bg-amber-300/10 text-amber-200'
                    }`}
                  >
                    {plan.status}
                  </span>
                </div>

                <ul className="space-y-3">
                  {plan.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-base text-slate-200">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://discord.gg/nq8B4JXmnm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  Đăng ký qua Discord
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
