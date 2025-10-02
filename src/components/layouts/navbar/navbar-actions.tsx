import React from "react";
import HamburgerMenu from "./hamburger-menu";
import { GithubIcon } from "lucide-react";

export default function NavbarActions({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center gap-2 ml-auto">
      <HamburgerMenu active={active} setActive={setActive} />
      <GithubIcon className="rounded-md size-10 border shadow-sm text-muted-foreground p-1.5 bg-white hover:bg-transparent hover:text-white" />
    </div>
  );
}
