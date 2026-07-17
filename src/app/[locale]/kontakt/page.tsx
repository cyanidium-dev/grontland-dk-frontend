import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { QuoteModalProvider } from "@/components/quote";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { PageHero, NumberedSteps } from "@/sections/shared";
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
        {/* No eyebrow label + leaf CTA per client feedback. */}
        <PageHero
          title={KONTAKT_HERO.h1}
          sub={KONTAKT_HERO.sub}
          ctas={[{ ...KONTAKT_HERO.cta, variant: "leaf" }]}
          image={KONTAKT_HERO.image}
        />
        <KontaktForm />
        <NumberedSteps h2={KONTAKT_STEPS.h2} steps={KONTAKT_STEPS.steps} background="mist" />
        <KontaktAudiences />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
