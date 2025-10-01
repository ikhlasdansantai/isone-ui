import BrowseComponentHeading from "@/components/layouts/browse-components/browse-component-heading";
import { Button } from "@/components/ui/button";
import CollectionCards from "@/components/collection-cards";
import Link from "next/link";

export default function BrowseComponentSection() {
  return (
    <section className="max-w-5xl mx-auto mt-20 sm:py-20">
      <BrowseComponentHeading />
      <CollectionCards />

      <Button
        variant="outline"
        className="block mx-auto cursor-pointer mt-10 w-fit"
        asChild
      >
        <Link href="/collections">
          See all{" "}
          <span className="text-muted-foreground">- it's free &raquo;</span>
        </Link>
      </Button>
    </section>
  );
}
