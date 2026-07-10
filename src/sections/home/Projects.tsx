import { Container, Button, Heading, Marquee } from "@/components/ui";
import { StarIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project";
import { MARQUEE_WORDS } from "@/constants/home";
import { PROJECTS, PROJECTS_LIST } from "@/constants/projects";

/* "Udvalgte projekter" — Figma #1018:721 + marquee band #1019:780.
   Leaf marquee above mist band; left H2 + sub, top-right pine CTA; 3 linked
   cards with leaf-bordered photos + overlapping service badge. */
export function Projects() {
  return (
    <>
      <Marquee
        durationSec={40}
        className="bg-leaf py-4"
        separator={<StarIcon className="mx-6 size-3.5 shrink-0 text-white" />}
        items={Array.from({ length: 5 })
          .flatMap(() => MARQUEE_WORDS.map((w) => w))
          .map((w, i) => (
            <span
              key={i}
              className="text-[14px] font-bold uppercase tracking-[2.8px] text-white"
            >
              {w}
            </span>
          ))}
      />

      <section className="bg-mist py-16 xl:py-24">
        <Container>
          <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
            <div className="max-w-2xl">
              <Heading as="h2" size="section">
                {PROJECTS_LIST.h2}
              </Heading>
              <p className="mt-4 font-light leading-[1.5] text-pine/70 xl:text-[18px]">
                {PROJECTS_LIST.sub}
              </p>
            </div>
            <div className="shrink-0 xl:pt-4">
              <Button
                href={PROJECTS_LIST.cta.href}
                variant="pine"
                size="md"
                className="w-full sm:w-auto"
              >
                {PROJECTS_LIST.cta.label}
              </Button>
            </div>
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:mt-14 xl:grid-cols-3">
            {PROJECTS.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
