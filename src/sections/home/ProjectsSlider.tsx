"use client";

import { useRef } from "react";

import { Container } from "@/components/ui";
import { ChevronIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project";
import type { Project } from "@/constants/projects";

const GAP = 20;

/* Horizontally-scrollable project cards + prev/next arrows — same custom
   slider pattern as ServicesSlider (scroll-snap track, no dependency).
   3 cards fit on desktop; fixed-width cards scroll on narrower viewports. */
export function ProjectsSlider({ projects }: { projects: readonly Project[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const card = trackRef.current?.querySelector("li");
    if (!card) return;
    trackRef.current?.scrollBy({
      left: dir * (card.offsetWidth + GAP),
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container>
        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <li
              key={project.slug}
              className="w-[300px] shrink-0 snap-start sm:w-[340px] xl:w-[calc((100%-40px)/3)]"
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>

      <Container>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Forrige"
            onClick={() => scroll(-1)}
            className="flex size-[54px] cursor-pointer items-center justify-center rounded-full border border-line bg-white text-pine transition-colors hover:border-pine"
          >
            <ChevronIcon className="rotate-90" />
          </button>
          <button
            type="button"
            aria-label="Næste"
            onClick={() => scroll(1)}
            className="flex size-[54px] cursor-pointer items-center justify-center rounded-full bg-leaf text-white transition-colors hover:brightness-110"
          >
            <ChevronIcon className="-rotate-90" />
          </button>
        </div>
      </Container>
    </>
  );
}
