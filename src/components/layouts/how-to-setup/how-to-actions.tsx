import { TECHS_SETUP } from "@/data/const/how-to-tech-setup";
import { HowToActionsProps } from "@/data/types/how-to-actions.interface";
import Image from "next/image";

export default function HowToActions({
  currTech,
  setCurrTech,
}: HowToActionsProps) {
  return (
    <div className="actions flex justify-center items-center gap-1 bg-muted mt-10 w-fit mx-auto p-2 rounded-full overflow-hidden">
      {TECHS_SETUP.map(({ name, image }) => (
        <div
          key={name}
          onClick={() => setCurrTech(name)}
          className={`flex items-center gap-1.5 p-2 px-3 rounded-full hover:shadow-md hover:shadow-foreground ${currTech === name ? "bg-foreground" : "bg-transparent cursor-pointer transition-colors duration-150"}`}
        >
          <figure className="max-[350px]:size-2.5 size-3.5 sm:size-5">
            <Image
              src={image}
              alt={`${name}-icon`}
              className="block max-w-full object-cover"
              width={24}
              height={24}
            />
          </figure>
          <figcaption
            className={`text-xs sm:text-base ${currTech === name ? "text-background" : "text-muted-foreground"}`}
          >
            {name}
          </figcaption>
        </div>
      ))}
    </div>
  );
}
