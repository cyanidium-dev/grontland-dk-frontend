import { getLocale } from "next-intl/server";

import { GalleryCarousel, type GalleryItem } from "@/components/gallery";
import { Container, Heading } from "@/components/ui";
import type { Project } from "@/constants/projects";
import { ui } from "@/lib/i18n/copy";

/** Project photo gallery — same coverflow carousel + lightbox as the home gallery. */
export async function ProjectGallery({ project }: { project: Project }) {
  if (project.gallery.length === 0) return null;

  const items: GalleryItem[] = project.gallery.map((item, i) => ({
    _key: `${item.kind}-${i}`,
    image: { link: item.src, alt: item.alt },
  }));

  return (
    <section className="overflow-hidden bg-mist py-16 xl:py-20">
      <Container>
        <Heading as="h2" size="section">
          {ui(await getLocale()).projectGalleryH2}
        </Heading>
      </Container>
      <div className="mx-auto mt-10 max-w-[416px] sm:max-w-[726px] md:max-w-[867px] lg:max-w-[1141px] xl:mt-12 xl:max-w-[1494px]">
        <GalleryCarousel items={items} />
      </div>
    </section>
  );
}
