import Link from 'next/link';
import { Reveal } from '@/components/ui/reveal';
import { SiteFooter } from '@/components/shared/site-footer';
import { homeConfig } from '@/components/home/content';
import { Section3DAccent } from '@/components/visual/section-3d-accent';
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
        <Reveal className="rounded-lg border border-cyan-300/15 bg-black/70 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="interactive-card inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-300/20 bg-black/60 p-2">
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

            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              <a
                href={homeConfig.panelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 sm:w-auto"
              >
                Mở Portal
              </a>
              <a
                href={homeConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-blue-300/25 bg-blue-300/10 px-4 py-2.5 text-sm font-semibold text-blue-50 transition hover:border-blue-300/45 hover:bg-blue-300/15 sm:w-auto"
              >
                Discord
              </a>
              <a
                href={homeConfig.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.12] sm:w-auto"
              >
                Zalo
              </a>
              <a
                href={homeConfig.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.12] sm:w-auto"
              >
                Messenger
              </a>
            </div>
          </div>
        </Reveal>

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end">
          <Reveal className="min-w-0 space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100 sm:text-xs sm:tracking-[0.28em]">
              {eyebrow}
            </div>

            <div className="space-y-4">
              <h1 className="max-w-full break-words text-3xl font-semibold leading-tight text-white sm:max-w-4xl sm:text-5xl">
                {title}
              </h1>
              <p className="text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">{intro}</p>
              <p className="text-sm font-medium text-cyan-100">Cập nhật lần cuối: {lastUpdated}</p>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <Section3DAccent variant="legal" size="compact" />
          </Reveal>
        </section>

        <section className="mt-10 grid gap-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delayMs={index * 50}>
              <article className="status-panel rounded-lg border border-cyan-300/15 bg-slate-950/70 p-6 backdrop-blur">
                <span className="card-3d-badge card-3d-badge--legal" aria-hidden="true">
                  <span />
                </span>
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
                    className="mt-6 rounded-lg border border-cyan-300/10 bg-white/[0.025] p-5"
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

      <SiteFooter />
    </main>
  );
}
