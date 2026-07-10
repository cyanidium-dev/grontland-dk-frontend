import type { Metadata } from "next";

import { QuoteModalProvider } from "@/components/quote";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { ProjectCta, ProjectsListing } from "@/sections/project";
import { PROJECTS_LIST } from "@/constants/projects";

export const metadata: Metadata = {
  title: "Projekter | Grønt Land DK",
  description: PROJECTS_LIST.sub,
};

export default function ProjekterPage() {
  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        <ProjectsListing />
        <ProjectCta />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
