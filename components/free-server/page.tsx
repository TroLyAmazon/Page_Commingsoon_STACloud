import Link from 'next/link';
import { Reveal } from '@/components/ui/reveal';

import { BenefitsSection } from '@/components/landing/benefits-section';
import { FooterSection } from '@/components/landing/footer-section';
import { GuideSection } from '@/components/landing/guide-section';
import { HeroSection } from '@/components/landing/hero-section';
import { LocationsSection } from '@/components/landing/locations-section';
import { PlansSection } from '@/components/landing/plans-section';
import { PolicySection } from '@/components/landing/policy-section';

export function FreeServerPage() {
  return (
    <main className="min-h-screen pb-10">
      <section className="px-4 pt-6 sm:px-6 sm:pt-8">
        <Reveal className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/70 px-4 py-4 backdrop-blur sm:px-5 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="interactive-card group flex items-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/[0.04] px-3 py-3 transition hover:border-cyan-300/20 hover:bg-white/[0.07] sm:gap-4 sm:px-4"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-white/5 p-2 shadow-[0_0_24px_rgba(34,211,238,0.15)] sm:h-16 sm:w-16">
              <img
                src="/picture/logoSTACloud.png"
                alt="STACloud"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xl font-semibold text-white sm:text-2xl">STACloud</p>
              <p className="max-w-[16rem] text-xs leading-5 text-slate-400 sm:max-w-none sm:text-sm">
                Free server portal for community deployment
              </p>
            </div>
          </Link>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://panel.stacloud.dev/"
              target="_blank"
              rel="noreferrer"
              className="interactive-card inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
            >
              Mở Panel
            </a>
            <a
              href="https://discord.gg/nq8B4JXmnm"
              target="_blank"
              rel="noreferrer"
              className="interactive-card inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10 sm:w-auto"
            >
              Group Discord
            </a>
          </div>
        </Reveal>
      </section>

      <HeroSection />
      <PlansSection />
      <LocationsSection />
      <BenefitsSection />
      <GuideSection />
      <PolicySection />
      <FooterSection />
    </main>
  );
}
