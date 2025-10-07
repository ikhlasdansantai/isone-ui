"use client";
import { CopyIcon, StarIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FrameworkSelect } from "./framework-select";
import PreviewCollection from "./preview-collection";
import ResponsiveTabs from "./responsive-tabs";
import { ResponsiveTabProps } from "@/data/enums/responsive-tabs-props.enum";
import { ComponentActionProps } from "@/data/types/component-action.interface";

export default function ComponentAction({
  componentPath,
  framework,
  setFramework,
  children,
}: ComponentActionProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [tab, setTab] = useState("preview");
  const figureRef = useRef<HTMLPreElement>(null);
  const [responsiveTab, setResponsiveTab] = useState<ResponsiveTabProps>(
    ResponsiveTabProps.DESKTOP,
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(
      figureRef.current?.querySelector("code")?.innerText ?? "",
    );

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col items-start gap-4 w-full my-4 sm:my-4">
      <div className="flex items-center justify-between gap-2 mt-10 w-full">
        <div className="left flex items-center gap-2">
          <Button
            onClick={() => setTab("preview")}
            variant="ghost"
            className={`cursor-pointer
            ${tab === "preview" ? "bg-card shadow-md" : "!border-0 !bg-transparent text-muted-foreground"}`}
          >
            Preview
          </Button>
          <Button
            onClick={() => setTab("code")}
            variant="ghost"
            className={`cursor-pointer
            ${tab === "code" ? "bg-card shadow-md" : "!bg-transparent !border-0 text-muted-foreground"}`}
          >
            Code
          </Button>
          <FrameworkSelect state={framework} setState={setFramework} />
        </div>

        <div className="right flex items-center gap-2">
          <ResponsiveTabs
            activeTab={responsiveTab}
            setActiveTab={setResponsiveTab}
          />
        </div>
      </div>

      <motion.div
        key={tab}
        initial={{ translateY: "10px", opacity: 0 }}
        animate={{ translateY: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full relative overflow-hidden border"
      >
        {tab === "preview" ? (
          <PreviewCollection
            path={componentPath}
            responsiveTab={responsiveTab}
          />
        ) : (
          <>
            <Button
              size="sm"
              onClick={handleCopy}
              className="absolute right-3 top-3 text-xs rounded bg-muted hover:bg-muted/60 text-foreground hover:text-foreground/60 cursor-pointer border border-secondary"
            >
              {copied ? "Copied!" : <CopyIcon size={16} />}
            </Button>
            <figure
              ref={figureRef}
              className="rounded-sm overflow-y-auto !m-0 !p-0 h-100"
            >
              {children}
            </figure>
          </>
        )}
      </motion.div>
      {/* <p className="text-xs not-prose">
        creator:{" "}
        <Link href="/" className="underline">
          ikhlasdansantai
        </Link>
      </p> */}
    </div>
  );
}
