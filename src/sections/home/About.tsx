import { Container, Heading, Button, StarChip } from "@/components/ui";
import { ABOUT } from "@/constants/home";

/* SHELL — "Om Grønt Land DK": intro + facts (StarChips) + team trades + a
   bordered photo slot. Placed after Process/Projects/Gallery per the spec. */
export function About() {
  return (
    <section className="py-16 xl:py-24">
      <Container>
        <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:gap-16">
          <div className="xl:w-[380px] xl:shrink-0">
            <Heading as="h2" size="section">
              {ABOUT.h2}
            </Heading>
            <div aria-hidden className="my-6 size-[26px] rounded-full bg-leaf" />
            <p className="font-light leading-normal text-pine/75 xl:text-[17px]">{ABOUT.text}</p>

            <h3 className="mt-10 font-display text-[18px] font-bold uppercase text-pine">
              {ABOUT.team.h3}
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-pine/60">
              {ABOUT.team.text}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {ABOUT.team.trades.map((trade) => (
                <span
                  key={trade}
                  className="rounded-full bg-leaf/12 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-moss"
                >
                  {trade}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href={ABOUT.cta.href} variant="pine" withArrow className="w-full sm:w-auto">
                {ABOUT.cta.label}
              </Button>
            </div>
          </div>

          <ul className="flex flex-col gap-3 xl:w-[420px] xl:shrink-0">
            {ABOUT.facts.map((fact) => (
              <li key={fact.label}>
                <StarChip
                  text={`${fact.label}: ${fact.value}`}
                  boxVariant="mist"
                  starVariant="leaf"
                  textSize="sm"
                  className="h-full border border-line"
                />
              </li>
            ))}
          </ul>

          <div className="xl:flex-1">
            {/* Image slot — placeholder */}
            <div
              className="h-[280px] w-full overflow-hidden rounded-2xl border-4 border-solid border-leaf bg-mist xl:h-[400px]"
              aria-label={ABOUT.imageAlt}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
