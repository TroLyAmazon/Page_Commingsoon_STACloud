import { notes, quickSteps, siteConfig } from './content';

export function GuideSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
          <p className="section-eyebrow">Quick Start</p>
          <h2 className="section-title">Hướng dẫn chọn gói và mở ticket nhanh</h2>
          <p className="section-copy">
            Luồng đăng ký được cập nhật để người dùng chọn đúng gói ngay từ đầu, còn admin thì dễ
            kiểm tra slot và xử lý ticket nhanh hơn.
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
            <p className="mt-2 text-sm text-slate-400">
              Kênh theo dõi tài nguyên:
              <span className="ml-2 font-semibold text-white">{siteConfig.statusChannel}</span>
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
                Mở Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
