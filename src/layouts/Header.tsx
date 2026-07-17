import { getLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { cn } from "@/util/cn";
import { Container, Dropdown } from "@/components/ui";
import { OpenQuoteButton } from "@/components/quote";
import { Logo } from "@/components/brand/Logo";
import { homeCopy } from "@/lib/i18n/copy";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

/* Desktop header: logo + nav (with a "Ydelser" dropdown) on the left, CTA on
   the right. `overlay` floats it transparently over the hero; `solid` is the
   default sticky bar for inner pages. Below xl, a morphing burger opens the
   mobile drawer (see MobileMenu). Nav labels localize by request locale. */
export async function Header({ variant = "solid" }: { variant?: "solid" | "overlay" }) {
  const overlay = variant === "overlay";
  const locale = await getLocale();
  const c = homeCopy(locale);
  const en = locale === "en";
  const ydelserLabel = en ? "Services" : "Ydelser";
  const ctaLabel = en ? "Get a quote" : "Få et tilbud";
  const [home, ...rest] = c.NAV_MENU;

  return (
    <header
      className={cn(
        overlay
          ? "sticky top-0 z-50 bg-white/75 backdrop-blur-md"
          : "sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur",
      )}
    >
      <Container className="flex h-[72px] items-center gap-8">
        <Logo />

        <nav className="hidden items-center gap-6 xl:ml-20 xl:flex">
          <Link
            href={home.href}
            className="text-[14px] font-medium leading-[20px] text-pine transition-colors hover:text-leaf"
          >
            {home.label}
          </Link>
          <Dropdown label={ydelserLabel} items={[...c.SERVICES_MENU]} />
          {rest.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium leading-[20px] text-pine transition-colors hover:text-leaf"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:flex" />
          <OpenQuoteButton
            variant="black"
            size="sm"
            className="hidden min-w-[176px] font-semibold normal-case sm:inline-flex"
          >
            {ctaLabel}
          </OpenQuoteButton>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
