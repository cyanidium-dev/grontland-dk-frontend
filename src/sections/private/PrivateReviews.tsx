import { getLocale } from "next-intl/server";

import { StarIcon } from "@/components/icons";
import { Container, Heading } from "@/components/ui";
import { RingDecor } from "@/sections/shared";
import { privateCopy } from "@/lib/i18n/copy";

/* § 7 — Customer reviews. Currently PLACEHOLDER copy (see constants):
   real, verifiable reviews (name + platform link) replace these later. */
export async function PrivateReviews() {
  const { PRIVATE_REVIEWS } = privateCopy(await getLocale());

  return (
    <section className="relative overflow-x-clip bg-white py-16 xl:py-24">
      {/* Two rings (Figma 3067:321 / 3067:344). The left one is meant to hang
          past the band, so the section clips only the x axis. */}
      <RingDecor rotate={-130.97} className="bottom-[203px] left-[calc(50%+348px)]" />
      <RingDecor rotate={-128.24} className="bottom-[-52px] left-[calc(50%-676px)]" />
      <Container className="relative z-10">
        <div className="flex flex-col gap-10">
          <Heading as="h2" size="section">
            {PRIVATE_REVIEWS.h2}
          </Heading>

          <ul className="grid gap-5 md:grid-cols-3">
            {PRIVATE_REVIEWS.items.map((review) => (
              <li
                key={review.quote}
                className="flex flex-col gap-5 rounded-2xl border border-line bg-mist p-6"
              >
                <StarIcon className="size-6 text-leaf" />
                <p className="flex-1 text-[15px] font-light leading-relaxed text-pine">
                  “{review.quote}”
                </p>
                <div>
                  <p className="text-sm font-bold text-pine">{review.name}</p>
                  <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.3px] text-moss">
                    {review.city} · {review.service}
                  </p>
                  {review.href && (
                    <a
                      href={review.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-[12px] font-bold uppercase tracking-[0.3px] text-moss underline underline-offset-4 hover:text-leaf"
                    >
                      Google
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
