import type { GalleryItem } from "@/components/gallery";
import { GalleryStrip } from "@/sections/shared";
import { getGalleryCategories } from "@/lib/sanity/queries";
import { OM_GALLERY } from "@/constants/om";

/* Gallery teaser — coverflow slider (shared GalleryStrip), 2 photos per
   service from the CMS categories, ring decor per Figma feedback image 14.
   Copy is local. */
const PER_SERVICE = 2;

export async function OmGallery() {
  const categories = await getGalleryCategories();
  const items: GalleryItem[] = categories.flatMap((c) =>
    c.photos
      .slice(0, PER_SERVICE)
      .map((photo) => ({ _key: photo.src, image: { link: photo.src, alt: photo.alt } })),
  );

  return (
    <GalleryStrip
      h2={OM_GALLERY.h2}
      sub={OM_GALLERY.sub}
      cta={OM_GALLERY.cta}
      items={items}
      decor
    />
  );
}
