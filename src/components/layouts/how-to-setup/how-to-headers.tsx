"use client";
import { HowToActionsProps } from "@/data/types/how-to-actions.interface";
import HowToActions from "./how-to-actions";
import HowToHeading from "./how-to-heading";

export default function HowToSection({
  currTech,
  setCurrTech,
}: HowToActionsProps) {
  return (
    <>
      <HowToHeading currTech={currTech} />
      <HowToActions currTech={currTech} setCurrTech={setCurrTech} />
    </>
  );
}
