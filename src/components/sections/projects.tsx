import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { GitHubIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import type { Project } from "@/data/types";
import { Link } from "@/i18n/navigation";
import type { Resolved } from "@/repositories/content";

type ResolvedProject = Resolved<Project>;

type ProjectsProps = {
  featured: ResolvedProject[];
  grid: ResolvedProject[];
};

const KIND_KEY = {
  freelance: "kindFreelance",
  saas: "kindSaas",
  professional: "kindProfessional",
} as const;

export async function Projects({ featured, grid }: ProjectsProps) {
  const t = await getTranslations("projects");

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8"
    >
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

      <Reveal>
        <p className="mb-6 font-mono text-sm tracking-wide text-muted-foreground">
          {t("featuredTitle")}
        </p>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {featured.map((project, index) => (
          <Reveal key={project.id} delay={Math.min(index * 0.07, 0.3)}>
            <Link
              href={`/case/${project.caseStudySlug}`}
              className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="secondary" className="font-mono text-xs">
                  {t(KIND_KEY[project.kind])}
                </Badge>
                <ArrowUpRightIcon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">
                {project.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-primary">
                {t("viewCase")}
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </p>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-16 mb-1 font-mono text-sm tracking-wide text-muted-foreground">
          {t("freelanceTitle")}
        </p>
        <p className="mb-6 text-sm text-muted-foreground/80">
          {t("freelanceSubtitle")}
        </p>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {grid.map((project, index) => (
          <Reveal key={project.id} delay={Math.min((index % 3) * 0.07, 0.2)}>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              {project.image && (
                <div className="relative aspect-3/2 overflow-hidden border-b border-border/60">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading font-semibold">{project.name}</h3>
                  <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-1.5 text-xs text-pretty text-muted-foreground">
                  {project.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border/70 bg-card/60 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="font-heading text-lg font-semibold">
              {t("githubCtaTitle")}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("githubCtaText")}
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            render={
              <a href={siteConfig.github} target="_blank" rel="noreferrer" />
            }
          >
            <GitHubIcon className="size-4" />
            {t("githubCtaButton")}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
