import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Timeline } from "@/components/sections/timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/routing";
import {
  getEducation,
  getExperience,
  getFeaturedProjects,
  getGridProjects,
  getProfile,
  getSkillGroups,
} from "@/repositories/content";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: locale === "pt" ? "/" : "/en",
      languages: {
        "pt-BR": "/",
        en: "/en",
        "x-default": "/",
      },
    },
  };
}

function buildJsonLd(locale: Locale) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.avatar}`,
    jobTitle:
      locale === "pt" ? "Desenvolvedor Fullstack" : "Fullstack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Cubos Tecnologia",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Piracicaba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    email: `mailto:${siteConfig.email}`,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "TailwindCSS",
      "Docker",
      "AWS",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.shortName,
    inLanguage: locale === "pt" ? "pt-BR" : "en",
    publisher: { "@id": `${siteConfig.url}/#person` },
  };

  return [person, website];
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const currentLocale = locale as Locale;
  const [profile, experience, featured, grid, skills, education] =
    await Promise.all([
      getProfile(currentLocale),
      getExperience(currentLocale),
      getFeaturedProjects(currentLocale),
      getGridProjects(currentLocale),
      getSkillGroups(currentLocale),
      getEducation(currentLocale),
    ]);

  return (
    <>
      {buildJsonLd(currentLocale).map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}
      <Hero />
      <About paragraphs={profile.aboutParagraphs} />
      <Timeline items={experience} />
      <Projects featured={featured} grid={grid} />
      <Skills groups={skills} />
      <Education items={education} certifications={profile.certifications} />
      <Contact />
    </>
  );
}
