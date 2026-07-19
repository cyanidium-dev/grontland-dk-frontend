import { getLocale } from "next-intl/server";
import Image from "next/image";

import { ArrowIcon } from "@/components/icons";
import { Link } from "@/i18n/navigation";
import { Container, Heading } from "@/components/ui";
import { getServiceCards } from "@/lib/sanity/queries";
import { b2bCopy } from "@/lib/i18n/copy";

/* § 3 — "Construction trades and subcontracting services" — the 8 service cards
   from the CMS (same source as the home slider), for the contractor page. */
export async function B2bServices() {
  const [cards, locale] = await Promise.all([getServiceCards(), getLocale()]);
  const { B2B_SERVICES } = b2bCopy(locale);

  return (
    <section className="bg-mist py-16 xl:py-24">
      <Container>
        <div className="max-w-2xl">
          <Heading as="h2" size="section">
            {B2B_SERVICES.h2}
          </Heading>
          <p className="mt-4 font-light leading-normal text-pine/70 xl:text-[17px]">
            {B2B_SERVICES.sub}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="flex items-center justify-between gap-2 text-[14px] font-bold uppercase tracking-[0.3px] text-pine">
                    {card.name}
                    <ArrowIcon className="shrink-0 text-leaf transition-transform duration-200 group-hover:translate-x-1" />
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-pine/60">{card.desc}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
