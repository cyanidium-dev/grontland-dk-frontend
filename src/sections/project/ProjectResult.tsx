import { Container, Heading } from "@/components/ui";
import type { Project } from "@/constants/projects";

export function ProjectResult({ project }: { project: Project }) {
  return (
    <section className="bg-white py-16 xl:py-20">
      <Container className="max-w-3xl">
        <Heading as="h2" size="section">
          Resultat
        </Heading>
        <p className="mt-6 text-base font-light leading-relaxed text-pine/70 xl:text-[18px]">
          {project.result}
        </p>

        {project.focus.length > 0 ? (
          <>
            <h3 className="mt-10 text-sm font-bold uppercase tracking-[0.35px] text-leaf">
              Fokus i udførelsen
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base font-light leading-relaxed text-pine/70">
              {project.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}
      </Container>
    </section>
  );
}
