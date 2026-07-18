import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { QuoteModalProvider } from "@/components/quote";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { PageHero, PageHeroSeamDecor, NumberedSteps } from "@/sections/shared";
import { KontaktForm, KontaktAudiences } from "@/sections/kontakt";
import { kontaktCopy } from "@/lib/i18n/copy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { KONTAKT_META } = kontaktCopy(locale);
  return { title: KONTAKT_META.title, description: KONTAKT_META.description };
}

/* /kontakt — docs/content/kontakt.md: hero → form + direct contact →
   what-happens-next steps → audience shortcuts. */
export default async function KontaktPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { KONTAKT_HERO, KONTAKT_STEPS } = kontaktCopy(locale);
  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        {/* No eyebrow label + leaf CTA per client feedback. Ring decor at the
            copy/photo seam per Figma mock #3049:129 (lower half, behind the
            photo panel — same concentric-rings motif as the home hero). */}
        <PageHero
          title={KONTAKT_HERO.h1}
          sub={KONTAKT_HERO.sub}
          ctas={[{ ...KONTAKT_HERO.cta, variant: "leaf" }]}
          image={KONTAKT_HERO.image}
          decor={<PageHeroSeamDecor />}
        />
        <KontaktForm />
        {/* Ring decor over steps — Figma #3053:141 / Group #3053:117
            (screenshot parent; −129.93° rotation baked into the SVG export,
            so no CSS rotate). Above the heading band, behind cards 02–03
            (Container is z-10). */}
        <NumberedSteps
          h2={KONTAKT_STEPS.h2}
          steps={KONTAKT_STEPS.steps}
          background="mist"
          decor={
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/svg/decor-rings-kontakt-steps.svg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute left-[50.9%] top-[40px] z-0 hidden h-[375px] w-[381px] max-w-none opacity-90 xl:block"
            />
          }
        />
        <KontaktAudiences />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
