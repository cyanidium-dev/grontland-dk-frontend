import { Container, Heading, Button, StarChip } from "@/components/ui";
import { getLocale } from "next-intl/server";

import { b2bCopy } from "@/lib/i18n/copy";

/* Contrast band (pine) — the integrated-partner argument, five proof chips,
   link to the team page. */
export async function B2bWhy() {
  const { B2B_WHY } = b2bCopy(await getLocale());
  return (
    <section className="bg-pine py-16 text-white xl:py-24">
      <Container>
        <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:gap-24">
          <div className="max-w-md shrink-0">
            <Heading as="h2" size="section" className="text-white">
              {B2B_WHY.h2}
            </Heading>
            <div aria-hidden className="my-6 size-[26px] rounded-full bg-leaf" />
            <p className="font-light leading-[1.35] text-white/90 xl:text-[18px]">{B2B_WHY.intro}</p>
            <Button href={B2B_WHY.link.href} variant="white" size="md" className="mt-8 w-full sm:w-auto">
              {B2B_WHY.link.label}
            </Button>
          </div>

          <ul className="flex w-full flex-col gap-3">
            {B2B_WHY.items.map((item) => (
              <li key={item.title}>
                <StarChip
                  text={`${item.title} — ${item.desc}`}
                  boxVariant="light"
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
