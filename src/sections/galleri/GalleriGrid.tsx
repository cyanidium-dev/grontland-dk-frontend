"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import type { GalleryItem } from "@/components/gallery";
import { Container, FilterPill } from "@/components/ui";
import {
  filterGalleryPhotos,
  GALLERY_FILTERS,
  type GalleryFilterId,
} from "@/constants/gallery";

/* Full-page gallery: service filter pills + responsive photo grid; clicking a
   photo opens the shared lightbox. Same catalog as the home Gallery carousel. */
export function GalleriGrid() {
  const [filter, setFilter] = useState<GalleryFilterId>("alle");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = filterGalleryPhotos(filter);
  const items: GalleryItem[] = useMemo(
    () =>
      photos.map((photo) => ({
        _key: photo.src,
        image: { link: photo.src, alt: photo.alt },
      })),
    [photos],
  );

  return (
    <section className="bg-white pb-16 xl:pb-24">
      <Container>
        <div role="group" aria-label="Filtrer galleri" className="flex flex-wrap gap-2">
          {GALLERY_FILTERS.map((item) => (
            <FilterPill
              key={item.id}
              label={item.label}
              active={filter === item.id}
              onClick={() => {
                setFilter(item.id);
                setLightboxIndex(null);
              }}
              className={
                filter === item.id
                  ? undefined
                  : "border-transparent bg-leaf/12 text-moss hover:border-transparent hover:bg-leaf/20"
              }
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 xl:grid-cols-4">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-leaf"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
            </button>
          ))}
        </div>
      </Container>

      <GalleryLightbox
        items={items}
        isOpen={lightboxIndex !== null}
        activeIndex={lightboxIndex ?? 0}
        onActiveIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </section>
  );
}
