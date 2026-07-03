import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getCaseStudySlugs } from "@/repositories/content";

const BASE = siteConfig.url;

function entry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE}${path === "/" ? "" : path}` || BASE,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        "pt-BR": `${BASE}${path === "/" ? "" : path}` || BASE,
        en: `${BASE}/en${path === "/" ? "" : path}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const cases = getCaseStudySlugs();

  return [
    entry("/", 1, "monthly"),
    { ...entry("/", 0.8, "monthly"), url: `${BASE}/en` },
    ...cases.flatMap((slug) => [
      entry(`/case/${slug}`, 0.8, "monthly"),
      { ...entry(`/case/${slug}`, 0.6, "monthly"), url: `${BASE}/en/case/${slug}` },
    ]),
  ];
}
