import Image from "next/image";

import { OpenQuoteButton } from "@/components/quote";
import { Container, Heading } from "@/components/ui";
import { PROJECTS_LIST } from "@/constants/projects";

/* Project listing + detail CTA — black band (contrasts pine footer), photo + copy. */
export function ProjectCta() {
  const { h2, sub, button, image, imageAlt } = PROJECTS_LIST.ctaBand;

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <Container className="relative z-10 grid items-stretch gap-10 py-16 xl:grid-cols-2 xl:gap-14 xl:py-20">
        <div className="max-w-xl">
          <Heading as="h2" size="section" className="text-white">
            {h2}
          </Heading>
          <p className="mt-5 text-base font-light leading-relaxed text-white/70 xl:text-[17px]">
            {sub}
          </p>
          <OpenQuoteButton
            variant="leaf"
            size="md"
            className="mt-8 w-full sm:w-auto"
          >
            {button}
          </OpenQuoteButton>
        </div>

        <div className="relative aspect-[2/1] overflow-hidden rounded-2xl xl:aspect-auto xl:min-h-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1280px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
