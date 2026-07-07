import Link from "next/link";

import { cn } from "@/util/cn";
import { Container, Button, Dropdown } from "@/components/ui";
import { Logo } from "@/components/brand/Logo";
import { NAV_MENU, SERVICES_MENU } from "@/constants/home";

/* Desktop header: logo + nav (with a "Ydelser" dropdown) on the left, CTA on
   the right. `overlay` floats it transparently over the hero; `solid` is the
   default sticky bar for inner pages. Mobile burger menu is a TODO. */
export function Header({ variant = "solid" }: { variant?: "solid" | "overlay" }) {
  const overlay = variant === "overlay";

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
            href="/"
            className="text-[14px] font-medium leading-[20px] text-pine transition-colors hover:text-leaf"
          >
            Forside
          </Link>
          <Dropdown label="Ydelser" items={[...SERVICES_MENU]} />
          {NAV_MENU.filter((i) => i.href !== "/").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium leading-[20px] text-pine transition-colors hover:text-leaf"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          href="/kontakt"
          variant="black"
          size="sm"
          className="ml-auto hidden min-w-[176px] font-semibold normal-case sm:inline-flex"
        >
          Få et tilbud
        </Button>
      </Container>
    </header>
  );
}
