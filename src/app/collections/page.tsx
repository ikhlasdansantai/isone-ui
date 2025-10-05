import CollectionCards from "@/components/layouts/collection/collection-cards";
import Heading from "@/components/ui/Heading";

export default function Page() {
  return (
    <main className="px-4 max-w-6xl mx-auto pt-12 pb-30 sm:pt-38">
      <section>
        <div className="titles max-w-2xl">
          <Heading>
            Collections that we've built with TailwindCSS and Luv
          </Heading>
        </div>
        <CollectionCards />
      </section>
    </main>
  );
}
