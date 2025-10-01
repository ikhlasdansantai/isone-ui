import CtaHeader from "@/components/layouts/cta/CtaHeader";
import CtaBlogs from "@/components/layouts/cta/cta-blogs";

export default function Cta() {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-20 sm:py-20 relative overflow-hidden">
      <CtaHeader />
      <CtaBlogs />
    </section>
  );
}
