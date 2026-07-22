import { getLocale } from "next-intl/server";

import { FaqSection } from "@/sections/shared";
import { homeCopy } from "@/lib/i18n/copy";

/* Home FAQ — the shared FaqSection (Figma 3067:72) fed the home copy. */
export async function Faq() {
  const locale = await getLocale();
  const FAQ = homeCopy(locale).FAQ;
  return <FaqSection h2={FAQ.h2} items={FAQ.items} locale={locale} />;
}
