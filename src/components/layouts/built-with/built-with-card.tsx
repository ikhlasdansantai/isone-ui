import type { BuiltWithProps } from "@/data/types/built-with-section.interface";

export default function BuiltWithCard({ data }: { data: BuiltWithProps[] }) {
  return (
    <>
      {data.map(({ name, image, version }) => (
        <div key={name} className="bg-card p-4 rounded-md">
          <figure className="size-7">
            <img src={image} alt="" className="block max-w-full object-cover" />
          </figure>

          <div className="mt-6">
            <p>{name}</p>
            <p className="text-sm text-muted-foreground mt-1 tracking-widest">
              {version}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
