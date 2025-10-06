import { HERO_TECH_IMAGE } from "@/data/const/hero-tech-image";
import Image from "next/image";

export default function HeroTechStack() {
  return (
    <div className="max-w-xl mx-auto flex items-center justify-center flex-wrap gap-4 sm:justify-between w-full">
      <div className="flex items-center justify-center flex-wrap gap-2">
        <div className="stacks flex items-center gap-1">
          {HERO_TECH_IMAGE.map((image, i) => (
            <figure key={i} className="rounded-md size-6">
              <Image
                src={image}
                alt={`${image}-icon`}
                className="block max-w-full object-cover"
                width={24}
                height={24}
              />
            </figure>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          Built for <b>your frontend app</b>
        </p>
      </div>
      <div className="flex items-center justify-center max-[355px]:flex-col gap-2">
        <figure className="size-6">
          <Image
            src="https://cdn.simpleicons.org/tailwindcss/06B6D4.svg"
            alt="tailwind-icon"
            className="block max-w-full aspect-square object-cover"
            width={24}
            height={24}
          />
        </figure>
        <p className="text-muted-foreground text-sm">
          Styled with <b>TailwindCSS</b>
        </p>
      </div>
    </div>
  );
}
