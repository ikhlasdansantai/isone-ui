"use client";
import FigmaCursor from "@/components/figma-cursor";
import { motion } from "motion/react";

export default function CtaHeading() {
  return (
    <div className="titles max-w-lg mx-auto text-center mt-4">
      <h2 className="text-balance mx-auto font-semibold max-[350px]:text-xl max-sm:text-3xl sm:text-5xl leading-normal">
        Be part of this open source journey
      </h2>
      <p className="mt-4 text-muted-foreground">
        Read the guide below and start contributing today.
      </p>
      <motion.div
        animate={{
          y: ["-8rem", "-10rem", "-9.5rem", "-9.5rem", "-8rem"],
          x: ["14rem", "12rem", "11.5rem", "13.5rem", "14rem"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
        className="hidden md:block"
      >
        <FigmaCursor username="ikhlasdansantai" />
      </motion.div>
      {/* animasi kiri */}
      <motion.div
        animate={{
          y: ["-7rem", "-8rem", "-9rem", "-7rem"],
          x: ["-20rem", "-23rem", "-22.5rem", "-20rem"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
        className="hidden md:block"
      >
        <FigmaCursor username="Erisabesu" />
      </motion.div>
    </div>
  );
}
