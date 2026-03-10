import { benefits } from './content';

export function BenefitsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Why STACloud</p>
          <h2 className="section-title">
            Không chỉ có slot free, mà còn có luồng sử dụng rõ ràng
          </h2>
          <p className="section-copy">
            Mình chuyển bố cục sang kiểu hosting site để thương hiệu trông sáng hơn: có lý do
            chọn, có hạ tầng, có plan, có process, không còn giống trang waiting page nữa.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
