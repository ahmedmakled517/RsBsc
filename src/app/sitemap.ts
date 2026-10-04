import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rsbsc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/product", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const currentDate = new Date();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const enUrl = `${SITE_URL}/en${route.path}`;
    const hiUrl = `${SITE_URL}/hi${route.path}`;

    // English Entry
    sitemapEntries.push({
      url: enUrl,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          en: enUrl,
          hi: hiUrl,
          "x-default": enUrl,
        },
      },
    });

    // Hindi Entry
    sitemapEntries.push({
      url: hiUrl,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          en: enUrl,
          hi: hiUrl,
          "x-default": enUrl,
        },
      },
    });
  }

  return sitemapEntries;
}
