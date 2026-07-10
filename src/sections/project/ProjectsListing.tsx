"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/project";
import { Container, FilterPill, Heading } from "@/components/ui";
import {
  filterProjects,
  PROJECTS_LIST,
  type ProjectFilterId,
} from "@/constants/projects";

export function ProjectsListing() {
  const [filter, setFilter] = useState<ProjectFilterId>("all");
  const projects = filterProjects(filter);

  return (
    <section className="bg-mist py-16 xl:py-24">
      <Container>
        <Heading as="h1" size="section">
          {PROJECTS_LIST.listingH1}
        </Heading>
        <p className="mt-4 max-w-2xl font-light leading-normal text-pine/70 xl:text-[18px]">
          {PROJECTS_LIST.sub}
        </p>

        <div
          role="group"
          aria-label="Filtrer projekter"
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

        {projects.length > 0 ? (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:mt-14 xl:grid-cols-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-sm font-light text-pine/60">
            {PROJECTS_LIST.emptyFilter}
          </p>
        )}
      </Container>
    </section>
  );
}
