import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

type AboutProps = {
  paragraphs: string[];
};

export async function About({ paragraphs }: AboutProps) {
  const t = await getTranslations("about");

  const stats = [
    { value: "4+", label: t("statsYears") },
    { value: "10+", label: t("statsProjects") },
    { value: "40+", label: t("statsRepos") },
  ];

  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <div className="grid gap-12 lg:grid-cols-3">
        <Reveal className="space-y-5 text-muted-foreground lg:col-span-2">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col rounded-xl border border-border/70 bg-card/60 p-4 lg:p-5"
              >
                <dt className="order-2 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
