"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

interface ParallaxSectionProps extends React.HTMLAttributes<HTMLElement> {
  backgroundImageSrc?: string;
  backgroundOpacity?: number;
  backgroundClassName?: string;
  parallaxOffset?: number;
  backgroundComponent?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
}

export function ParallaxSection({
  backgroundImageSrc,
  backgroundOpacity = 0.6,
  backgroundClassName,
  parallaxOffset = 80,
  className,
  backgroundComponent,
  fullWidth = false,
  children,
  ...sectionProps
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const prefersReducedMotion = useReducedMotion();

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-parallaxOffset, parallaxOffset]
  );

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative flex min-h-svh md:snap-start items-center justify-center overflow-hidden py-16",
        "sm:py-24 md:py-32",
        !fullWidth && "px-4",
        className
      )}
      {...sectionProps}
    >
      {backgroundComponent}
      <div className="z-10 w-full">{children}</div>

      <motion.div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-cover bg-center",
          backgroundClassName
        )}
        style={{
          y,
          opacity: backgroundOpacity,
          backgroundImage: backgroundImageSrc
            ? `url(${backgroundImageSrc})`
            : undefined,
        }}
      />

      {!backgroundComponent && (
        <div className="pointer-events-none absolute inset-0 -z-20 bg-linear-to-b from-background/80 via-background to-background" />
      )}
    </section>
  );
}

