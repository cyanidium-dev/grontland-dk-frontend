import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo/meta";
import { setRequestLocale } from "next-intl/server";

import { QuoteModalProvider } from "@/components/quote";
import { JsonLd } from "@/components/seo/JsonLd";
import { navBreadcrumbs } from "@/lib/seo/jsonld";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { getProjekterPage, getProjects } from "@/lib/sanity/queries";
import { ProjectCta, ProjectsListing } from "@/sections/project";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = await getProjekterPage();
  return pageMetadata({ locale, path: "/projekter", title: page.metaTitle, description: page.metaDescription });
}

export default async function ProjekterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [page, projects] = await Promise.all([getProjekterPage(), getProjects()]);

  return (
    <QuoteModalProvider>
      <JsonLd data={navBreadcrumbs(locale, "/projekter")} />
      <Header />
      <main className="flex-1">
        <ProjectsListing
          h1={page.h1}
          sub={page.sub}
          emptyFilter={page.emptyFilter}
          projects={projects}
        />
        {page.cta && <ProjectCta cta={page.cta} />}
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
