import { servicePlans } from './content';

function getPlanBadgeClasses(status: string) {
  if (status === 'paused') {
    return 'border border-amber-300/20 bg-amber-300/10 text-amber-200';
  }

  if (status === 'warning') {
    return 'border border-rose-300/20 bg-rose-300/10 text-rose-100';
  }

  if (status === 'beta') {
    return 'border border-blue-300/20 bg-blue-300/10 text-blue-100';
  }

  return 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-300';
}

function getPlanCardClasses(name: string, status: string) {
  const surface =
    status === 'warning'
      ? 'border-rose-300/20 bg-rose-300/[0.05]'
      : status === 'beta'
        ? 'border-blue-300/20 bg-blue-300/[0.05]'
      : status === 'paused'
        ? 'border-amber-300/20 bg-amber-300/[0.05]'
        : 'border-white/10 bg-slate-950/70';

  const span = name === 'TESTER' ? 'md:col-span-2 xl:col-span-6' : 'xl:col-span-3';

  return `${surface} ${span}`;
}

export function PlansSection() {
  const testerPlan = servicePlans.find((plan) => plan.name === 'TESTER');

  return (
    <section id="plans" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Plans</p>
          <h2 className="section-title">
            Gói dịch vụ được trình bày rõ ràng để bạn dễ so sánh và lựa chọn
          </h2>
          <p className="section-copy">
            Bảng tóm tắt giúp bạn xem nhanh toàn bộ dịch vụ. Các card bên dưới hiển thị chi tiết
            giá, slot, cấu hình, tùy chọn nâng cấp và cảnh báo của từng gói.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
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

        {testerPlan ? (
          <div className="mt-8 rounded-[1.6rem] border border-rose-300/20 bg-gradient-to-r from-rose-300/[0.10] via-amber-300/[0.06] to-transparent p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-100/80">
                  Cảnh báo TESTER
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Node miễn phí có rủi ro dữ liệu</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-rose-50">
                  TESTER là node tài trợ nên có thể bị can thiệp hoặc gián đoạn bất ngờ. Bạn phải
                  tự backup dữ liệu; STACloud không chịu trách nhiệm về mất mát dữ liệu trên node
                  này.
                </p>
              </div>
              <span className="w-fit rounded-full border border-rose-200/30 bg-rose-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-100">
                {testerPlan.price}
              </span>
            </div>
          </div>
        ) : null}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-12">
          {servicePlans.map((plan) => (
            <article
              key={plan.name}
              className={`status-panel group relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_24px_80px_rgba(2,6,23,0.28)] transition hover:-translate-y-1 hover:border-white/20 ${getPlanCardClasses(plan.name, plan.status)}`}
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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Giá</p>
                    <p className="mt-2 text-2xl font-semibold text-cyan-100">{plan.price}</p>
                  </div>
                  <div className="status-tile rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Slot / ghi chú
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

                {plan.addOns.length > 0 ? (
                  <div className="rounded-[1.35rem] border border-cyan-300/15 bg-cyan-300/[0.05] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                      Tùy chọn nâng cấp
                    </p>
                    <ul className="mt-3 space-y-3">
                      {plan.addOns.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-200" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

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
