type OpenClawSpotlightProps = {
  discordUrl: string;
  zaloUrl: string;
  messengerUrl: string;
};

import { Section3DAccent } from '@/components/visual/section-3d-accent';

const openClawHighlights = ['Free Beta', 'Không cần domain riêng', 'Khuyến nghị Singapore / Việt Nam'] as const;

export function OpenClawSpotlight({ discordUrl, zaloUrl, messengerUrl }: OpenClawSpotlightProps) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-cyan-300/20 bg-slate-950/80 p-5 shadow-[0_30px_100px_rgba(8,145,178,0.12)] backdrop-blur sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative border-l border-cyan-300/20 pl-5">
            <div className="relative">
              <span className="inline-flex rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                Dịch vụ mới
              </span>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                OpenClaw Beta đã mở miễn phí
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                OpenClaw hiện được mở miễn phí cho cộng đồng sử dụng thử và không cần domain riêng.
                Nếu cần hỗ trợ, bạn có thể liên hệ STACloud qua Discord, Zalo hoặc Messenger Group.
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

          <div className="status-panel relative rounded-lg border border-cyan-300/15 bg-slate-950/70 p-5 sm:p-6">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
            <Section3DAccent variant="community" size="compact" className="mb-5" />
            <div className="space-y-4">
              <div className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                  Truy cập
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  OpenClaw hiện không cần domain riêng. Anh em có thể trải nghiệm miễn phí và nhắn hỗ trợ nếu cần cấu hình thêm.
                </p>
              </div>

              <div className="rounded-lg border border-blue-300/20 bg-blue-300/[0.06] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/80">
                  Lưu ý location
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Nên chọn Singapore hoặc Việt Nam. Không khuyến nghị Hong Kong cho workload AI vì
                  một số dịch vụ AI có thể bị hạn chế.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-400 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-300 hover:text-slate-950"
                >
                  Mở ticket Discord
                </a>
                <div className="rounded-lg border border-cyan-300/15 bg-slate-950/55 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                    Group Chat
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                    <a href={messengerUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-100 transition hover:text-white">
                      Messenger
                    </a>
                    <a href={zaloUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-100 transition hover:text-white">
                      Zalo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
