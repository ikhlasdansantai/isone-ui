import { BadgeCheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HeroComponentPreview() {
  return (
    <div className="cardo p-4 rounded-sm shadow-md cursor-pointer group max-w-lg mx-auto bg-card">
      <div className="header flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <figure>
            <Image
              src="/my-bini.jpg"
              alt="my-bini"
              className="size-16 rounded-md object-cover object-top block"
              width={100}
              height={100}
            />
          </figure>
          <div className="titles">
            <h2 className="font-semibold">Leeseo</h2>
            <p className="text-muted-foreground text-sm">Senior Developer</p>
          </div>
        </div>
        <Badge variant="outline" className="bg-transparent max-[350px]:hidden">
          <BadgeCheckIcon />
          Verified
        </Badge>
      </div>
      <p className="mt-5 leading-8 text-muted-foreground">
        나를 보면 눈 깜빡할 시간 조차도 아까울 걸 드디어 만나 반가워 LOVE 사이
        놓일 I
      </p>
    </div>
  );
}
