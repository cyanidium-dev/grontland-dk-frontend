import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { QuoteModalProvider } from "@/components/quote";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { OmTeam } from "@/sections/om";
import { Process } from "@/sections/home";
import { PageHero, PageHeroSeamDecor, FaqList, CtaBand } from "@/sections/shared";
import {
  PrivateServices,
  PrivateProjects,
  PrivateOneTeam,
  PrivateReviews,
} from "@/sections/private";
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

/* /private — restructured per docs/private-page-restructure-mapping.md:
   hero → services → completed projects → why one team → team → process →
   reviews (placeholder) → FAQ → final CTA. */
export default async function PrivatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { PRIVATE_HERO, PRIVATE_PROCESS, PRIVATE_FAQ, PRIVATE_CTA } = privateCopy(locale);
  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        {/* 1 — Hero (trust chips under the CTAs) */}
        <PageHero
          title={PRIVATE_HERO.h1}
          sub={PRIVATE_HERO.sub}
          ctas={PRIVATE_HERO.ctas}
          trustChips={PRIVATE_HERO.trustChips}
          image={PRIVATE_HERO.image}
          decor={<PageHeroSeamDecor />}
        />
        {/* 2 — Services (8 CMS service cards) */}
        <PrivateServices />
        {/* 3 — Completed projects */}
        <PrivateProjects />
        {/* 4 — Why one contractor */}
        <PrivateOneTeam />
        {/* 5 — Team (shared with /om-os) */}
        <OmTeam />
        {/* 6 — Process (private variant) */}
        <Process data={PRIVATE_PROCESS} />
        {/* 7 — Reviews (placeholder) */}
        <PrivateReviews />
        {/* 8 — FAQ */}
        <FaqList h2={PRIVATE_FAQ.h2} items={PRIVATE_FAQ.items} />
        {/* 9 — Final CTA (phone from CMS siteSettings) */}
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
