import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { QuoteModalProvider } from "@/components/quote";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { Process } from "@/sections/home";
import { PageHero, PageHeroSeamDecor, CtaBand } from "@/sections/shared";
import { OmIntro, OmValues, OmTeam, OmOnePlan, OmGallery } from "@/sections/om";
import { omCopy } from "@/lib/i18n/copy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { OM_META } = omCopy(locale);
  return { title: OM_META.title, description: OM_META.description };
}

/* /om-os — docs/content/om-os.md: hero → who-we-are + facts → values → team →
   one-plan band → Process (shared with home, anchors #proces) → gallery teaser
   → final CTA. About + Team merged per client. */
export default async function OmOsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { OM_HERO, OM_CTA } = omCopy(locale);
  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        <PageHero
          title={OM_HERO.h1}
          sub={OM_HERO.sub}
          ctas={OM_HERO.ctas}
          image={OM_HERO.image}
          decor={<PageHeroSeamDecor />}
        />
        <OmIntro />
        <OmValues />
        <OmTeam />
        <OmOnePlan />
        <Process />
        <OmGallery />
        <CtaBand
          h2={OM_CTA.h2}
          text={OM_CTA.text}
          primary={OM_CTA.primary}
          crosslinks={OM_CTA.crosslinks}
          image={OM_CTA.image}
        />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
