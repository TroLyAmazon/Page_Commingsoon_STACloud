import { siteConfig } from './content';

export function FooterSection() {
  return (
    <footer className="px-4 pb-10 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-950/70 px-6 py-6 text-sm text-slate-400 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-1">
            © {siteConfig.copyrightYear} {siteConfig.name}, {siteConfig.signature}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={siteConfig.siteUrl}
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
          <a
            href={siteConfig.panelUrl}
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Panel
          </a>
          <a
            href={siteConfig.discordUrl}
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
