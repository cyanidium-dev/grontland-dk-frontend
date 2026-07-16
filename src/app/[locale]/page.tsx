import { QuoteModalProvider } from "@/components/quote";
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

/* Home — section order per Preview/docs/Структура главной страницы.md:
   Hero → Services → Audiences → OneTeam → Process → Projects → Gallery →
   About → SeoText → Faq → QuoteCta. Copy is local (constants/home.ts);
   the service cards, project cards and gallery photos come from the CMS. */
export default async function HomePage() {
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
