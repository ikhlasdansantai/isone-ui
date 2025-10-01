"use client";
import { FollowerPointerCard } from "@/components/ui/following-pointers";
import CtaAvatars from "@/components/layouts/cta/cta-avatars";
import CtaHeading from "@/components/layouts/cta/cta-heading";

export default function CtaHeader() {
  return (
    <FollowerPointerCard title={"Your Name"}>
      <div className="w-full relative">
        <CtaAvatars />
        <CtaHeading />
      </div>
    </FollowerPointerCard>
  );
}
