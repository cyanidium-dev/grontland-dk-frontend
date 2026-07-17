import { Container, Heading, Dots, InfoBox } from "@/components/ui";
import { getLocale } from "next-intl/server";

import { omCopy } from "@/lib/i18n/copy";

/* "Det arbejder vi efter" — Figma feedback image 12: mist band, Dots inline
   after the H2, ring decor behind the third card (bbox ≈ right 8% / top 40px /
   264px wide at 1440, fading toward the top-right; FAQ decor treatment). */
export async function OmValues() {
  const { OM_VALUES } = omCopy(await getLocale());
  return (
    <section className="relative overflow-hidden bg-mist py-16 xl:py-24">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/decor-rings-faq.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[40px] z-0 hidden w-[264px] max-w-none rotate-[117.04deg] opacity-90 xl:block"
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-6">
            <Heading as="h2" size="section">
              {OM_VALUES.h2}
            </Heading>
            <Dots size="md" className="hidden shrink-0 xl:flex" />
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {OM_VALUES.items.map((item) => (
              <li key={item.title} className="h-full">
                <InfoBox
                  variant="light"
                  className="flex h-full flex-col rounded-[12px] border border-line px-5 py-6"
                >
                  <h3 className="text-[13px] font-bold uppercase leading-tight text-pine">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-pine/60">{item.desc}</p>
                </InfoBox>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
