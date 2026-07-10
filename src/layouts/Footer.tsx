import Link from "next/link";

import { CodeSiteIcon } from "@/components/brand/CodeSiteIcon";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui";
import { FOOTER } from "@/constants/home";

/* Footer — Figma #3032:171 (1280×469). Pine 4-col + bottom credit bar. */
export function Footer() {
  return (
    <footer className="bg-pine py-16 text-white">
      <Container className="flex flex-col gap-12">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_1fr] xl:gap-10">
          <div>
            <Logo variant="onDark" />
            <p className="mt-2 max-w-[176px] text-sm font-normal leading-5 text-white/60">
              {FOOTER.blurb}
            </p>
          </div>

          <nav aria-label={FOOTER.menuTitle}>
            <p className="text-sm font-bold uppercase tracking-[0.35px] text-leaf">
              {FOOTER.menuTitle}
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER.menu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm leading-5 text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={FOOTER.servicesTitle}>
            <p className="text-sm font-bold uppercase tracking-[0.35px] text-leaf">
              {FOOTER.servicesTitle}
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm leading-5 text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35px] text-leaf">
              {FOOTER.contactTitle}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-5 text-white/70">
              {FOOTER.contact.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          <p className="text-xs leading-4 text-white/40">{FOOTER.copyright}</p>
          <a
            href={FOOTER.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col text-white transition-opacity hover:opacity-80"
          >
            <span className="text-[7px] font-normal uppercase leading-[120%]">
              {FOOTER.credit.by}
            </span>
            <span className="mt-1 inline-flex items-center gap-1.5 text-[14px] font-medium uppercase leading-[120%]">
              {FOOTER.credit.name}
              <CodeSiteIcon className="mb-0.5" />
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
