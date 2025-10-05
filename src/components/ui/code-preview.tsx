"use client";

import { CopyIcon } from "lucide-react";
import type React from "react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function CodePreview({
  children,
}: {
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState<boolean>(false);
  const figureRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      figureRef.current?.querySelector("code")?.innerText ?? "",
    );

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <figure ref={figureRef} className="no-margin relative">
      <Button
        size="sm"
        onClick={handleCopy}
        className="absolute right-6 top-6 text-xs rounded bg-muted hover:bg-muted/60 text-foreground hover:text-foreground/60 cursor-pointer"
      >
        {copied ? "Copied!" : <CopyIcon size={16} />}
      </Button>
      {children}
    </figure>
  );
}
