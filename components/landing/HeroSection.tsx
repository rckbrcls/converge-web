"use client";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Download, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
import { VantaTrunkBackground } from "./VantaTrunkBackground";
import { CommandDisplay } from "@/components/ui/command-display";
import { Button } from "../ui/button";

export function HeroSection() {
  const [chaos, setChaos] = useState(1.5);
  const installCommand = "curl -fsSL https://converge-focus.vercel.app/install | bash";

  const handleScrollDown = () => {
    if (typeof window === "undefined") return;

    const startY = window.scrollY;
    const targetY = startY + window.innerHeight;
    const distance = targetY - startY;
    const duration = 600;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section
      className={cn(
        "relative flex min-h-svh flex-col items-center justify-center gap-6 overflow-hidden px-4 py-16 text-center",
        "sm:gap-8 sm:py-24 md:py-32"
      )}
    >
      <VantaTrunkBackground chaos={chaos} />
      <motion.div
        className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
      >
        <motion.a
          href="https://github.com/rckbrcls/converge"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "secondary", size: "default" }),
            "inline-flex items-center gap-2"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Github className="size-4" />
          GitHub
        </motion.a>
      </motion.div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-4xl font-bold tracking-tight  sm:text-5xl md:text-6xl"
        >
          Converge
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl text-lg  sm:text-xl"
        >
          Pomodoro on Mac. Real focus.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className="max-w-2xl text-sm text-muted-foreground sm:text-base"
        >
          This app is fully open source.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="w-full max-w-2xl"
          onHoverStart={() => setChaos(0.2)}
          onHoverEnd={() => setChaos(1.5)}
        >
          <Button
            className="inline-flex cursor-pointer items-center gap-2"
            onClick={handleScrollDown}
          >
            Focus <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
