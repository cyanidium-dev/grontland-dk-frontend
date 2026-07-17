import { getLocale } from "next-intl/server";

import { Container, Heading } from "@/components/ui";
import { ProjectCard } from "@/components/project";
import type { Project } from "@/constants/projects";
import { ui } from "@/lib/i18n/copy";

export async function ProjectRelated({ related }: { related: Project[] }) {
  if (related.length === 0) return null;

  return (
    <section className="bg-mist py-16 xl:py-20">
      <Container>
        <Heading as="h2" size="section">
          {ui(await getLocale()).projectRelatedH2}
        </Heading>
        <ul className="mt-10 grid gap-6 xl:grid-cols-3">
          {related.map((item) => (
            <li key={item.slug}>
              <ProjectCard project={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
