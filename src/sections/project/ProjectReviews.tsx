import { getLocale } from "next-intl/server";

import { StarIcon } from "@/components/icons";
import { Container, Heading } from "@/components/ui";
import { ui } from "@/lib/i18n/copy";

/* Customer review — PLACEHOLDER copy until real, verifiable testimonials
   exist (see copy.ts: name is flagged "(placeholder)"). A per-project quote
   can replace this single card later.
   TODO(client): supply real, attributable reviews. */
export async function ProjectReviews() {
  const t = ui(await getLocale());

  return (
    <section className="bg-white py-16 xl:py-20">
      <Container>
        <Heading as="h2" size="section" className="text-center">
          {t.projectReviewsH2}
        </Heading>

        <figure className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-6 rounded-2xl border border-line bg-mist px-6 py-10 text-center xl:px-12">
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
