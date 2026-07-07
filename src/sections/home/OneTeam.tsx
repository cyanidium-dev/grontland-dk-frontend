import { Container, InfoBox, Star } from "@/components/ui";
import { ONETEAM } from "@/constants/home";

/* SHELL — "Flere fag samlet i én plan": intro + 4 benefit cards. */
export function OneTeam() {
  return (
    <section className="py-16 xl:py-24">
      <Container className="grid gap-12 xl:grid-cols-2 xl:gap-16">
        <div className="max-w-[420px]">
          <h2 className="mb-6 font-display text-[28px] font-bold uppercase leading-none text-pine xl:text-[44px]">
            {ONETEAM.h2}
          </h2>
          <p className="font-light leading-[1.5] text-pine/70 xl:text-[16px]">{ONETEAM.intro}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {ONETEAM.cards.map((card) => (
            <li key={card.title}>
              <InfoBox variant="mist" className="h-full border border-line p-5">
                <Star variant="leaf" className="mb-3 size-8" />
                <h3 className="mb-1.5 text-[15px] font-bold uppercase leading-tight text-pine">
                  {card.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-pine/60">{card.desc}</p>
              </InfoBox>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
