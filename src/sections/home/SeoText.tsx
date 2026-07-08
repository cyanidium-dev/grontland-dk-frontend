import { Container } from "@/components/ui";
import { SEOTEXT } from "@/constants/home";

/* Short natural SEO block before the FAQ (PDF spec: ~120-180 words, no wall). */
export function SeoText() {
  return (
    <section className="bg-mist py-14">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-[12px] font-bold uppercase tracking-[0.2em] text-moss">
            {SEOTEXT.h2}
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-pine/60">{SEOTEXT.text}</p>
        </div>
      </Container>
    </section>
  );
}
