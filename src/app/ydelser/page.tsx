import type { Metadata } from "next";

import { QuoteModalProvider } from "@/components/quote";
import { JsonLd } from "@/components/seo/JsonLd";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { getYdelserIndex } from "@/lib/sanity/queries";
import { breadcrumbs } from "@/lib/seo/jsonld";
import { YdelserIndexGrid } from "@/sections/services/YdelserIndexGrid";
import { CtaBand, PageHero } from "@/sections/shared";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getYdelserIndex();
  return { title: page.metaTitle, description: page.metaDescription };
}

/* /ydelser — hub page: hero → card grid (one card per service doc) → CTA. */
export default async function YdelserIndexPage() {
  const page = await getYdelserIndex();

  return (
    <QuoteModalProvider>
      <JsonLd
        data={breadcrumbs([
          { name: "Forside", path: "/" },
          { name: "Ydelser", path: "/ydelser" },
        ])}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          label={page.hero.label ?? undefined}
          title={page.hero.h1}
          sub={page.hero.sub}
          image={page.hero.image ?? undefined}
        />
        <YdelserIndexGrid cards={page.cards} />
        {page.cta && (
          <CtaBand
            h2={page.cta.h2}
            text={page.cta.text}
            primary={page.cta.primary}
            crosslinks={page.cta.crosslinks ?? []}
            image={page.cta.image ?? undefined}
          />
        )}
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
