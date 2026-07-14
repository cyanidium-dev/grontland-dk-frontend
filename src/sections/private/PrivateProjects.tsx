import { ProjectCard } from "@/components/project";
import { Container, Heading, Button } from "@/components/ui";
import { getProject } from "@/constants/projects";
import { PRIVATE_PROJECTS } from "@/constants/privatePage";

/* Featured private cases — reuses the shared ProjectCard on curated slugs. */
export function PrivateProjects() {
  const projects = PRIVATE_PROJECTS.slugs
    .map((slug) => getProject(slug))
    .filter((project) => project !== undefined);

  return (
    <section className="bg-mist py-16 xl:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          <Heading as="h2" size="section">
            {PRIVATE_PROJECTS.h2}
          </Heading>

          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
