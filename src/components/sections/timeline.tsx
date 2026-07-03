"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/i18n/routing";
import { formatMonth } from "@/lib/format";
import { cn } from "@/lib/utils";

type TimelineItem = {
  id: string;
  company: string;
  client?: string;
  url?: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  start: string;
  end: string | null;
};

function TimelineEntry({ item }: { item: TimelineItem }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("timeline");
  const [open, setOpen] = useState(false);

  const isCurrent = item.end === null;
  const hasDetails = item.highlights.length > 0 || item.stack.length > 0;
  const period = `${formatMonth(item.start, locale)} — ${
    item.end ? formatMonth(item.end, locale) : t("present")
  }`;

  return (
    <li className="relative pl-8 sm:pl-10">
      <span
        aria-hidden
        className={cn(
          "absolute top-1.5 left-0 size-3 -translate-x-1/2 rounded-full border-2 border-background",
          isCurrent ? "bg-primary ring-4 ring-primary/20" : "bg-border",
        )}
      />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="font-heading text-lg font-semibold">{item.role}</h3>
        {isCurrent && <Badge>{t("present")}</Badge>}
      </div>
      <p className="mt-0.5 text-sm">
        <span className="font-medium text-primary">
          {item.company}
          {item.client ? ` → ${item.client}` : ""}
        </span>
        <span className="text-muted-foreground"> · </span>
        <span className="font-mono text-xs text-muted-foreground uppercase">
          {period}
        </span>
      </p>
      <p className="mt-2 max-w-3xl text-sm text-pretty text-muted-foreground">
        {item.summary}
      </p>

      {hasDetails && (
        <>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            {open ? t("collapse") : t("expand")}
            <ChevronDownIcon
              className={cn(
                "size-4 transition-transform duration-300",
                open && "rotate-180",
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-300 ease-in-out",
              open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              {item.highlights.length > 0 && (
                <ul className="max-w-3xl space-y-2 text-sm text-muted-foreground">
                  {item.highlights.map((highlight) => (
                    <li key={highlight.slice(0, 32)} className="flex gap-2">
                      <span aria-hidden className="mt-0.5 text-primary">
                        ▸
                      </span>
                      <span className="text-pretty">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.stack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 pb-1">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </li>
  );
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  const t = useTranslations("timeline");

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8"
    >
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <ol className="relative ml-1.5 space-y-12 border-l border-border sm:ml-2">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={Math.min(index * 0.06, 0.3)}>
            <TimelineEntry item={item} />
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
