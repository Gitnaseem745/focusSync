import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/siteConfig"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private", "/admin"], // Add only if needed
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
