"use client";

import { useState } from "react";

import { useLocale } from "next-intl";

import { Container, Heading, Button, FilterPill, Marquee } from "@/components/ui";
import { StarIcon } from "@/components/icons";
import { GalleryCarousel, type GalleryItem } from "@/components/gallery";
import { homeCopy } from "@/lib/i18n/copy";
import type { GalleryCategoryData } from "@/lib/sanity/queries";

/* "Galleri fra udførte opgaver" — Figma #3023:761.
   Right-aligned H2 + sub; left leaf CTA + service filter pills; coverflow;
   pine marquee at bottom (unlike Services/Projects leaf marquees).
   Copy is local; pills + photos come from CMS galleryCategory docs. */
export function Gallery({ categories }: { categories: GalleryCategoryData[] }) {
  const locale = useLocale();
  const { GALLERY, MARQUEE_WORDS } = homeCopy(locale);
  const [filter, setFilter] = useState<string>("alle");

  const allLabel = locale === "en" ? "All" : "Alle";
  const filters = [{ id: "alle", label: allLabel }, ...categories.map((c) => ({ id: c.id, label: c.label }))];
  const photos =
    filter === "alle"
      ? categories.flatMap((c) => c.photos)
      : (categories.find((c) => c.id === filter)?.photos ?? []);
  const galleryItems: GalleryItem[] = photos.map((photo) => ({
    _key: photo.src,
    image: { link: photo.src, alt: photo.alt },
  }));

  return (
    <section className="relative overflow-hidden bg-white pt-16 xl:pt-24">
      {/* Ring decor behind CTA — Figma #3023:781 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/decor-rings-gallery.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%-320px)] top-[200px] hidden w-[380px] max-w-none opacity-90 xl:block"
      />

      <Container className="relative z-10">
        <div className="flex flex-col xl:items-end">
          <Heading as="h2" size="section" className="xl:text-right">
            {GALLERY.h2}
          </Heading>
          <p className="mt-4 max-w-xl font-light text-pine/70 xl:text-right xl:text-[18px]">
            {GALLERY.sub}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center xl:mt-10">
          <Button href={GALLERY.cta.href} variant="leaf" className="w-full shrink-0 sm:w-[284px]">
            {GALLERY.cta.label}
          </Button>
          <div role="group" aria-label="Filtrer galleri" className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <FilterPill
                key={item.id}
                label={item.label}
                active={filter === item.id}
                onClick={() => setFilter(item.id)}
                className={
                  filter === item.id
                    ? undefined
                    : "border-transparent bg-leaf/12 text-moss hover:border-transparent hover:bg-leaf/20"
                }
              />
            ))}
          </div>
        </div>
      </Container>

      <div className="relative z-10 mx-auto mt-10 max-w-[416px] sm:max-w-[726px] md:max-w-[867px] lg:max-w-[1141px] xl:mt-12 xl:max-w-[1494px]">
        {/* key resets the carousel to slide 0 when the filter changes */}
        <GalleryCarousel key={filter} items={galleryItems} />
      </div>

      {/* Pine marquee — Figma #3023:806 (bg-pine, not leaf like Services/Projects) */}
      <div className="mt-14 xl:mt-16">
        <Marquee
          durationSec={40}
          className="bg-pine py-4"
          separator={<StarIcon className="mx-6 size-3.5 shrink-0 text-white" />}
          items={Array.from({ length: 5 })
            .flatMap(() => MARQUEE_WORDS.map((w) => w))
            .map((w, i) => (
              <span
                key={i}
                className="text-[14px] font-bold uppercase tracking-[2.8px] text-white"
              >
                {w}
              </span>
            ))}
        />
      </div>
    </section>
  );
}
