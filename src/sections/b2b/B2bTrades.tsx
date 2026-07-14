import Link from "next/link";

import { Container, Heading } from "@/components/ui";
import { B2B_TRADES } from "@/constants/b2b";

/* Compact service-link strip — internal links to the trade pages. */
export function B2bTrades() {
  return (
    <section className="bg-white py-16 xl:py-24">
      <Container>
        <div className="flex flex-col gap-8">
          <Heading as="h2" size="card">
            {B2B_TRADES.h2}
          </Heading>
          <ul className="flex flex-wrap gap-2">
            {B2B_TRADES.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block rounded-full bg-leaf/12 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-moss transition-colors hover:bg-leaf hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
