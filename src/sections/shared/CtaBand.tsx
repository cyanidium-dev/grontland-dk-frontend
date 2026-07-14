import Link from "next/link";

import { Container, Heading, Button } from "@/components/ui";

const PHONE = { label: "Ring 91 70 01 03", href: "tel:+4591700103" } as const;

/* Final CTA band for inner pages — black (contrasts the pine footer, like
   ProjectCta). Primary button + phone + optional crosslinks row. */
export function CtaBand({
  h2,
  text,
  primary,
  crosslinks = [],
}: {
  h2: string;
  text: string;
  primary: { label: string; href: string };
  crosslinks?: readonly { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <Container className="py-16 md:py-20">
        <div className="max-w-2xl">
          <Heading as="h2" size="section" className="text-white">
            {h2}
          </Heading>
          <p className="mt-5 text-base font-light leading-relaxed text-white/70 xl:text-[17px]">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primary.href} variant="leaf" size="md" className="w-full sm:w-auto">
              {primary.label}
            </Button>
            <Button href={PHONE.href} variant="white" size="md" className="w-full sm:w-auto">
              {PHONE.label}
            </Button>
          </div>
          {crosslinks.length > 0 && (
            <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {crosslinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[12px] font-bold uppercase tracking-[0.3px] text-white/70 underline underline-offset-4 transition-colors hover:text-leaf"
                >
                  {link.label}
                </Link>
              ))}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
