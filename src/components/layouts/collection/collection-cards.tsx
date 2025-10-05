import { getCollections } from "@/lib/get-collections";
import CollectionCard from "./collection-card";
import { ClockArrowDownIcon } from "lucide-react";

export default function CollectionCards() {
  const collections = getCollections();

  return (
    <div className="grid min-[550px]:grid-cols-2 md:grid-cols-3 gap-10 gap-y-20 w-full mt-20">
      {collections.map(({ metadata, collectionCount }) => (
        <CollectionCard
          key={metadata.title}
          title={metadata.title}
          image={metadata.thumbnail}
          total={collectionCount}
        />
      ))}

      <div className="aspect-video p-4 border rounded-md">
        <span className="inline-flex items-center justify-center border-dashed border-2 relative h-full w-full aspect-video">
          <ClockArrowDownIcon className="absolute left-0 top-0 bottom-0 right-0 size-7 m-auto text-muted-foreground" />
        </span>
      </div>
    </div>
  );
}
