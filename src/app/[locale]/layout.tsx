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
import { OG_IMAGE, SITE_META } from "@/lib/seo/meta";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";
  const m = SITE_META[en ? "en" : "da"];
  // No alternates here: canonical/hreflang are per-page (home sets its own;
  // subpage hreflang comes from sitemap.ts — a layout-wide set would wrongly
  // point every subpage at "/" and conflict with the sitemap's pairs).
  return {
    metadataBase: new URL("https://grontland.dk"),
    title: m.title,
    description: m.description,
    openGraph: {
      type: "website",
      siteName: "Grønt Land DK",
      title: m.title,
      description: m.description,
      locale: en ? "en_DK" : "da_DK",
      images: [{ ...OG_IMAGE, alt: m.title }],
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
