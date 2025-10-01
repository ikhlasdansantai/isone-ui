import FeatureHeader from "@/components/layouts/features/feature-heading";
import FeatureCards from "@/components/layouts/features/feature-cards";

export default function FeatureSection() {
  return (
    <section className="max-w-4xl mx-auto p-4 mt-20 sm:mt-40">
      <FeatureHeader />
      <FeatureCards />
    </section>
  );
}
