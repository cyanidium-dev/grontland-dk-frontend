import { Link } from "@/i18n/navigation";

import { Container, Heading, InfoBox } from "@/components/ui";
import { QuoteModalForm } from "@/components/quote";
import { getLocale } from "next-intl/server";

import { kontaktCopy } from "@/lib/i18n/copy";

/* Full-page quote form + direct-contact column. The form reuses the shared
   QuoteModalForm (same fields as the modal — one source of copy/markup). */
export async function KontaktForm() {
  const { KONTAKT_FORM, KONTAKT_INFO } = kontaktCopy(await getLocale());
  return (
    <section className="bg-white py-16 xl:py-24">
      <Container>
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_400px] xl:gap-16">
          <div>
            <Heading as="h2" size="section">
              {KONTAKT_FORM.h2}
            </Heading>
            <InfoBox variant="mist" className="mt-8 p-6 sm:p-8">
              <QuoteModalForm />
            </InfoBox>
          </div>

          <div>
            <Heading as="h2" size="card">
              {KONTAKT_INFO.h2}
            </Heading>
            <ul className="mt-8 flex flex-col gap-3">
              {KONTAKT_INFO.items.map((item) => (
                <li key={item.label}>
                  <InfoBox variant="light" className="border border-line px-5 py-4">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-moss">{item.label}</p>
                    {"href" in item && item.href ? (
                      <Link
                        href={item.href}
                        className="mt-1 block text-[16px] font-semibold text-pine transition-colors hover:text-leaf"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="mt-1 text-[16px] font-semibold text-pine">{item.value}</p>
                    )}
                    {"hint" in item && item.hint && (
                      <p className="mt-1 text-sm font-light text-pine/60">{item.hint}</p>
                    )}
                  </InfoBox>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-light text-pine/60">{KONTAKT_INFO.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
