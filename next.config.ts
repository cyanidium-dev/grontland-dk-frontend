import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
    formats: ["image/avif", "image/webp"],
    // No source photo exceeds 1280px, so the 2048/3840 buckets only fragment
    // the optimizer cache (the API never upscales). 1920 stays as headroom for
    // future high-res uploads.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // 85 = main/hero photos, 75 = default, 65 = images under gradient
    // overlays or rendered small (decorative sliders, text backgrounds).
    qualities: [65, 75, 85],
    // Sanity asset URLs are content-hashed and local images are re-named on
    // change, so long-lived optimizer cache entries can never serve stale art.
    minimumCacheTTL: 2678400,
  },
};

export default withNextIntl(nextConfig);
