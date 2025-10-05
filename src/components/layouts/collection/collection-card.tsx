import { CollectionCardProps } from "@/data/types/collection-card.interface";
import Image from "next/image";
import Link from "next/link";

export default function CollectionCard({
  image,
  title,
  total,
}: CollectionCardProps) {
  return (
    <Link
      href={`/collection/${title}`}
      className="transition duration-150 hover:-translate-y-2 w-full"
      prefetch
    >
      <figure className="bg-[#e2e2f5] dark:bg-[#c4c2ff] shadow-xs aspect-video overflow-hidden">
        <Image
          src={image}
          alt={`${title}-placeholder`}
          className="block max-w-full object-cover aspect-video"
          width={600}
          height={400}
        />
      </figure>

      <div className="titles pt-4">
        <h2 className="font-semibold mt-4">{title}</h2>
        <p className="text-muted-foreground">{total} components</p>
      </div>
    </Link>
  );
}
