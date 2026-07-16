import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { QuoteModalProvider } from "@/components/quote";
import { Container, Heading } from "@/components/ui";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { getGalleriPage } from "@/lib/sanity/queries";
import { GalleriSections } from "@/sections/galleri";
import { CtaBand, PageHero } from "@/sections/shared";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = await getGalleriPage();
  return { title: page.metaTitle, description: page.metaDescription };
}

/* /galleri — hero → Nbyg-style per-service sections (anchor nav + coverflow
   sliders; data from galleryCategory docs) → short SEO text → final CTA. */
export default async function GalleriPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = await getGalleriPage();

  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        <PageHero
          label={page.hero.label ?? undefined}
          title={page.hero.h1}
          sub={page.hero.sub}
          image={page.hero.image ?? undefined}
        />
        <GalleriSections sections={page.sections} />
        <section className="bg-mist py-16 xl:py-20">
          <Container className="max-w-4xl">
            <Heading as="h2" size="section">
              {page.seoText.h2}
            </Heading>
            <p className="mt-5 font-light leading-relaxed text-pine/80 xl:text-[17px]">
              {page.seoText.text}
            </p>
          </Container>
        </section>
        <CtaBand
          h2={page.cta.h2}
          text={page.cta.text}
          primary={page.cta.primary}
          crosslinks={page.cta.crosslinks ?? []}
          image={page.cta.image ?? undefined}
        />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
