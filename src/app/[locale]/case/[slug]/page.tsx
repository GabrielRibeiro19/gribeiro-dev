import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  LockIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { GitHubIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import {
  getCaseStudies,
  getCaseStudy,
  getCaseStudySlugs,
} from "@/repositories/content";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getCaseStudySlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const caseStudy = await getCaseStudy(slug, locale as Locale);
  if (!caseStudy) {
    return {};
  }

  const path = `/case/${slug}`;
  return {
    title: caseStudy.title,
    description: caseStudy.problem[0]?.slice(0, 155),
    alternates: {
      canonical: locale === "pt" ? path : `/en${path}`,
      languages: {
        "pt-BR": path,
        en: `/en${path}`,
        "x-default": path,
      },
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const currentLocale = locale as Locale;
  const caseStudy = await getCaseStudy(slug, currentLocale);
  if (!caseStudy) {
    notFound();
  }

  const t = await getTranslations("case");
  const allCases = await getCaseStudies(currentLocale);
  const index = allCases.findIndex((entry) => entry.slug === slug);
  const previous = allCases[(index - 1 + allCases.length) % allCases.length];
  const next = allCases[(index + 1) % allCases.length];

  const localePrefix = currentLocale === "pt" ? "" : "/en";
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteConfig.url}${localePrefix || "/"}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: caseStudy.title,
        item: `${siteConfig.url}${localePrefix}/case/${slug}`,
      },
    ],
  };

  return (
    <article className="relative">
      <JsonLd data={breadcrumb} />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 h-96 w-[70vw] max-w-3xl -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
        {/* Header */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="size-4" />
          {t("backToProjects")}
        </Link>

        <header className="mt-8">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            <span aria-hidden>{"// "}</span>
            {caseStudy.subtitle}
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {caseStudy.title}
          </h1>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <div>
              <dt className="font-mono text-xs text-muted-foreground uppercase">
                {t("role")}
              </dt>
              <dd className="mt-1 font-medium">{caseStudy.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-muted-foreground uppercase">
                {t("period")}
              </dt>
              <dd className="mt-1 font-medium">{caseStudy.period}</dd>
            </div>
          </dl>
          {(caseStudy.links.live ?? caseStudy.links.repo) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {caseStudy.links.live && (
                <Button
                  render={
                    <a
                      href={caseStudy.links.live}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  {t("liveSite")}
                  <ArrowUpRightIcon className="size-4" />
                </Button>
              )}
              {caseStudy.links.repo && (
                <Button
                  variant="outline"
                  render={
                    <a
                      href={caseStudy.links.repo}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  <GitHubIcon className="size-4" />
                  {t("repo")}
                </Button>
              )}
            </div>
          )}
        </header>

        {caseStudy.confidential && (
          <div className="mt-10 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm text-muted-foreground">
            <LockIcon className="mt-0.5 size-4 shrink-0 text-primary" />
            <p className="text-pretty">{t("nda")}</p>
          </div>
        )}

        {/* Problem */}
        <Reveal className="mt-14">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            {t("problem")}
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            {caseStudy.problem.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Solution */}
        <Reveal className="mt-12">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            {t("solution")}
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            {caseStudy.solution.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Images */}
        {caseStudy.images.length > 0 && (
          <Reveal className="mt-12">
            <div className="space-y-6">
              {caseStudy.images.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  className="w-full rounded-xl border border-border/70"
                />
              ))}
            </div>
          </Reveal>
        )}

        {/* Stack */}
        <Reveal className="mt-12">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            {t("stack")}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {caseStudy.stack.map((group) => (
              <div
                key={group.label}
                className="rounded-xl border border-border/70 bg-card/60 p-4"
              >
                <p className="mb-3 font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Results */}
        <Reveal className="mt-12">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            {t("results")}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {caseStudy.results.map((result) => (
              <div
                key={result.value}
                className="rounded-xl border border-border/70 bg-card/60 p-5"
              >
                <p className="font-heading text-xl font-bold text-primary">
                  {result.value}
                </p>
                <p className="mt-1.5 text-sm text-pretty text-muted-foreground">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Prev / next */}
        <nav
          aria-label={t("otherCases")}
          className="mt-16 grid gap-4 border-t border-border/60 pt-8 sm:grid-cols-2"
        >
          <Link
            href={`/case/${previous.slug}`}
            className="group rounded-xl border border-border/70 bg-card/60 p-5 transition-colors hover:border-primary/40"
          >
            <p className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground uppercase">
              <ArrowLeftIcon className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              {t("prevCase")}
            </p>
            <p className="mt-2 font-heading font-semibold text-balance">
              {previous.title}
            </p>
          </Link>
          <Link
            href={`/case/${next.slug}`}
            className="group rounded-xl border border-border/70 bg-card/60 p-5 text-right transition-colors hover:border-primary/40"
          >
            <p className="flex items-center justify-end gap-1.5 font-mono text-xs text-muted-foreground uppercase">
              {t("nextCase")}
              <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </p>
            <p className="mt-2 font-heading font-semibold text-balance">
              {next.title}
            </p>
          </Link>
        </nav>
      </div>
    </article>
  );
}
