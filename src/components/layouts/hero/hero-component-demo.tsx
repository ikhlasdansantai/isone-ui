"use client";
import { motion } from "motion/react";
import { useState } from "react";

import HeroComponentPreview from "./hero-component-preview";
import HeroTabs from "./hero-tabs";
import HeroComponentSnippet from "./hero-component-snippet";

export default function HeroComponentdemo() {
  const [tab, setTab] = useState("preview");
  return (
    <div className="flex items-center justify-center max-w-xl mx-auto mt-10 transition duration-200 rounded-md">
      <div className="mx-auto space-y-4 w-full">
        <div className="inline-flex items-center justify-end gap-2 ml-auto w-full">
          <HeroTabs value={tab} setTab={setTab} />
        </div>

        <motion.div
          key={tab}
          initial={{ translateY: "16px", opacity: 0 }}
          animate={{ translateY: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="h-74 relative flex items-start justify-start mt-0 sm:w-xl"
        >
          {tab === "preview" ? (
            <HeroComponentPreview />
          ) : (
            <HeroComponentSnippet />
          )}
        </motion.div>
      </div>
    </div>
  );
}
