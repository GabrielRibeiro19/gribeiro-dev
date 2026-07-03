import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl sm:mb-16", className)}>
      <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
        <span aria-hidden>{"// "}</span>
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
