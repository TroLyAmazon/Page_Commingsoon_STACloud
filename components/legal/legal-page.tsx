import Link from 'next/link';
import { Reveal } from '@/components/ui/reveal';
import type { LegalSection } from './legal-content';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <main className="min-h-screen px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-5 backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-3 py-3 transition hover:border-cyan-300/20 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/15 bg-white/5 p-2">
                <img
                  src="/picture/logoSTACloud.png"
                  alt="STACloud"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-white">STACloud</p>
                <p className="text-xs text-slate-400">Tài liệu pháp lý</p>
              </div>
            </Link>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://portal.stacloud.dev/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Mở Portal
              </a>
              <a
                href="https://discord.gg/nq8B4JXmnm"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Vào Discord
              </a>
            </div>
          </div>
        </Reveal>

        <section className="mt-8">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100 sm:text-xs sm:tracking-[0.28em]">
              {eyebrow}
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {title}
              </h1>
              <p className="text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">{intro}</p>
              <p className="text-sm font-medium text-cyan-100">Cập nhật lần cuối: {lastUpdated}</p>
            </div>
          </Reveal>
        </section>

        <section className="mt-10 grid gap-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delayMs={index * 50}>
              <article className="status-panel rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur">
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                    {paragraph}
                  </p>
                ))}

                {section.bullets ? (
                  <ul className="mt-4 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.subsections?.map((subsection) => (
                  <div
                    key={subsection.title}
                    className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h3 className="text-base font-semibold text-white sm:text-lg">{subsection.title}</h3>

                    {subsection.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                        {paragraph}
                      </p>
                    ))}

                    {subsection.bullets ? (
                      <ul className="mt-4 space-y-3">
                        {subsection.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </article>
            </Reveal>
          ))}
        </section>
      </div>
    </main>
  );
}
