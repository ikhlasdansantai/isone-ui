import { Compare } from "./compare";

export default function ShowCompare() {
  return (
    <div className="w-full sm:w-3/4 h-120 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d] object-cover aspect-square object-center mx-auto md:mt-10">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
      >
        <Compare
          firstImage="/compare-light.png"
          secondImage="/compare-dark.png"
          firstImageClassName="object-cover object-center-top w-full"
          secondImageClassname="object-cover object-center-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}
