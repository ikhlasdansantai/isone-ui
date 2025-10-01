"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link";

interface CustomNotFoundProps {
  textComponent?: React.ReactNode;
}

export default function CustomNotFound({ textComponent }: CustomNotFoundProps) {
  const router = useRouter();

  return (
    <section className="h-screen flex flex-col items-center justify-center max-w-3xl mx-auto text-center max-sm:p-4">
      <div
        className="titles relative z-10 space-y-6  max-w-lg
        "
      >
        <h2 className="font-semibold text-7xl sm:text-8xl tracking-wider">
          404
        </h2>
        {textComponent}
        <div className="actions space-x-4">
          <Button variant="outline" asChild>
            <Link href="/" onClick={() => router.back()}>
              &laquo; Go back
            </Link>
          </Button>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>

        {/* <Button variant="outline" className="block mx-auto cursor-pointer mt-6">
            See all <span className="text-muted-foreground">- it's free &raquo;</span>
          </Button> */}
      </div>

      <ShootingStars />
      <StarsBackground />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 w-full place-items-center">
        <div className="text-left space-y-1">
          <p className="text-primary">Collections &raquo;</p>
          <p className="text-sm text-muted-foreground">
            Check our available components
          </p>
        </div>
        <div className="text-left space-y-1">
          <p className="text-primary">Blogs &raquo;</p>
          <p className="text-sm text-muted-foreground">
            Read the latest post on our blog
          </p>
        </div>
        <div className="text-left space-y-1">
          <p className="text-primary">FAQs &raquo;</p>
          <p className="text-sm text-muted-foreground">
            Read the latest post on our blog
          </p>
        </div>
      </div>
    </section>
  );
}
