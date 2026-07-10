import Image from "next/image";

import { Heading, Star } from "@/components/ui";
import { OpenQuoteButton } from "@/components/quote";
import { QUOTE_FORM } from "@/constants/home";

/* Quote CTA band — Figma #3023:1045. Full-width black band: copy at 320/96,
   viewport-right photo (#3023:1069), section ring decor (#3023:1046). */
export function QuoteCta() {
  return (
    <section className="relative overflow-hidden bg-black text-white xl:min-h-[737px]">
      {/* Ring decor #3023:1046 — fixed box from 1280×737 artboard % inset */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[403px] top-[238px] z-0 hidden h-[465px] w-[330px] xl:block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/decor-rings-quote.svg"
          alt=""
          className="size-full max-w-none origin-center rotate-[117.04deg] opacity-90"
        />
      </div>

      {/* Photo #3023:1069 — viewport-right bleed (Figma x=846 on 1280 → 434px / 33.906%) */}
      <div className="absolute right-0 top-0 z-10 hidden min-h-[737px] w-[33.906%] overflow-hidden xl:block">
        <Image
          src={QUOTE_FORM.image}
          alt={QUOTE_FORM.imageAlt}
          fill
          sizes="34vw"
          className="object-cover"
        />
      </div>

      {/* Copy #3023:1070 — Figma left 320px, top 96px, width 448px */}
      <div className="relative z-20 px-6 py-14 xl:absolute xl:left-[320px] xl:top-[96px] xl:w-[448px] xl:p-0">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-5">
              <Heading
                as="h2"
                size="card"
                className="text-[28px] leading-none text-white xl:text-[44px] xl:leading-[44px]"
              >
                {QUOTE_FORM.h2Lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </Heading>
              <p className="max-w-[358px] font-light leading-[22.95px] text-white/75 xl:text-[17px]">
                {QUOTE_FORM.sub}
              </p>
            </div>
            <OpenQuoteButton variant="white" size="md" className="w-full sm:w-[250px]">
              {QUOTE_FORM.cta.label}
            </OpenQuoteButton>
          </div>

          <ul className="flex flex-col gap-3">
            {QUOTE_FORM.reassurance.map((item) => (
              <li key={item.label}>
                <div className="relative flex items-center gap-5 overflow-hidden rounded-xl px-[18px] py-6 backdrop-blur-[13px]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-xl bg-white/25 shadow-[inset_0px_4px_12.6px_0px_rgba(255,255,255,0.25)]"
                  />
                  <Star variant="leaf" className="relative z-10 size-10" />
                  <p className="relative z-10 text-xs font-semibold uppercase leading-[15px] text-white">
                    {item.label}: {item.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mx-6 mb-6 h-[280px] overflow-hidden rounded-xl xl:hidden">
        <Image
          src={QUOTE_FORM.image}
          alt={QUOTE_FORM.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
