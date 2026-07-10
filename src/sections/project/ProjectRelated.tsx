import { Container, Heading } from "@/components/ui";
import { ProjectCard } from "@/components/project";
import { getRelatedProjects, type Project } from "@/constants/projects";

export function ProjectRelated({ project }: { project: Project }) {
  const related = getRelatedProjects(project);
  if (related.length === 0) return null;

  return (
    <section className="bg-mist py-16 xl:py-20">
      <Container>
        <Heading as="h2" size="section">
          Andre projekter
        </Heading>
        <ul className="mt-10 grid gap-6 xl:grid-cols-3">
          {related.map((item) => (
            <li key={item.slug}>
              <ProjectCard project={item} showServiceTags={false} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
