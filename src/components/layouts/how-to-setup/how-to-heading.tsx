import Heading from "@/components/ui/Heading";
import { RedoIcon } from "lucide-react";
export default function HowToHeading({ currTech }: { currTech: string }) {
  return (
    <div className="titles max-w-xl mx-auto text-center">
      <Heading>
        Easiest way to{" "}
        <span className="inline-block relative h-fit p-0 text-muted-foreground">
          <span className="floating absolute -top-3 max-[355px]:left-0 max-sm:-right-8 sm:-right-15 text-xs text-foreground rotate-4 sm:rotate-8 text-nowrap max-sm:scale-85">
            Copy & Paste
            <RedoIcon className="rotate-120 translate-x-5 translate-y-2 hidden sm:block" />
          </span>
          setup
          <span className="block absolute border-5 border-primary rounded-md mx-auto top-1/2 left-0 right-0 w-full" />
        </span>{" "}
        into Your <span>{currTech}</span> Page
      </Heading>
      <p className="mt-4">
        Don't worry about emails, spam checking, integrations and form issues
        ever, code your front-end, add your unique formcarry URL, and we'll
        handle the rest. Within literally just 3 minutes, you can have a fully
        functional form for any platform
      </p>
    </div>
  );
}
