import { notes, quickSteps, requestFormat, siteConfig } from './content';

export function GuideSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
          <p className="section-eyebrow">Quick Start</p>
          <h2 className="section-title">Hướng dẫn tạo server nhanh</h2>
          <p className="section-copy">
            Luồng đăng ký được rút gọn để admin xử lý nhanh và người dùng gửi ticket đúng
            ngay từ lần đầu.
          </p>

          <div className="mt-8 space-y-4">
            {quickSteps.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 font-semibold text-slate-950">
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

        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 backdrop-blur sm:p-8">
          <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
              Ticket format
            </p>
            <p className="mt-3 text-lg font-semibold text-white">Ví dụ ticket</p>
            <p className="mt-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 font-mono text-sm text-cyan-100">
              {requestFormat}
            </p>
          </div>

          <div className="grid gap-4">
            {notes.map((note) => (
              <div
                key={note}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300"
              >
                {note}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-slate-400">
              Kênh hỗ trợ chính:
              <span className="ml-2 font-semibold text-white">{siteConfig.supportChannel}</span>
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.discordUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Vào Discord ngay
              </a>
              <a
                href={siteConfig.panelUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Xem Panel Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
