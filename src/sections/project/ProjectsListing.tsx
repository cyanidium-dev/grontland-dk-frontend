"use client";

import { useLocale } from "next-intl";
import { useState } from "react";

import { ProjectCard } from "@/components/project";
import { Container, FilterPill, Heading } from "@/components/ui";
import { type Project, type ProjectFilterId } from "@/constants/projects";
import { projectsCopy } from "@/lib/i18n/copy";

/* Listing body — copy + projects come from the CMS (projekterPage +
   project docs); the audience filter pills stay code (category enum). */
export function ProjectsListing({
  h1,
  sub,
  emptyFilter,
  projects,
}: {
  h1: string;
  sub: string | null;
  emptyFilter: string | null;
  projects: Project[];
}) {
  const locale = useLocale();
  // Localized copy (was imported straight from the da constants, which leaked
  // Danish filter labels onto the EN listing).
  const { PROJECTS_LIST } = projectsCopy(locale);
  const [filter, setFilter] = useState<ProjectFilterId>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="bg-mist py-16 xl:py-24">
      <Container>
        <Heading as="h1" size="section">
          {h1}
        </Heading>
        {sub && (
          <p className="mt-4 max-w-2xl font-light leading-normal text-pine/70 xl:text-[18px]">
            {sub}
          </p>
        )}

        <div
          role="group"
          aria-label={locale === "en" ? "Filter projects" : "Filtrer projekter"}
          className="mt-8 flex flex-wrap gap-2"
        >
          {PROJECTS_LIST.filters.map((item) => (
            <FilterPill
              key={item.id}
              label={item.label}
              active={filter === item.id}
              onClick={() => setFilter(item.id)}
              className="min-h-11"
            />
          ))}
        </div>

        {visible.length > 0 ? (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:mt-14 xl:grid-cols-3">
            {visible.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-sm font-light text-pine/60">
            {emptyFilter ?? PROJECTS_LIST.emptyFilter}
          </p>
        )}
      </Container>
    </section>
  );
}
