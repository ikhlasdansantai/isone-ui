import DarkModeHeading from "@/components/layouts/dark-mode/dark-mode-heading";
import ShowCompare from "@/components/ui/show-compare";

export default function DarkModeSupport() {
  return (
    <section className="max-w-5xl mx-auto p-4 mt-20 sm:mt-40">
      <DarkModeHeading />
      <ShowCompare />
    </section>
  );
}
