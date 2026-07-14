import type { Metadata } from "next";

import { QuoteModalProvider } from "@/components/quote";
import { Container, Heading } from "@/components/ui";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { GalleriSections } from "@/sections/galleri";
import { CtaBand, PageHero } from "@/sections/shared";
import { GALLERI_PAGE } from "@/constants/galleriPage";

export const metadata: Metadata = {
  title: GALLERI_PAGE.metaTitle,
  description: GALLERI_PAGE.metaDescription,
};

/* /galleri — hero → Nbyg-style per-service sections (anchor nav + coverflow
   sliders, catalog in constants/gallery.ts) → short SEO text → final CTA. */
export default function GalleriPage() {
  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        <PageHero
          label={GALLERI_PAGE.hero.label}
          title={GALLERI_PAGE.hero.h1}
          sub={GALLERI_PAGE.hero.sub}
          image={GALLERI_PAGE.hero.image}
        />
        <GalleriSections />
        <section className="bg-mist py-16 xl:py-20">
          <Container className="max-w-4xl">
            <Heading as="h2" size="section">
              {GALLERI_PAGE.seoText.h2}
            </Heading>
            <p className="mt-5 font-light leading-relaxed text-pine/80 xl:text-[17px]">
              {GALLERI_PAGE.seoText.text}
            </p>
          </Container>
        </section>
        <CtaBand
          h2={GALLERI_PAGE.cta.h2}
          text={GALLERI_PAGE.cta.text}
          primary={GALLERI_PAGE.cta.primary}
          crosslinks={GALLERI_PAGE.cta.crosslinks}
          image={GALLERI_PAGE.cta.image}
        />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
