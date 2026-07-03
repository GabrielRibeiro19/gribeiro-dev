"use client";

import {
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Slide direction. */
  from?: "bottom" | "left" | "right" | "none";
};

const OFFSETS = {
  bottom: { x: 0, y: 20 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
  none: { x: 0, y: 0 },
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  from = "bottom",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = OFFSETS[from];

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={cn(className)}
        initial={{ opacity: 0, x: offset.x, y: offset.y, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-64px" }}
        transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
