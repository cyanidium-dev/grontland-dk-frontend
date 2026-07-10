import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { QuoteModalProvider } from "@/components/quote";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import {
  ProjectAbout,
  ProjectCta,
  ProjectGallery,
  ProjectHero,
  ProjectRelated,
  ProjectResult,
} from "@/sections/project";
import { getProject, PROJECTS } from "@/constants/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Projekt | Grønt Land DK" };
  return {
    title: `${project.title} | Grønt Land DK`,
    description: project.intro,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        <ProjectHero project={project} />
        <ProjectAbout project={project} />
        <ProjectGallery project={project} />
        <ProjectResult project={project} />
        <ProjectRelated project={project} />
        <ProjectCta />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
