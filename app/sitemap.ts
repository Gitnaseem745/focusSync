import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Base static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  // Uncomment and use this for dynamic pages if any
//   if (siteConfig.pages?.dynamic) {
//     siteConfig.pages.dynamic.forEach((page) => {
//       routes.push({
//         url: `${baseUrl}/${page.slug}`,
//         lastModified: new Date().toISOString(),
//         changeFrequency: "monthly",
//         priority: 0.7,
//       });
//     });
//   }

  return routes;
}
