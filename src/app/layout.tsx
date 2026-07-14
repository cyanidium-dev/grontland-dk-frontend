import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";

import { JsonLd } from "@/components/seo/JsonLd";
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

export const metadata: Metadata = {
  title: "Grønt Land DK — Renovering og byggearbejde i København",
  description:
    "Grønt Land DK hjælper private boligejere og entreprenører med renovering, facadearbejde, belægning, tømrerarbejde, murerarbejde, malerarbejde og havearbejde i København og Storkøbenhavn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`${manrope.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-pine">
        <JsonLd data={localBusiness()} />
        {children}
      </body>
    </html>
  );
}
