import type { GalleryItem } from "@/components/gallery";
import { GalleryStrip } from "@/sections/shared";
import { GALLERY_PHOTOS } from "@/constants/gallery";
import { OM_GALLERY } from "@/constants/om";

/* Gallery teaser — coverflow slider (shared GalleryStrip), 2 photos per
   service from the catalog, ring decor per Figma feedback image 14. */
const PER_SERVICE = 2;

function curatedItems(): GalleryItem[] {
  const counts = new Map<string, number>();
  return GALLERY_PHOTOS.filter((photo) => {
    const n = counts.get(photo.service) ?? 0;
    if (n >= PER_SERVICE) return false;
    counts.set(photo.service, n + 1);
    return true;
  }).map((photo) => ({ _key: photo.src, image: { link: photo.src, alt: photo.alt } }));
}

export function OmGallery() {
  return (
    <GalleryStrip
      h2={OM_GALLERY.h2}
      sub={OM_GALLERY.sub}
      cta={OM_GALLERY.cta}
      items={curatedItems()}
      decor
    />
  );
}
