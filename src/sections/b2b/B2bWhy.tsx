import { Container, Heading, Button, StarChip } from "@/components/ui";
import { getLocale } from "next-intl/server";

import { b2bCopy } from "@/lib/i18n/copy";

/* § 4 — Capabilities & responsibility. Contrast band (pine): the reliable-capacity
   argument, six proof chips, the three trade leads shown compactly, and a link to
   the team page. */
export async function B2bWhy() {
  const { B2B_WHY } = b2bCopy(await getLocale());
  return (
    <section className="bg-pine py-16 text-white xl:py-24">
      <Container>
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-24">
          <div className="shrink-0 xl:max-w-[560px]">
            <Heading as="h2" size="section" className="break-words hyphens-auto text-white">
              {B2B_WHY.h2}
            </Heading>
            <div aria-hidden className="my-6 size-[26px] rounded-full bg-leaf" />
            <p className="font-light leading-[1.35] text-white/90 xl:text-[18px]">{B2B_WHY.intro}</p>

            {/* Trade leads — compact responsibility line. */}
            <ul className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-6">
              {B2B_WHY.leads.map((lead) => (
                <li key={lead.name} className="text-sm">
                  <span className="font-bold text-white">{lead.name}</span>
                  <span className="text-white/60"> — {lead.role}</span>
                </li>
              ))}
            </ul>

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
