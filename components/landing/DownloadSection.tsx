"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { CommandDisplay } from "@/components/ui/command-display";
import { ParallaxSection } from "./ParallaxSection";

export function DownloadSection() {
  const installCommand = "curl -fsSL https://converge-focus.vercel.app/install | bash";

  return (
    <ParallaxSection
      id="download"
      data-section="download"
      backgroundClassName="bg-gradient-to-t from-primary/10 via-background to-background"
      parallaxOffset={0}
      backgroundOpacity={1}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={cn(
          "mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
        )}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Download Converge
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mb-8 text-muted-foreground"
        >
          Install Converge on macOS using the command below. The script will automatically download and install the latest version.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="flex w-full max-w-2xl flex-col gap-4"
        >
          <CommandDisplay command={installCommand} />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center w-min mx-auto"
          >
            <Button asChild size="lg" variant="outline">
              <a
                href="https://github.com/rckbrcls/converge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.footer
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="mt-16 text-sm text-muted-foreground"
        >
          Made by{" "}
          <a
            href="https://www.polterware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-foreground"
          >
            polterware
          </a>
          {" · "}
          <a
            href="https://github.com/rckbrcls/converge"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </motion.footer>
      </motion.div>
    </ParallaxSection>
  );
}
