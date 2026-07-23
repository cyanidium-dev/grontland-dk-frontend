import { QuoteModalProvider } from "@/components/quote";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPage } from "@/lib/seo/jsonld";
import { homeCopy } from "@/lib/i18n/copy";
import { setRequestLocale } from "next-intl/server";
import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";
import {
  Hero,
  Audiences,
  OneTeam,
  Services,
  Projects,
  Process,
  Gallery,
  About,
  SeoText,
  Faq,
  QuoteCta,
} from "@/sections/home";

import { getGalleryCategories } from "@/lib/sanity/queries";

import type { Metadata } from "next";

import { pageMetadata, SITE_META } from "@/lib/seo/meta";

/* Canonical + region-qualified hreflang + full per-page OG for the home page
   (client SEO spec) — all via the shared pageMetadata helper. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = SITE_META[locale === "en" ? "en" : "da"];
  return pageMetadata({ locale, path: "", title: m.title, description: m.description });
}

/* Home — section order per Preview/docs/Структура главной страницы.md:
   Hero → Services → Audiences → OneTeam → Process → Projects → Gallery →
   About → SeoText → Faq → QuoteCta. Copy is local (constants/home.ts);
   the service cards, project cards and gallery photos come from the CMS. */
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const categories = await getGalleryCategories();
  return (
    <QuoteModalProvider>
      {/* FAQ schema mirrors the visible FAQ section (same constants). */}
      <JsonLd data={faqPage(homeCopy(locale).FAQ.items)} />
      <div className="relative">
        <Header variant="overlay" />
        <main className="flex-1">
          <Hero />
          <Services />
          <Audiences />
          <OneTeam />
          <Process />
          <Projects />
          <Gallery categories={categories} />
          <About />
          <SeoText />
          <Faq />
          <QuoteCta />
        </main>
      </div>
      <Footer />
    </QuoteModalProvider>
  );
}
