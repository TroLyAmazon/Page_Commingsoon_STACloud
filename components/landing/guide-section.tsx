import { notes, quickSteps, siteConfig } from './content';

export function GuideSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="status-panel rounded-lg border border-cyan-300/15 bg-slate-950/70 p-6 backdrop-blur sm:p-8">
          <p className="section-eyebrow">Quick Start</p>
          <h2 className="section-title">3 bước để chọn gói và đăng ký nhanh</h2>
          <p className="section-copy">
            Chỉ cần chọn đúng gói, gửi nhu cầu sử dụng và chờ xác nhận cấp phát từ STACloud.
          </p>

          <div className="mt-8 space-y-4">
            {quickSteps.map((item) => (
              <div
                key={item.step}
                className="status-tile flex gap-4 rounded-lg border border-cyan-300/10 bg-black/30 p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white font-semibold text-slate-950">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="status-panel space-y-6 rounded-lg border border-cyan-300/15 bg-slate-950/75 p-6 backdrop-blur sm:p-8">
          <div className="grid gap-4">
            {notes.map((note) => (
              <div
                key={note}
                className="rounded-lg border border-cyan-300/10 bg-white/[0.025] p-4 text-sm leading-7 text-slate-300"
              >
                {note}
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-cyan-300/10 bg-white/[0.025] p-5">
            <p className="text-sm text-slate-400">
              Kênh hỗ trợ chính:
              <span className="ml-2 font-semibold text-white">Discord ticket</span>
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Kênh theo dõi tài nguyên:
              <span className="ml-2 font-semibold text-white">{siteConfig.statusChannel}</span>
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.panelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Mở Portal
              </a>
              <a
                href={siteConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-blue-300/25 bg-blue-300/10 px-5 py-3 text-sm font-semibold text-blue-50 transition hover:border-blue-300/45 hover:bg-blue-300/15"
              >
                Tạo ticket Discord
              </a>
            </div>
            <div className="mt-4 rounded-lg border border-cyan-300/15 bg-slate-950/55 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                Group Chat
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                <a
                  href={siteConfig.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100 transition hover:text-white"
                >
                  Messenger
                </a>
                <a
                  href={siteConfig.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-100 transition hover:text-white"
                >
                  Zalo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
