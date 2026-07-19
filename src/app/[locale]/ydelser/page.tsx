import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { QuoteModalProvider } from "@/components/quote";
import { JsonLd } from "@/components/seo/JsonLd";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { getYdelserIndex } from "@/lib/sanity/queries";
import { homeCopy, ui } from "@/lib/i18n/copy";
import { breadcrumbs } from "@/lib/seo/jsonld";
import { YdelserIndexGrid } from "@/sections/services/YdelserIndexGrid";
import { CtaBand, PageHero, PageHeroSeamDecor } from "@/sections/shared";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = await getYdelserIndex();
  return { title: page.metaTitle, description: page.metaDescription };
}

/* /ydelser — hub page: hero → card grid (one card per service doc) → CTA. */
export default async function YdelserIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = await getYdelserIndex();

  return (
    <QuoteModalProvider>
      <JsonLd
        data={breadcrumbs([
          { name: homeCopy(locale).NAV_MENU[0].label, path: "/" },
          { name: ui(locale).servicesLabel, path: "/ydelser" },
        ])}
      />
      <Header />
      <main className="flex-1">
        {/* No eyebrow label — site-wide PageHero pattern (om-os / kontakt). */}
        <PageHero
          title={page.hero.h1}
          sub={page.hero.sub}
          image={page.hero.image ?? undefined}
          decor={<PageHeroSeamDecor />}
        />
        <YdelserIndexGrid cards={page.cards} />
        {page.cta && (
          <CtaBand
            h2={page.cta.h2}
            text={page.cta.text}
            primary={page.cta.primary}
            primaryModal
            crosslinks={page.cta.crosslinks ?? []}
            image={page.cta.image ?? undefined}
          />
        )}
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
