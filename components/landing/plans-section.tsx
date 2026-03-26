import { servicePlans } from './content';

function getPlanBadgeClasses(status: string) {
  if (status === 'paused') {
    return 'border border-amber-300/20 bg-amber-300/10 text-amber-200';
  }

  if (status === 'warning') {
    return 'border border-rose-300/20 bg-rose-300/10 text-rose-100';
  }

  return 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-300';
}

function getPlanCardClasses(name: string, status: string) {
  const surface =
    status === 'warning'
      ? 'border-rose-300/20 bg-rose-300/[0.05]'
      : status === 'paused'
        ? 'border-amber-300/20 bg-amber-300/[0.05]'
        : 'border-white/10 bg-slate-950/70';

  const span = name === 'TESTER' ? 'md:col-span-2 xl:col-span-6' : 'xl:col-span-3';

  return `${surface} ${span}`;
}

export function PlansSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Plans</p>
          <h2 className="section-title">
            Gói dịch vụ được trình bày theo kiểu scan nhanh và quyết định nhanh
          </h2>
          <p className="section-copy">
            Đầu tiên là bảng tóm tắt để nhìn tổng quan. Bên dưới là các card chi tiết với giá,
            slot, tài nguyên và cảnh báo được tách rõ từng mục.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {servicePlans.map((plan) => (
            <div
              key={`scan-${plan.name}`}
              className="status-tile rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4"
            >
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
              <p className="mt-4 text-base font-semibold text-cyan-100">{plan.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-12">
          {servicePlans.map((plan) => (
            <article
              key={plan.name}
              className={`status-panel group relative overflow-hidden rounded-[2rem] border p-6 transition hover:-translate-y-1 hover:border-white/20 ${getPlanCardClasses(plan.name, plan.status)}`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-br ${plan.accent} opacity-80 blur-3xl transition group-hover:opacity-100`}
              />
              <div className="relative space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {plan.highlight}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{plan.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{plan.description}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${getPlanBadgeClasses(plan.status)}`}
                  >
                    {plan.statusLabel}
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="status-tile rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Giá
                    </p>
                    <p className="mt-2 text-lg font-semibold text-cyan-100">{plan.price}</p>
                  </div>
                  <div className="status-tile rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Tình trạng
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{plan.highlight}</p>
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  {plan.specs.map((spec) => (
                    <div
                      key={spec}
                      className="status-tile rounded-[1rem] border border-white/10 bg-slate-900/80 px-3 py-3 text-sm text-slate-200"
                    >
                      {spec}
                    </div>
                  ))}
                </div>

                {plan.warnings.length > 0 ? (
                  <div className="rounded-[1.35rem] border border-rose-300/15 bg-rose-300/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-100/70">
                      Lưu ý quan trọng
                    </p>
                    <ul className="mt-3 space-y-3">
                      {plan.warnings.map((warning) => (
                        <li key={warning} className="flex gap-3 text-sm leading-6 text-rose-50">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-200" />
                          <span>{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <a
                  href="https://discord.gg/nq8B4JXmnm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  {plan.status === 'paused' ? 'Theo dõi Discord' : 'Đăng ký qua Discord'}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
