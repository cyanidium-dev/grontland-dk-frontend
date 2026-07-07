import { Container, Button, StarChip } from "@/components/ui";
import { AUDIENCES } from "@/constants/home";

/* SHELL — 2nd block: "Hvem hjælper vi?" with two mirrored colour bands
   (leaf = private, pine = B2B). Designer note: mirrored blocks + an extra
   element at the bottom (TODO once the frame is exported). */
export function Audiences() {
  return (
    <section>
      <div className="bg-mist py-14 xl:py-20">
        <Container>
          <h2 className="font-display text-[28px] font-bold uppercase leading-none text-pine xl:text-[52px]">
            {AUDIENCES.h2}
          </h2>
        </Container>
      </div>

      {AUDIENCES.cards.map((card, i) => (
        <div
          key={card.title}
          className={`py-12 text-white xl:py-[90px] ${card.dark ? "bg-pine" : "bg-leaf"}`}
        >
          <Container
            className={`flex flex-col gap-10 xl:items-center xl:gap-16 ${
              i % 2 ? "xl:flex-row-reverse" : "xl:flex-row"
            }`}
          >
            {/* Image slot — placeholder */}
            <div className="relative shrink-0 xl:w-[560px]">
              <div
                className="h-[240px] rounded-xl bg-white/15 xl:h-[340px]"
                aria-label={card.imageAlt}
              />
              <StarChip
                text={card.title}
                boxVariant="light"
                starVariant={card.dark ? "pine" : "leaf"}
                className="absolute -bottom-5 left-6 right-6 shadow-lg xl:right-auto xl:w-[360px]"
                textSize="sm"
              />
            </div>

            <div className="xl:max-w-[420px]">
              <h3 className="mb-4 font-display text-[24px] font-bold uppercase leading-none xl:text-[32px]">
                {card.title}
              </h3>
              <p className="mb-8 font-light leading-[1.4] text-white/80 xl:text-[16px]">
                {card.text}
              </p>
              <Button href={card.cta.href} variant={card.dark ? "leaf" : "white"}>
                {card.cta.label}
              </Button>
            </div>
          </Container>
        </div>
      ))}
    </section>
  );
}
