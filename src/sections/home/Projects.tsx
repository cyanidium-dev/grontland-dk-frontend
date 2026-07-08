import Link from "next/link";

import { Container, Button, Heading, Marquee, StarChip } from "@/components/ui";
import { StarIcon } from "@/components/icons";
import { MARQUEE_WORDS, PROJECTS } from "@/constants/home";

/* "Udvalgte projekter" — Figma #1018:721 + marquee band #1019:780.
   Leaf marquee above mist band; left H2 + sub, top-right pine CTA; 3 linked
   cards with leaf-bordered photos + overlapping category badge. */
export function Projects() {
  return (
    <>
      {/* Leaf marquee — Figma #1019:780, sits between Process and Projects */}
      <Marquee
        durationSec={40}
        className="bg-leaf py-4"
        separator={<StarIcon className="mx-6 size-3.5 shrink-0 text-white" />}
        items={Array.from({ length: 5 })
          .flatMap(() => MARQUEE_WORDS.map((w) => w))
          .map((w, i) => (
            <span
              key={i}
              className="text-[14px] font-bold uppercase tracking-[2.8px] text-white"
            >
              {w}
            </span>
          ))}
      />

      <section className="bg-mist py-16 xl:py-24">
        <Container>
          <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
            <div className="max-w-2xl">
              <Heading as="h2" size="section">
                {PROJECTS.h2}
              </Heading>
              <p className="mt-4 font-light leading-[1.5] text-pine/70 xl:text-[18px]">
                {PROJECTS.sub}
              </p>
            </div>
            <div className="shrink-0 xl:pt-4">
              <Button href={PROJECTS.cta.href} variant="pine" size="md" className="w-full sm:w-auto">
                {PROJECTS.cta.label}
              </Button>
            </div>
          </div>

          <ul className="mt-10 grid gap-6 md:grid-cols-3 xl:mt-14">
            {PROJECTS.cards.map((card) => (
              <li key={card.href}>
                <Link href={card.href} className="group block">
                  <div className="relative">
                    <div className="relative aspect-[4/3] w-full rounded-2xl border-4 border-leaf">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        className="h-full w-full rounded-xl object-cover"
                      />
                    </div>
                    <StarChip
                      text={card.category}
                      boxVariant="light"
                      starVariant="leaf"
                      textSize="sm"
                      className="absolute -bottom-1 -left-1 w-[calc(100%+8px)] !py-3 shadow-md"
                    />
                  </div>
                  <h3 className="mt-8 text-[16px] font-bold uppercase leading-6 text-pine">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-pine/60">
                    {card.desc}
                  </p>
                  <span className="mt-3 inline-block text-[12px] font-bold uppercase tracking-[0.3px] text-moss underline underline-offset-4">
                    {PROJECTS.linkLabel}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
