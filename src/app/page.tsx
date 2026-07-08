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
  QuoteForm,
} from "@/sections/home";

/* Home — section order per Preview/docs/Структура главной страницы.md:
   Hero → Services → Audiences → OneTeam → Process → Projects → Gallery →
   About → SeoText → Faq → QuoteForm. */
export default function HomePage() {
  return (
    <>
      <div className="relative">
        <Header variant="overlay" />
        <main className="flex-1">
          <Hero />
          <Services />
          <Audiences />
          <OneTeam />
          <Process />
          <Projects />
          <Gallery />
          <About />
          <SeoText />
          <Faq />
          <QuoteForm />
        </main>
      </div>
      <Footer />
    </>
  );
}
