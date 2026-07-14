import Image from "next/image";

import { Container, Heading, Button } from "@/components/ui";
import { OM_GALLERY } from "@/constants/om";

/* Gallery teaser — 4 thumbs + CTA to /galleri. */
export function OmGallery() {
  return (
    <section className="bg-mist py-16 xl:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-2xl">
              <Heading as="h2" size="section">
                {OM_GALLERY.h2}
              </Heading>
              <p className="mt-4 font-light leading-normal text-pine/70 xl:text-[17px]">
                {OM_GALLERY.sub}
              </p>
            </div>
            <Button href={OM_GALLERY.cta.href} variant="pine" size="md" className="w-full sm:w-auto">
              {OM_GALLERY.cta.label}
            </Button>
          </div>

          <ul className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            {OM_GALLERY.photos.map((photo) => (
              <li key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1280px) 300px, 50vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
