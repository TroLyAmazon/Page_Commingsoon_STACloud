import { locations } from './content';

export function LocationsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Locations</p>
          <h2 className="section-title">Các location hiện có cho gói cộng đồng và paid service</h2>
          <p className="section-copy">
            Người dùng có thể nhìn nhanh khu vực nào hỗ trợ free hoặc paid để chọn gói phù hợp mà
            không cần hỏi lại trong ticket.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <article
              key={location.name}
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <img
                      src={location.flagSrc}
                      alt={`${location.name} flag`}
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-2xl font-semibold text-white">{location.name}</p>
                    <h3 className="mt-2 text-xl font-semibold text-cyan-100">{location.speed}</h3>
                  </div>
                </div>
                <span className="w-fit rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  {location.availability}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-400">{location.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
