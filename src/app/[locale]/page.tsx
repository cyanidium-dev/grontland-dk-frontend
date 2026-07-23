import { QuoteModalProvider } from "@/components/quote";
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

import { OG_IMAGE, SITE_META } from "@/lib/seo/meta";

/* Canonical + region-qualified hreflang for the home page (client SEO spec):
   da-DK is the primary + x-default, en-DK the English-in-Denmark variant.
   The OG set is re-stated in full — Next's metadata merge is shallow, so a
   page-level `openGraph` (needed for og:url) replaces the layout's. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";
  const m = SITE_META[en ? "en" : "da"];
  const path = en ? "/en" : "/";
  return {
    alternates: {
      canonical: path,
      languages: { "da-DK": "/", "en-DK": "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      siteName: "Grønt Land DK",
      title: m.title,
      description: m.description,
      url: path,
      locale: en ? "en_DK" : "da_DK",
      images: [{ ...OG_IMAGE, alt: m.title }],
    },
  };
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
