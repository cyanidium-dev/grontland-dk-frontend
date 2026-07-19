import { getLocale } from "next-intl/server";

import { ProjectCard } from "@/components/project";
import { Container, Heading, Button } from "@/components/ui";
import { getProjects } from "@/lib/sanity/queries";
import { privateCopy } from "@/lib/i18n/copy";

/* Featured private cases — shared ProjectCard on curated slugs (copy local,
   project data from the CMS, kept in the curated order). */
export async function PrivateProjects() {
  const [all, locale] = await Promise.all([getProjects(), getLocale()]);
  const PRIVATE_PROJECTS = privateCopy(locale).PRIVATE_PROJECTS;
  const projects = PRIVATE_PROJECTS.slugs
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <section className="bg-mist py-16 xl:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          <Heading as="h2" size="section">
            {PRIVATE_PROJECTS.h2}
          </Heading>

          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            {PRIVATE_PROJECTS.ctas.map((cta, i) => (
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
