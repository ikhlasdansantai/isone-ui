import { BUILT_WITH_TECHS } from "@/data/const/built-with-data";
import BuiltWithCard from "./built-with-card";

export default function BuiltWithCards() {
  return (
    <div className="grid min-[550px]:grid-cols-2 md:grid-cols-4 mt-10 gap-5">
      <BuiltWithCard data={BUILT_WITH_TECHS} />
    </div>
  );
}
