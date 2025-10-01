import { FeatureCardProps } from "@/data/types/feature-card.interface";

export default function FeatureCard({
  skeletonComponentClassName,
  skeletonComponent,
  title,
}: FeatureCardProps) {
  return (
    <div className="bg-card pb-8 rounded-md p-4">
      <div
        className={`h-54 flex flex-col items-center justify-center ${skeletonComponentClassName}`}
      >
        {skeletonComponent}
      </div>

      <div className="titles px-4">
        <b className="block mt-4 text-lg">{title}</b>
      </div>
    </div>
  );
}
