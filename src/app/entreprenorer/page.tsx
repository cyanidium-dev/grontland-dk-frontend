import type { Metadata } from "next";

import { QuoteModalProvider } from "@/components/quote";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { PageHero, FeatureGrid, NumberedSteps, CtaBand } from "@/sections/shared";
import { B2bWhy, B2bCase, B2bTrades } from "@/sections/b2b";
import {
  B2B_META,
  B2B_HERO,
  B2B_SCENARIOS,
  B2B_EXPECTATIONS,
  B2B_MODEL,
  B2B_CTA,
} from "@/constants/b2b";

export const metadata: Metadata = {
  title: B2B_META.title,
  description: B2B_META.description,
};

/* /entreprenorer — docs/content/entreprenorer.md: dark hero → scenarios →
   expectations → why-integrated band → collaboration model → ARC case →
   trades strip → final CTA. No testimonials by design. */
export default function EntreprenorerPage() {
  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        <PageHero
          label={B2B_HERO.label}
          title={B2B_HERO.h1}
          sub={B2B_HERO.sub}
          ctas={B2B_HERO.ctas}
          image={B2B_HERO.image}
        />
        <FeatureGrid h2={B2B_SCENARIOS.h2} items={B2B_SCENARIOS.items} background="white" columns={3} />
        <FeatureGrid
          h2={B2B_EXPECTATIONS.h2}
          items={B2B_EXPECTATIONS.items}
          background="mist"
          columns={4}
        />
        <B2bWhy />
        <NumberedSteps h2={B2B_MODEL.h2} steps={B2B_MODEL.steps} cta={B2B_MODEL.cta} />
        <B2bCase />
        <B2bTrades />
        <CtaBand
          h2={B2B_CTA.h2}
          text={B2B_CTA.text}
          primary={B2B_CTA.primary}
          crosslinks={B2B_CTA.crosslinks}
        />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
