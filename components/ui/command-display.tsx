"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CommandDisplayProps {
  command: string;
  className?: string;
}

export function CommandDisplay({ command, className }: CommandDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy command:", error);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border bg-muted p-4 font-mono text-sm",
        className
      )}
    >
      <code className="flex-1 select-all text-foreground">{command}</code>
      <Button

        size="icon"
        onClick={handleCopy}
        className="shrink-0"
        aria-label="Copy command"
      >
        {copied ? (
          <Check className="size-4 text-green-600" />
        ) : (
          <Copy className="size-4" />
        )}
      </Button>
    </div>
  );
}
