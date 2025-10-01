import FeatureCard from "./feature-card";
import CopySkeleton from "./skeletons/copy-skeleton";
import SearchSkeleton from "./skeletons/search-skeleton";
import PasteSkeleton from "./skeletons/paste-skeleton";

export default function FeatureCards() {
  return (
    <div className="grid min-[523px]:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      <FeatureCard
        skeletonComponentClassName="pt-10"
        skeletonComponent={<SearchSkeleton />}
        title="Find A component"
      />
      <FeatureCard
        skeletonComponent={<CopySkeleton />}
        title="Copy Component"
      />
      <FeatureCard
        skeletonComponent={<PasteSkeleton />}
        title="Paste it and that's it"
      />
    </div>
  );
}
