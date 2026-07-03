import "server-only";

import { caseStudies } from "@/data/case-studies";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import type { Localized, LocalizedList } from "@/data/types";
import type { Locale } from "@/i18n/routing";

/**
 * Maps authoring types to locale-resolved types:
 * `Localized` → `string`, `LocalizedList` → `string[]`, recursing into
 * arrays and objects. Components only ever see resolved shapes.
 */
export type Resolved<T> = T extends Localized
  ? string
  : T extends LocalizedList
    ? string[]
    : T extends (infer U)[]
      ? Resolved<U>[]
      : T extends object
        ? { [K in keyof T]: Resolved<T[K]> }
        : T;

function isLocalized(value: object): value is Localized | LocalizedList {
  const keys = Object.keys(value);
  return keys.length === 2 && "pt" in value && "en" in value;
}

function resolve<T>(value: T, locale: Locale): Resolved<T> {
  if (Array.isArray(value)) {
    return value.map((item) => resolve(item, locale)) as Resolved<T>;
  }
  if (value !== null && typeof value === "object") {
    if (isLocalized(value)) {
      return value[locale] as Resolved<T>;
    }
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, resolve(entry, locale)]),
    ) as Resolved<T>;
  }
  return value as Resolved<T>;
}

export async function getProfile(locale: Locale) {
  return resolve(profile, locale);
}

export async function getExperience(locale: Locale) {
  return resolve(experience, locale);
}

export async function getProjects(locale: Locale) {
  return resolve(projects, locale);
}

export async function getFeaturedProjects(locale: Locale) {
  return resolve(
    projects.filter((project) => project.caseStudySlug),
    locale,
  );
}

export async function getGridProjects(locale: Locale) {
  return resolve(
    projects.filter((project) => !project.caseStudySlug),
    locale,
  );
}

export async function getSkillGroups(locale: Locale) {
  return resolve(skillGroups, locale);
}

export async function getEducation(locale: Locale) {
  return resolve(education, locale);
}

export async function getCaseStudies(locale: Locale) {
  return resolve(caseStudies, locale);
}

export async function getCaseStudy(slug: string, locale: Locale) {
  const found = caseStudies.find((caseStudy) => caseStudy.slug === slug);
  return found ? resolve(found, locale) : null;
}

export function getCaseStudySlugs() {
  return caseStudies.map((caseStudy) => caseStudy.slug);
}
