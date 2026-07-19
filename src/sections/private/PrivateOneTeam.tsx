import { getLocale } from "next-intl/server";

import { Container, Heading, StarChip } from "@/components/ui";
import { privateCopy } from "@/lib/i18n/copy";

/* § 4 — "One team instead of several separate contractors" — the client's
   problem stated first, then the Grønt Land DK solution as a bullet grid. */
export async function PrivateOneTeam() {
  const { PRIVATE_ONE_TEAM } = privateCopy(await getLocale());

  return (
    <section className="bg-mist py-16 xl:py-24">
      <Container>
        <div className="flex flex-col gap-8 xl:flex-row xl:gap-16">
          <div className="xl:max-w-[420px]">
            <Heading as="h2" size="section">
              {PRIVATE_ONE_TEAM.h2}
            </Heading>
            <p className="mt-6 font-light leading-relaxed text-pine/70 xl:text-[17px]">
              {PRIVATE_ONE_TEAM.problem}
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.3px] text-moss">
              {PRIVATE_ONE_TEAM.intro}
            </p>
          </div>

          <ul className="grid flex-1 gap-3 sm:grid-cols-2">
            {PRIVATE_ONE_TEAM.items.map((item) => (
              <li key={item.title}>
                <StarChip
                  text={`${item.title} — ${item.desc}`}
                  boxVariant="light"
                  starVariant="leaf"
                  textSize="sm"
                  className="h-full border border-line"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
