import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Manrope, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

import { JsonLd } from "@/components/seo/JsonLd";
import { routing } from "@/i18n/routing";
import { getSiteSettings } from "@/lib/sanity/queries";
import { localBusiness } from "@/lib/seo/jsonld";

// Manrope — body + display headings (300–800 covers Light…Bold used in the design).
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

// Montserrat — stat / label / chip typography.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const META = {
  da: {
    title: "Grønt Land DK — Renovering og byggearbejde i København",
    description:
      "Grønt Land DK hjælper private boligejere og entreprenører med renovering, facadearbejde, belægning, tømrerarbejde, murerarbejde, malerarbejde og havearbejde i København og Storkøbenhavn.",
  },
  en: {
    title: "Grønt Land DK — Renovation and construction in Copenhagen",
    description:
      "Grønt Land DK helps homeowners and contractors with renovation, façade work, paving, carpentry, masonry, painting and garden work in Copenhagen and Greater Copenhagen.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale === "en" ? "en" : "da"];
  return {
    metadataBase: new URL("https://grontland.dk"),
    title: m.title,
    description: m.description,
    alternates: {
      // da is unprefixed (localePrefix "as-needed"); en lives at /en.
      languages: { da: "/", en: "/en", "x-default": "/" },
    },
  };
}

// da + en both prerender (localePrefix "as-needed" keeps da unprefixed).
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export const dynamicParams = false;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const settings = await getSiteSettings();
  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-pine">
        <NextIntlClientProvider>
          <JsonLd data={localBusiness(settings)} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
