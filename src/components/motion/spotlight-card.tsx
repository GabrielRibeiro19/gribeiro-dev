"use client";

import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

/** Adds a mouse-follow radial highlight via the `.spotlight` CSS hook. */
export function SpotlightCard({ children, className }: SpotlightCardProps) {
  return (
    <div
      className={cn("spotlight h-full rounded-2xl", className)}
      onMouseMove={(event) => {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        target.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      }}
    >
      {children}
    </div>
  );
}
