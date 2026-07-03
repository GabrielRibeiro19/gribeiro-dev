import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import type { SkillGroup } from "@/data/types";
import type { Resolved } from "@/repositories/content";
import { cn } from "@/lib/utils";

type SkillsProps = {
  groups: Resolved<SkillGroup>[];
};

export async function Skills({ groups }: SkillsProps) {
  const t = await getTranslations("skills");

  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8"
    >
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <Reveal key={group.id} delay={Math.min((index % 3) * 0.07, 0.2)}>
            <div className="h-full rounded-xl border border-border/70 bg-card/60 p-5">
              <h3 className="mb-4 font-heading font-semibold">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={cn(
                      "rounded-md border px-2.5 py-1 font-mono text-xs",
                      skill.level === "core"
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border bg-muted/50 text-muted-foreground",
                    )}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
