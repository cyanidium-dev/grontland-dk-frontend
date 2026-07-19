import { getLocale } from "next-intl/server";

import { ProjectCard } from "@/components/project";
import { Container, Heading, Button } from "@/components/ui";
import { getProjects } from "@/lib/sanity/queries";
import { b2bCopy } from "@/lib/i18n/copy";

/* § 5 — Subcontracting projects. ARC Amager is the one genuine b2b case in the
   CMS; two trade-relevant private cases fill the row as reference work (curated
   order). id="projekter" is the hero "View subcontracting projects" anchor. */
export async function B2bProjects() {
  const [all, locale] = await Promise.all([getProjects(), getLocale()]);
  const { B2B_PROJECTS } = b2bCopy(locale);
  const projects = B2B_PROJECTS.slugs
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <section id="projekter" className="scroll-mt-24 bg-white py-16 xl:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="max-w-2xl">
            <Heading as="h2" size="section">
              {B2B_PROJECTS.h2}
            </Heading>
            <p className="mt-4 font-light leading-normal text-pine/70 xl:text-[17px]">
              {B2B_PROJECTS.sub}
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            {B2B_PROJECTS.ctas.map((cta, i) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant={i === 0 ? "leaf" : "outline"}
                size="md"
                className="w-full sm:w-auto"
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
