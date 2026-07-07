import Link from "next/link";

import { Container } from "@/components/ui";
import { Logo } from "@/components/brand/Logo";
import { NAV_MENU } from "@/constants/home";

/* SHELL — footer: brand + nav columns. Contact details / CVR TODO. */
export function Footer() {
  return (
    <footer className="border-t border-line bg-mist py-14">
      <Container className="flex flex-col gap-10 xl:flex-row xl:justify-between">
        <div className="max-w-sm">
          <Logo className="text-[24px]" />
          <p className="mt-4 text-sm font-light leading-relaxed text-pine/60">
            Renovering og byggearbejde for private og entreprenører i København og Storkøbenhavn.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-10 gap-y-3">
          {NAV_MENU.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-pine transition-colors hover:text-leaf"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="mt-10 border-t border-line pt-6 text-[12px] font-light text-pine/50">
        © {new Date().getFullYear()} Grønt Land DK. Alle rettigheder forbeholdes.
      </Container>
    </footer>
  );
}
