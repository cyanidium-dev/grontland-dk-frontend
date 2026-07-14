import type { Metadata } from "next";

import { QuoteModalProvider } from "@/components/quote";
import { JsonLd } from "@/components/seo/JsonLd";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { breadcrumbs } from "@/lib/seo/jsonld";
import { YdelserIndexGrid } from "@/sections/services/YdelserIndexGrid";
import { CtaBand, PageHero } from "@/sections/shared";
import { YDELSER_INDEX } from "@/constants/ydelserIndex";

export const metadata: Metadata = {
  title: YDELSER_INDEX.metaTitle,
  description: YDELSER_INDEX.metaDescription,
};

/* /ydelser — hub page: hero → card grid (one card per service page) → CTA.
   Every service page links back here via breadcrumbs and the CTA crosslink. */
export default function YdelserIndexPage() {
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
          label={YDELSER_INDEX.hero.label}
          title={YDELSER_INDEX.hero.h1}
          sub={YDELSER_INDEX.hero.sub}
          image={YDELSER_INDEX.hero.image}
        />
        <YdelserIndexGrid />
        <CtaBand
          h2={YDELSER_INDEX.cta.h2}
          text={YDELSER_INDEX.cta.text}
          primary={YDELSER_INDEX.cta.primary}
          crosslinks={YDELSER_INDEX.cta.crosslinks}
          image={YDELSER_INDEX.cta.image}
        />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
