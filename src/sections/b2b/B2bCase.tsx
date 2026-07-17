import Image from "next/image";

import { getLocale } from "next-intl/server";

import { Container, Heading, Button, StarChip } from "@/components/ui";
import { getProjectBySlug } from "@/lib/sanity/queries";
import { b2bCopy } from "@/lib/i18n/copy";

/* ARC Amager reference — the page's proof section (replaces the old site's
   testimonials). Copy is local; the project photo/label come from the CMS. */
export async function B2bCase() {
  const B2B_CASE = b2bCopy(await getLocale()).B2B_CASE;
  const project = await getProjectBySlug(B2B_CASE.slug);

  return (
    <section className="bg-mist py-16 xl:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 xl:gap-14">
          <div>
            <Heading as="h2" size="card">
              {B2B_CASE.h2}
            </Heading>
            <p className="mt-5 font-light leading-normal text-pine/70 xl:text-[17px]">{B2B_CASE.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {B2B_CASE.ctas.map((cta, i) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  variant={i === 0 ? "leaf" : "outline"}
                  size="md"
                  className="w-full sm:w-auto"
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>

          {project && (
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={project.cardImage}
                  alt={project.cardImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <StarChip
                text={project.serviceLabel}
                boxVariant="light"
                starVariant="leaf"
                textSize="sm"
                className="absolute -bottom-5 left-6 right-6 shadow-lg sm:right-auto sm:w-[360px]"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
