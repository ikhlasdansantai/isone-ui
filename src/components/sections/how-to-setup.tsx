"use client";
import { useState } from "react";
import HowToCodePreview from "@/components/layouts/how-to-setup/how-to-code-preview";
import HowToSection from "@/components/layouts/how-to-setup/how-to-headers";
import { TECHS_SETUP } from "@/data/const/how-to-tech-setup";

export default function HowToSetup() {
  const [currTech, setCurrTech] = useState<string>(TECHS_SETUP[0].name);

  return (
    <section className="max-w-4xl mx-auto max-sm:py-20">
      <HowToSection currTech={currTech} setCurrTech={setCurrTech} />
      <HowToCodePreview currTech={currTech} />
    </section>
  );
}
