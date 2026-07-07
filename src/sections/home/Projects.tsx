import Link from "next/link";

import { Container, Button } from "@/components/ui";
import { PROJECTS } from "@/constants/home";

/* SHELL — "Udvalgte projekter": 3 clickable project cards (each opens the
   project) + CTA. Designer note: add the photo-scroll animation later. */
export function Projects() {
  return (
    <section className="py-16 xl:py-24">
      <Container>
        <div className="mb-10 max-w-2xl xl:mb-14">
          <h2 className="mb-4 font-display text-[28px] font-bold uppercase leading-none text-pine xl:text-[52px]">
            {PROJECTS.h2}
          </h2>
          <p className="font-light text-pine/70 xl:text-[18px]">{PROJECTS.sub}</p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {PROJECTS.cards.map((card) => (
            <li key={card.href}>
              <Link href={card.href} className="group block">
                {/* Image slot — placeholder */}
                <div
                  className="mb-4 aspect-[4/3] overflow-hidden rounded-[14px] bg-mist ring-1 ring-inset ring-line transition group-hover:ring-leaf"
                  aria-label={card.imageAlt}
                />
                <span className="text-[12px] font-semibold uppercase tracking-wide text-leaf">
                  {card.category}
                </span>
                <h3 className="mb-2 mt-1 text-[18px] font-bold text-pine">{card.title}</h3>
                <p className="mb-3 text-sm font-light leading-relaxed text-pine/60">
                  {card.desc}
                </p>
                <span className="text-[13px] font-semibold text-pine underline-offset-4 group-hover:underline">
                  {PROJECTS.linkLabel} →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Button href={PROJECTS.cta.href} variant="pine" withArrow>
            {PROJECTS.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
