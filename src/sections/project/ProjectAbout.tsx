import { Container, Heading } from "@/components/ui";
import type { Project } from "@/constants/projects";

export function ProjectAbout({ project }: { project: Project }) {
  return (
    <section className="bg-white py-16 xl:py-20">
      <Container className="max-w-3xl">
        <Heading as="h2" size="section">
          Om projektet
        </Heading>
        <p className="mt-6 text-base font-light leading-relaxed text-pine/70 xl:text-[18px]">
          {project.task}
        </p>

        {project.work.length > 0 ? (
          <>
            <h3 className="mt-10 text-sm font-bold uppercase tracking-[0.35px] text-leaf">
              Opgaven omfattede
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base font-light leading-relaxed text-pine/70">
              {project.work.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}

        {project.facts && project.facts.length > 0 ? (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.facts.map((fact) => (
              <li
                key={fact.label}
                className="rounded-2xl border border-line bg-mist px-5 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35px] text-leaf">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-medium text-pine">{fact.value}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}
