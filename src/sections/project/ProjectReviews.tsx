import { getLocale } from "next-intl/server";

import { StarIcon } from "@/components/icons";
import { Container, Heading } from "@/components/ui";
import { ui } from "@/lib/i18n/copy";

/* Customer review — PLACEHOLDER copy until real, verifiable testimonials
   exist (see copy.ts: name is flagged "(placeholder)"). A per-project quote
   can replace this single card later.
   Flanking ring decor — Figma #3063:122 (screenshot parent; Groups #3063:98 /
   #3063:75 with rotates 123.18° / −115.28°). Reuses decor-rings-faq.svg.
   TODO(client): supply real, attributable reviews. */
export async function ProjectReviews() {
  const t = ui(await getLocale());

  return (
    <section className="relative overflow-hidden bg-white py-16 xl:py-20">
      {/* Left ring — Figma #3063:98, rotate 123.18°, behind card */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/decor-rings-faq.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%-420px)] top-[calc(50%-100px)] z-0 hidden h-[294px] w-[242px] max-w-none -translate-x-1/2 -translate-y-1/2 origin-center rotate-[123.18deg] opacity-90 xl:block"
      />
      {/* Right ring — Figma #3063:75, rotate −115.28°, behind card */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/decor-rings-faq.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[calc(50%-420px)] top-[calc(50%+100px)] z-0 hidden h-[294px] w-[242px] max-w-none translate-x-1/2 -translate-y-1/2 origin-center rotate-[-115.28deg] opacity-90 xl:block"
      />

      <Container className="relative z-10">
        <Heading as="h2" size="section" className="text-center">
          {t.projectReviewsH2}
        </Heading>

        <figure className="relative z-10 mx-auto mt-10 flex max-w-2xl flex-col items-center gap-6 rounded-2xl border border-line bg-mist px-6 py-10 text-center xl:px-12">
          <ul aria-hidden className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <StarIcon className="size-5 text-leaf" />
              </li>
            ))}
          </ul>
          <blockquote className="text-lg font-light leading-relaxed text-pine xl:text-[22px]">
            “{t.projectReviewQuote}”
          </blockquote>
          <figcaption>
            <p className="text-sm font-bold text-pine">{t.projectReviewName}</p>
            <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.3px] text-moss">
              {t.projectReviewMeta}
            </p>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
