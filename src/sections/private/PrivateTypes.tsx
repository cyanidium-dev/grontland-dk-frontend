import Image from "next/image";
import Link from "next/link";

import { Container, Heading, InfoBox } from "@/components/ui";
import { PRIVATE_TYPES } from "@/constants/privatePage";

const linkClass =
  "text-[12px] font-bold uppercase tracking-[0.3px] text-moss underline underline-offset-4 transition-colors hover:text-leaf";

/* Popular project types — each card pairs a service link with a real completed
   project (the page's main interlink pattern). */
export function PrivateTypes() {
  return (
    <section className="bg-white py-16 xl:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          <Heading as="h2" size="section">
            {PRIVATE_TYPES.h2}
          </Heading>

          <ul className="grid gap-3 sm:grid-cols-2">
            {PRIVATE_TYPES.items.map((item) => (
              <li key={item.title} className="h-full">
                <InfoBox variant="light" className="flex h-full flex-col overflow-hidden border border-line">
                  <div className="relative aspect-[21/9]">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[16px] font-bold uppercase leading-6 text-pine">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-pine/60">{item.desc}</p>
                    <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      <Link href={item.service.href} className={linkClass}>
                        {item.service.label}
                      </Link>
                      <Link href={item.example.href} className={linkClass}>
                        {item.example.label}
                      </Link>
                    </p>
                  </div>
                </InfoBox>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
