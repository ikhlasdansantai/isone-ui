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

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        const textToCopy =
          figureRef.current?.querySelector("code")?.innerText ?? "";
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } else {
        const textToCopy =
          figureRef.current?.querySelector("code")?.innerText ?? "";
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <figure ref={figureRef} className="no-margin relative">
      <Button
        size="sm"
        onClick={handleCopy}
        className="absolute right-3 top-3 text-xs rounded bg-muted hover:bg-muted/60 text-foreground hover:text-foreground/60 cursor-pointer"
      >
        {copied ? "Copied!" : <CopyIcon size={16} />}
      </Button>
      {children}
    </figure>
  );
}
