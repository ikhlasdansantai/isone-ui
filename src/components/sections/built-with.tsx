import BuiltWithHeading from "@/components/layouts/built-with/built-with-heading";
import BuiltWithCards from "@/components/layouts/built-with/built-with-cards";
export default function BuiltWithSection() {
  return (
    <section className="max-w-4xl mx-auto p-4">
      <BuiltWithHeading />
      <BuiltWithCards />
    </section>
  );
}
