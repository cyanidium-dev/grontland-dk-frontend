import { Container, Heading } from "@/components/ui";
import type { Project, ProjectGalleryItem } from "@/constants/projects";

function BeforeAfter({ items }: { items: readonly ProjectGalleryItem[] }) {
  const before = items.find((i) => i.kind === "before");
  const after = items.find((i) => i.kind === "after");
  if (!before || !after) return null;

  return (
    <div className="mb-10 grid gap-4 sm:grid-cols-2">
      {[before, after].map((item) => (
        <figure key={item.kind} className="overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt}
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="mt-2 text-xs font-semibold uppercase tracking-[0.35px] text-pine/50">
            {item.kind === "before" ? "Før" : "Efter"}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ProjectGallery({ project }: { project: Project }) {
  if (project.gallery.length === 0) return null;

  const gridItems = project.gallery.filter(
    (i) => i.kind === "process" || i.kind === "result",
  );

  return (
    <section className="bg-mist py-16 xl:py-20">
      <Container>
        <Heading as="h2" size="section">
          Galleri
        </Heading>
        <BeforeAfter items={project.gallery} />
        {gridItems.length > 0 ? (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {gridItems.map((item) => (
              <li key={`${item.kind}-${item.src}`} className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}
