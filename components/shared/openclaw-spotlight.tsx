type OpenClawSpotlightProps = {
  discordUrl: string;
  zaloUrl: string;
};

const openClawHighlights = ['Free Beta', 'Cần domain riêng', 'Khuyến nghị Singapore / Việt Nam'] as const;

export function OpenClawSpotlight({ discordUrl, zaloUrl }: OpenClawSpotlightProps) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-5 shadow-[0_30px_100px_rgba(8,145,178,0.16)] backdrop-blur sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                Dịch vụ mới
              </span>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                OpenClaw Beta đã mở miễn phí
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                OpenClaw hiện được mở miễn phí cho cộng đồng sử dụng thử. Bạn cần có domain riêng và
                mở ticket để STACloud xác minh, sau đó gán domain vào hệ thống OpenClaw.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {openClawHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm font-semibold text-cyan-50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5 sm:p-6">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
            <div className="space-y-4">
              <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                  Domain
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Dùng domain riêng miễn phí sau khi xác minh. Nếu muốn dùng domain của STACloud,
                  phụ phí là <span className="font-semibold text-white">10.000 VNĐ</span>.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.07] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/80">
                  Lưu ý location
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Nên chọn Singapore hoặc Việt Nam. Không khuyến nghị Hong Kong cho workload AI vì
                  một số dịch vụ AI có thể bị hạn chế.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Mở ticket Discord
                </a>
                <a
                  href={zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  Hỏi qua Zalo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
