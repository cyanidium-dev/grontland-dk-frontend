import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { QuoteModalProvider } from "@/components/quote";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { PageHero, PageHeroSeamDecor, FeatureGrid, NumberedSteps, CtaBand } from "@/sections/shared";
import { B2bServices, B2bWhy, B2bProjects } from "@/sections/b2b";
import { b2bCopy } from "@/lib/i18n/copy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { B2B_META } = b2bCopy(locale);
  return { title: B2B_META.title, description: B2B_META.description };
}

/* /entreprenorer — per Contractors.md: hero (trust chips + modal CTA) →
   collaboration formats → services (CMS cards) → capabilities band → projects
   → process → final CTA (modal). No testimonials by design. */
export default async function EntreprenorerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { B2B_HERO, B2B_SCENARIOS, B2B_MODEL, B2B_CTA } = b2bCopy(locale);
  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        {/* 1 — Hero (trust chips under the CTAs; first CTA opens the quote modal) */}
        <PageHero
          title={B2B_HERO.h1}
          sub={B2B_HERO.sub}
          ctas={B2B_HERO.ctas}
          trustChips={B2B_HERO.trustChips}
          image={B2B_HERO.image}
          decor={<PageHeroSeamDecor />}
        />
        {/* 2 — Collaboration formats */}
        <FeatureGrid
          h2={B2B_SCENARIOS.h2}
          intro={B2B_SCENARIOS.intro}
          items={B2B_SCENARIOS.items}
          background="white"
          columns={3}
        />
        {/* 3 — Services (8 CMS service cards) */}
        <B2bServices />
        {/* 4 — Capabilities & responsibility (pine band) */}
        <B2bWhy />
        {/* 5 — Subcontracting projects */}
        <B2bProjects />
        {/* 6 — Process */}
        <NumberedSteps h2={B2B_MODEL.h2} steps={B2B_MODEL.steps} background="mist" />
        {/* 7 — Final CTA (opens the quote modal) */}
        <CtaBand
          h2={B2B_CTA.h2}
          text={B2B_CTA.text}
          primary={B2B_CTA.primary}
          primaryModal
          crosslinks={B2B_CTA.crosslinks}
        />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
