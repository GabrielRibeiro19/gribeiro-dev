import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import type { EducationItem } from "@/data/types";
import type { Resolved } from "@/repositories/content";

type EducationProps = {
  items: Resolved<EducationItem>[];
  certifications: string[];
};

export async function Education({ items, certifications }: EducationProps) {
  const t = await getTranslations("education");

  return (
    <section
      id="education"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8"
    >
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={Math.min(index * 0.07, 0.2)}>
            <div className="flex h-full flex-col rounded-xl border border-border/70 bg-card/60 p-5">
              <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                {item.institution}
              </p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-balance">
                {item.degree}
              </h3>
              <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.start} — {item.end}
                </span>
                <Badge
                  variant={item.status === "in-progress" ? "default" : "secondary"}
                >
                  {item.status === "in-progress" ? t("inProgress") : t("done")}
                </Badge>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <p className="mb-4 font-mono text-sm tracking-wide text-muted-foreground">
          {t("certifications")}
        </p>
        <div className="flex flex-wrap gap-2">
          {certifications.map((certification) => (
            <span
              key={certification}
              className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {certification}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
