"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ParallaxSection } from "./ParallaxSection";

const screenshots = [
    {
        src: "/assets/pomodoro.png",
        alt: "Pomodoro timer view",
        title: "Pomodoro",
        description: "Focus timer with clear work and break phases.",
    },
    {
        src: "/assets/stats.png",
        alt: "Statistics view",
        title: "Statistics",
        description: "Charts that show how your focus evolves over time.",
    },
    {
        src: "/assets/history.png",
        alt: "History view",
        title: "History",
        description: "Detailed list of previous sessions to keep track of progress.",
    },
] as const;

export function ScreenshotsSection() {
    return (
        <ParallaxSection
            id="screenshots"
            data-section="screenshots"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={cn("mx-auto w-full max-w-5xl")}
            >
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-4 text-center font-serif text-3xl font-bold tracking-tight sm:text-4xl"
                >
                    See Converge in action
                </motion.h2>
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground"
                >
                    A quick look at the main screens of the app: focus timer, statistics
                    and history.
                </motion.p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {screenshots.map((screenshot, index) => (
                        <motion.div
                            key={screenshot.title}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.2 + index * 0.1,
                            }}
                            className="overflow-hidden rounded-xl border bg-muted/30"
                        >
                            <div className="relative">
                                <Image
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    width={1200}
                                    height={800}
                                    className="h-auto w-full border-b bg-background object-cover"
                                    priority={index === 0}
                                />
                            </div>
                            <div className="space-y-1 p-4">
                                <h3 className="text-sm font-semibold">
                                    {screenshot.title}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {screenshot.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </ParallaxSection>
    );
}
