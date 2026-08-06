import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo/meta";
import { QuoteModalProvider } from "@/components/quote";
import { JsonLd } from "@/components/seo/JsonLd";
import { navBreadcrumbs } from "@/lib/seo/jsonld";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { getProjekterPage, getProjects } from "@/lib/sanity/queries";
import { ProjectCta, ProjectsListing } from "@/sections/project";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getProjekterPage();
  return pageMetadata({ locale: "da", path: "/projekter", title: page.metaTitle, description: page.metaDescription });
}

export default async function ProjekterPage() {
  const [page, projects] = await Promise.all([getProjekterPage(), getProjects()]);

  return (
    <QuoteModalProvider>
      <JsonLd data={navBreadcrumbs("da", "/projekter")} />
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
