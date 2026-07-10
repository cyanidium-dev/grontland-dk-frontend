"use client";

import { useState } from "react";

import { CoverflowCarousel } from "./CoverflowCarousel";
import { GalleryLightbox } from "./GalleryLightbox";
import type { GalleryItem } from "./types";

export function GalleryCarousel({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!items.length) return null;

  return (
    <>
      <CoverflowCarousel
        items={items}
        activeIndex={activeIndex}
        onActiveIndexChange={setActiveIndex}
        onSlideClick={() => setIsLightboxOpen(true)}
      />
      <GalleryLightbox
        items={items}
        isOpen={isLightboxOpen}
        activeIndex={activeIndex}
        onActiveIndexChange={setActiveIndex}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}
