import BrowseComponentPage from "@/components/sections/browse-components";
import BuiltWith from "@/components/sections/built-with";
import Cta from "@/components/sections/cta";
import DarkModeSupport from "@/components/sections/dark-mode-support";
import Faq from "@/components/sections/faq";
import FeatureSection from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Setup from "@/components/sections/how-to-setup";

export default function Home() {
  return (
    <>
      <main id="main" className="px-4 pb-20">
        <Hero />
        <Setup />
        <FeatureSection />
        <BuiltWith />
        <DarkModeSupport />
        <Cta />
        <BrowseComponentPage />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
