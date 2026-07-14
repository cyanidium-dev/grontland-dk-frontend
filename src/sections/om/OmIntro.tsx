import { Container, Heading, StarChip } from "@/components/ui";
import { OM_INTRO } from "@/constants/om";

/* "Hvem er vi?" — 2-col: rewritten company text left, fact StarChips right
   (home About treatment without the photo bleed). */
export function OmIntro() {
  return (
    <section className="bg-white py-16 xl:py-24">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-24">
          <div className="max-w-2xl">
            <Heading as="h2" size="section">
              {OM_INTRO.h2}
            </Heading>
            <div aria-hidden className="my-6 size-[26px] rounded-full bg-leaf" />
            <p className="font-light leading-normal text-pine/75 xl:text-[17px]">{OM_INTRO.text}</p>
          </div>

          <ul className="flex flex-col justify-center gap-3">
            {OM_INTRO.facts.map((fact) => (
              <li key={fact.label}>
                <StarChip
                  text={`${fact.label}: ${fact.value}`}
                  boxVariant="mist"
                  starVariant="leaf"
                  textSize="sm"
                  className="border border-line"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
