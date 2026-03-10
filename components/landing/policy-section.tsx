import { policyGroups } from './content';

export function PolicySection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Important Rules</p>
          <h2 className="section-title">Những điều bạn cần biết trước khi dùng free server</h2>
          <p className="section-copy">
            Để tránh bị suspended hoặc mất dữ liệu ngoài ý muốn, hãy đọc kỹ các quy định dưới
            đây trước khi tạo server.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {policyGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 space-y-4">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
