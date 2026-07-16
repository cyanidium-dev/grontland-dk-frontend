import { Container, Button, Heading, Marquee } from "@/components/ui";
import { StarIcon } from "@/components/icons";
import { MARQUEE_WORDS } from "@/constants/home";
import { PROJECTS_LIST } from "@/constants/projects";
import { getProjects } from "@/lib/sanity/queries";
import { ProjectsSlider } from "./ProjectsSlider";

/* "Udvalgte projekter" — Figma #1018:721 + marquee band #1019:780.
   Leaf marquee above mist band; left H2 + sub, top-right pine CTA; card
   slider (3 visible on desktop) with leaf-bordered photos + service badge.
   Copy is local; the project cards come from the CMS. */
export async function Projects() {
  const projects = await getProjects();
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

        </Container>

        <div className="mt-10 xl:mt-14">
          <ProjectsSlider projects={projects} />
        </div>
      </section>
    </>
  );
}
