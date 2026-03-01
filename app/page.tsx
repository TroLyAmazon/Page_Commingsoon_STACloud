'use client';

import { useState } from 'react';

const PANEL_URL = 'https://panel.stacloud.dev/';
const DISCORD_URL = 'https://discord.gg/nq8B4JXmnm';
const SITE_URL = 'https://stacloud.dev/';

// Logo: dùng logoSTACloud.png (script copy-assets copy picture/ → public/picture/)
const LOGO_SRC = '/picture/logoSTACloud.png';
const LOGO_FALLBACK = '/picture/logo.png';

function Header() {
  const [logoSrc, setLogoSrc] = useState(LOGO_SRC);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (logoSrc === LOGO_FALLBACK) setFailed(true);
    else setLogoSrc(LOGO_FALLBACK);
  };

  return (
    <header className="w-full px-4 py-5 sm:px-6 sm:py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <a
          href={SITE_URL}
          className="flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[var(--bg-gradient-from)] rounded-lg"
        >
          {!failed ? (
            <img
              src={logoSrc}
              alt="STA Cloud"
              className="h-9 w-auto sm:h-10 min-w-[2.25rem] min-h-[2.25rem]"
              onError={handleError}
            />
          ) : null}
          {failed ? (
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-sm font-bold text-indigo-300 sm:text-base">
              STA
            </span>
          ) : null}
          <span className="text-lg font-semibold text-white sm:text-xl">
            STA Cloud
          </span>
          <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/40">
            Coming Soon
          </span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="animate-fade-in animate-float text-3xl font-bold tracking-tight text-white opacity-0 sm:text-4xl md:text-5xl">
          STA Cloud đang phát triển
        </h1>
        <p
          className="animate-fade-in mt-4 text-gray-400 opacity-0 sm:text-lg"
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
        >
          Hệ thống hosting & panel đang hoàn thiện. Theo dõi Discord để cập nhật.
        </p>
        <div
          className="animate-fade-in mt-10 flex flex-col items-center justify-center gap-3 opacity-0 sm:flex-row sm:gap-4"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          <a
            href={PANEL_URL}
            className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[var(--bg-gradient-from)] sm:w-auto"
          >
            Vào Panel
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-600 bg-gray-800/50 px-6 py-3 text-sm font-medium text-gray-200 transition hover:border-gray-500 hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[var(--bg-gradient-from)] sm:w-auto"
          >
            Join Discord
          </a>
        </div>
        <p
          className="animate-fade-in mt-4 opacity-0"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <a
            href={SITE_URL}
            className="text-sm text-gray-500 underline decoration-gray-600 underline-offset-2 transition hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
          >
            Trang chủ
          </a>
        </p>
      </div>
    </section>
  );
}

const cards = [
  {
    title: 'Dịch vụ',
    items: ['Game hosting', 'Web hosting', 'Nodes'],
    delay: '0.2s',
  },
  {
    title: 'Thông báo',
    items: ['Đang giai đoạn beta', 'Ưu tiên cập nhật qua Discord'],
    delay: '0.35s',
  },
  {
    title: 'Bảo mật',
    items: ['HTTPS', 'Cloudflare', 'Rate limit'],
    delay: '0.5s',
  },
];

function InfoCards() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3 sm:gap-6">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="animate-fade-in rounded-xl border border-gray-700/60 bg-gray-900/40 p-5 opacity-0 backdrop-blur-sm sm:p-6"
            style={{
              animationDelay: card.delay,
              animationFillMode: 'forwards',
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
              {card.title}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-400">
              {card.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800/60 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500" suppressHydrationWarning>
          © {year} STA Cloud
        </p>
        <nav className="flex gap-6 text-sm">
          <a
            href={PANEL_URL}
            className="text-gray-400 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
          >
            Panel
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
          >
            Discord
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <InfoCards />
      <Footer />
    </main>
  );
}
