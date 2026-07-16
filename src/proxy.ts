import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip api, Next internals and files with extensions (images, sitemap.xml…).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
