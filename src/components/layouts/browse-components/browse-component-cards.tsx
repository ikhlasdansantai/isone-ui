import CollectionCard from "@/components/layouts/collection/collection-card";
import { getCollections } from "@/lib/get-collections";

export default function BrowseComponentCards() {
  const collections = getCollections();
  return (
    <div className="grid min-[550px]:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-10">
      {collections.map(({ metadata, collectionCount }) => (
        <CollectionCard
          key={metadata.title}
          title={metadata.title}
          image={metadata.thumbnail}
          total={collectionCount}
        />
      ))}
    </div>
  );
}
