import HeroAction from "@/components/layouts/hero/hero-action";
import HeroHeading from "@/components/layouts/hero/hero-heading";
import HeroTechStack from "@/components/layouts/hero/hero-tech-stacks";

export default function HeroSection() {
  return (
  <section id="hero" className="space-y-8 max-w-7xl mx-auto pt-12 sm:py-38 min-[2000px]:!h-fit min-[2000px]:!py-38">
      <HeroHeading />
      <HeroTechStack />
      <HeroAction />
    </section>
  );
}
