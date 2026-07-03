import { Age } from "@/components/age";
import { Reveal } from "@/components/motion/reveal";
import type { Profile } from "@/data/types";
import type { Locale } from "@/i18n/routing";
import type { Resolved } from "@/repositories/content";

type PersonalData = Resolved<Profile>["personal"];

const LABELS = {
  pt: {
    file: "alem-do-codigo.ts",
    age: "idade",
    ageComment: "// nascido em 27/04/2002",
    base: "base",
    baseValue: "Piracicaba — SP, Brasil",
    mission: "missao",
    animes: "animes",
    animesComment: "// watchlist: sempre crescendo",
    fandoms: "fandoms",
    hobbies: "hobbies",
    music: "musica",
  },
  en: {
    file: "beyond-the-code.ts",
    age: "age",
    ageComment: "// born Apr 27, 2002",
    base: "base",
    baseValue: "Piracicaba — SP, Brazil",
    mission: "mission",
    animes: "animes",
    animesComment: "// watchlist: always growing",
    fandoms: "fandoms",
    hobbies: "hobbies",
    music: "music",
  },
} as const;

function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground">&quot;{children}&quot;</span>;
}

function StrList({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((item, index) => (
        <span key={item}>
          <Str>{item}</Str>
          {index < items.length - 1 && (
            <span className="text-muted-foreground">, </span>
          )}
        </span>
      ))}
    </>
  );
}

type AboutPersonalProps = {
  personal: PersonalData;
  locale: Locale;
};

export function AboutPersonal({ personal, locale }: AboutPersonalProps) {
  const l = LABELS[locale];
  const punct = "text-muted-foreground";
  const key = "text-primary";
  const comment = "text-muted-foreground/70 italic";

  return (
    <Reveal className="mt-12">
      <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/60">
        <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
          <span aria-hidden className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="size-2.5 rounded-full bg-[#28c840]/80" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {l.file}
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed sm:text-sm">
          <code>
            <span className={key}>const</span> gabriel{" "}
            <span className={punct}>= {"{"}</span>
            {"\n  "}
            <span className={key}>{l.age}</span>
            <span className={punct}>: </span>
            <span className="text-foreground">
              <Age birthDate={personal.birthDate} />
            </span>
            <span className={punct}>,</span>{" "}
            <span className={comment}>{l.ageComment}</span>
            {"\n  "}
            <span className={key}>{l.base}</span>
            <span className={punct}>: </span>
            <Str>{l.baseValue}</Str>
            <span className={punct}>,</span>
            {"\n  "}
            <span className={key}>{l.mission}</span>
            <span className={punct}>: </span>
            <Str>{personal.mission}</Str>
            <span className={punct}>,</span>
            {"\n  "}
            <span className={key}>{l.animes}</span>
            <span className={punct}>: [</span>
            <StrList items={personal.animes} />
            <span className={punct}>],</span>{" "}
            <span className={comment}>{l.animesComment}</span>
            {"\n  "}
            <span className={key}>{l.fandoms}</span>
            <span className={punct}>: [</span>
            <StrList items={personal.fandoms} />
            <span className={punct}>],</span>
            {"\n  "}
            <span className={key}>{l.hobbies}</span>
            <span className={punct}>: [</span>
            <StrList items={personal.hobbies} />
            <span className={punct}>],</span>
            {"\n  "}
            <span className={key}>{l.music}</span>
            <span className={punct}>: </span>
            <Str>{personal.music}</Str>
            <span className={punct}>,</span>
            {"\n"}
            <span className={punct}>{"}"};</span>
          </code>
        </pre>
      </div>
    </Reveal>
  );
}
