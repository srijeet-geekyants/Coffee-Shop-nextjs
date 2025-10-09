import type { MetadataRoute } from "next";

import { env } from "env";

/**
 * @description Robots for the website
 * @returns {MetadataRoute.Robots} Robots for the website
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "sentry-example-page", "/api", "/api-docs"],
    },
    sitemap: `${env.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
    host: env.NEXT_PUBLIC_APP_URL,
  };
}
