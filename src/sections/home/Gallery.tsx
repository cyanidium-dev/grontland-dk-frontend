import { Container, Heading, Button, FilterPill } from "@/components/ui";
import { GALLERY } from "@/constants/home";

/* SHELL — "Galleri fra udførte opgaver": tag filters + photo grid + CTA to the
   standalone /galleri page. Photo slots are placeholders until real assets are
   exported (same convention as Projects). */
export function Gallery() {
  return (
    <section className="bg-mist py-16 xl:py-24">
      <Container>
        <div className="max-w-2xl">
          <Heading as="h2" size="section">
            {GALLERY.h2}
          </Heading>
          <p className="mt-4 font-light text-pine/70 xl:text-[18px]">{GALLERY.sub}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {GALLERY.tags.map((tag) => (
            <FilterPill key={tag} label={tag} />
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {GALLERY.photos.map((photo, i) => (
            <li key={photo.image}>
              {/* Image slot — placeholder */}
              <div
                className={`overflow-hidden rounded-[14px] bg-white ring-1 ring-inset ring-line ${
                  i % 3 === 0 ? "aspect-3/4" : "aspect-square"
                }`}
                aria-label={photo.imageAlt}
              />
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Button href={GALLERY.cta.href} variant="leaf" withArrow>
            {GALLERY.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
