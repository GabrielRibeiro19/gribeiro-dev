import type { Locale } from "@/i18n/routing";

/** A string authored in every supported locale. */
export type Localized = Record<Locale, string>;

/** A list of strings (e.g. paragraphs) authored in every supported locale. */
export type LocalizedList = Record<Locale, string[]>;

export interface ExperienceItem {
  id: string;
  company: string;
  /** End client when allocated through a consultancy (e.g. Cubos → Zig). */
  client?: string;
  url?: string;
  role: Localized;
  summary: Localized;
  highlights: LocalizedList;
  stack: string[];
  /** ISO month, e.g. "2025-05". */
  start: string;
  /** null = current position. */
  end: string | null;
}

export type ProjectKind = "freelance" | "saas" | "professional";

export interface Project {
  id: string;
  name: string;
  kind: ProjectKind;
  tagline: Localized;
  url?: string;
  repoUrl?: string;
  /** Screenshot under /public. Featured (case) cards work without one. */
  image?: string;
  logo?: string;
  stack: string[];
  /** Links the project card to a case-study page. */
  caseStudySlug?: string;
}

export interface CaseStudy {
  slug: string;
  projectId: string;
  title: Localized;
  subtitle: Localized;
  role: Localized;
  period: Localized;
  problem: LocalizedList;
  solution: LocalizedList;
  stack: { label: Localized; items: string[] }[];
  results: { value: Localized; label: Localized }[];
  images: { src: string; alt: Localized }[];
  links: { live?: string; repo?: string };
  /** NDA project: no code, no product visuals. */
  confidential?: boolean;
}

export interface SkillGroup {
  id: string;
  label: Localized;
  skills: { name: string; level: "core" | "working" }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: Localized;
  start: string;
  end: string;
  status: "done" | "in-progress";
}

export interface Profile {
  aboutParagraphs: LocalizedList;
  certifications: string[];
  personal: {
    /** ISO date used to compute age at runtime. */
    birthDate: string;
    animes: string[];
    fandoms: string[];
    hobbies: LocalizedList;
    music: Localized;
    mission: Localized;
  };
}
