import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { QuoteModalProvider } from "@/components/quote";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { Process } from "@/sections/home";
import { PageHero, FeatureGrid, FaqList, CtaBand } from "@/sections/shared";
import { PrivateTypes, PrivateProjects } from "@/sections/private";
import { privateCopy } from "@/lib/i18n/copy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { PRIVATE_META } = privateCopy(locale);
  return { title: PRIVATE_META.title, description: PRIVATE_META.description };
}

/* /private — docs/content/private.md: hero → benefits → popular project types
   (service + project links) → featured projects → Process (shared with home) →
   FAQ → final CTA. */
export default async function PrivatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { PRIVATE_HERO, PRIVATE_BENEFITS, PRIVATE_FAQ, PRIVATE_CTA } = privateCopy(locale);
  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        <PageHero
          label={PRIVATE_HERO.label}
          title={PRIVATE_HERO.h1}
          sub={PRIVATE_HERO.sub}
          ctas={PRIVATE_HERO.ctas}
          image={PRIVATE_HERO.image}
        />
        <FeatureGrid
          h2={PRIVATE_BENEFITS.h2}
          items={PRIVATE_BENEFITS.items}
          background="white"
          columns={3}
        />
        <PrivateTypes />
        <PrivateProjects />
        <Process />
        <FaqList h2={PRIVATE_FAQ.h2} items={PRIVATE_FAQ.items} />
        <CtaBand
          h2={PRIVATE_CTA.h2}
          text={PRIVATE_CTA.text}
          primary={PRIVATE_CTA.primary}
          crosslinks={PRIVATE_CTA.crosslinks}
        />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
