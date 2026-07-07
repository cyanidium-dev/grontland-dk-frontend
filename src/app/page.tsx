import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";
import {
  Hero,
  Audiences,
  OneTeam,
  Services,
  Projects,
  Process,
} from "@/sections/home";

/* Home — section order follows the new Figma "Главная2" design (by y-position):
   Hero → Services → Audiences → OneTeam → Projects → Process.
   (Gallery / About / SeoText / Faq / QuoteForm to be added next.) */
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
          <Projects />
          <Process />
        </main>
      </div>
      <Footer />
    </>
  );
}
