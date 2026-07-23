import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { QuoteModalProvider } from "@/components/quote";
import { JsonLd } from "@/components/seo/JsonLd";
import { navBreadcrumbs } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/meta";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import {
  getProjekterPage,
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/sanity/queries";
import {
  ProjectAbout,
  ProjectCta,
  ProjectGallery,
  ProjectHero,
  ProjectRelated,
  ProjectResult,
  ProjectReviews,
} from "@/sections/project";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Projekt | Grønt Land DK" };
  return pageMetadata({
    locale,
    path: `/projekter/${slug}`,
    title: `${project.title} | Grønt Land DK`,
    description: project.seoDescription,
    image: { url: project.heroImage, alt: project.heroImageAlt },
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const [project, page] = await Promise.all([getProjectBySlug(slug), getProjekterPage()]);
  if (!project) notFound();

  return (
    <QuoteModalProvider>
      <JsonLd
        data={navBreadcrumbs(locale, "/projekter", {
          name: project.title,
          path: `/projekter/${slug}`,
        })}
      />
      <Header />
      <main className="flex-1">
        <ProjectHero project={project} />
        <ProjectAbout project={project} />
        <ProjectGallery project={project} />
        <ProjectResult project={project} />
        <ProjectReviews />
        <ProjectRelated related={project.related ?? []} />
        {page.cta && <ProjectCta cta={page.cta} />}
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
