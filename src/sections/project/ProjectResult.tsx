import { getLocale } from "next-intl/server";
import Image from "next/image";

import { Container, Heading } from "@/components/ui";
import type { Project } from "@/constants/projects";
import { ui } from "@/lib/i18n/copy";

/* "Resultat" — home-SeoText layout, mirrored: the write-up on the left, the
   result photo on the right with the ring decor over its bottom-right corner.
   Image is the gallery "result" shot, falling back to the hero image. */
export async function ProjectResult({ project }: { project: Project }) {
  const t = ui(await getLocale());
  const resultShot = project.gallery.find((g) => g.kind === "result");
  const image = resultShot
    ? { src: resultShot.src, alt: resultShot.alt }
    : { src: project.heroImage, alt: project.heroImageAlt };

  return (
    <section className="overflow-hidden bg-black py-16 text-white xl:py-20">
      <Container>
        <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:gap-[86px]">
          {/* Copy */}
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <Heading as="h2" size="section" className="text-white">
              {t.projectResultH2}
            </Heading>
            <p className="text-base font-light leading-relaxed text-white/80 xl:text-[18px]">
              {project.result}
            </p>

            {project.focus.length > 0 ? (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.35px] text-leaf">
                  {t.projectFocusH3}
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base font-light leading-relaxed text-white/80 marker:text-leaf">
                  {project.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* Photo + ring decor at its bottom-right corner (home SeoText treatment) */}
          <div className="relative shrink-0">
            <div className="relative h-[260px] w-full overflow-hidden rounded-xl xl:h-[380px] xl:w-[538px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1280px) 538px, 100vw"
                className="object-cover"
              />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/svg/decor-rings-seo.svg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute -bottom-5 right-4 z-10 hidden h-[150px] w-[165px] max-w-none opacity-90 xl:block"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
