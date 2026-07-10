import type { Metadata } from "next";

import { QuoteModalProvider } from "@/components/quote";
import { ProjectCard } from "@/components/project";
import { Container, Heading } from "@/components/ui";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { PROJECTS, PROJECTS_LIST } from "@/constants/projects";

export const metadata: Metadata = {
  title: "Projekter | Grønt Land DK",
  description: PROJECTS_LIST.sub,
};

export default function ProjekterPage() {
  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        <section className="bg-mist py-16 xl:py-24">
          <Container>
            <Heading as="h1" size="section">
              {PROJECTS_LIST.listingH1}
            </Heading>
            <p className="mt-4 max-w-2xl font-light leading-[1.5] text-pine/70 xl:text-[18px]">
              {PROJECTS_LIST.sub}
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:mt-14 xl:grid-cols-3">
              {PROJECTS.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
