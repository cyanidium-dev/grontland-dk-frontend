import { GalleryCarousel, type GalleryItem } from "@/components/gallery";
import { Button, Container, Heading } from "@/components/ui";
import type { GalleriPageData } from "@/lib/sanity/queries";
import { cn } from "@/util/cn";

/* Nbyg-style gallery body: one section per service (title left, description
   right, coverflow carousel with lightbox, service page button below). Ring
   decor alternates sides per section. Category jump-nav lives in the hero
   (PageHero children). Data from galleryCategory docs via /galleri. */
export function GalleriSections({ sections }: { sections: GalleriPageData["sections"] }) {
  return (
    <div className="bg-white">
      {sections.map((section, i) => {
        if (section.photos.length === 0) return null;
        const items: GalleryItem[] = section.photos.map((p) => ({
          _key: p.src,
          image: { link: p.src, alt: p.alt },
        }));
        const even = i % 2 === 0;

        return (
          <section
            key={section.id}
            id={section.id}
            className="relative scroll-mt-24 overflow-hidden py-12 xl:py-16"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/svg/decor-rings-gallery.svg"
              alt=""
              aria-hidden
              className={cn(
                "pointer-events-none absolute top-[40px] hidden w-[320px] max-w-none opacity-80 xl:block",
                even ? "left-[calc(50%-620px)]" : "right-[calc(50%-620px)]",
              )}
            />
            <Container className="relative z-10 mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between xl:mb-10">
              <Heading as="h2" size="section">
                {section.title}
              </Heading>
              {section.description && (
                <p className="max-w-[423px] font-light text-pine/70 md:text-right">
                  {section.description}
                </p>
              )}
            </Container>
            <div className="relative z-10 mx-auto max-w-[416px] sm:max-w-[726px] md:max-w-[867px] lg:max-w-[1141px] xl:max-w-[1494px]">
              <GalleryCarousel items={items} />
            </div>
            {section.cta && (
              <Container className="relative z-10 mt-8">
                <Button
                  href={section.cta.href}
                  variant="leaf"
                  size="md"
                  className="w-full sm:w-auto sm:min-w-[284px]"
                >
                  {section.cta.label}
                </Button>
              </Container>
            )}
          </section>
        );
      })}
    </div>
  );
}
