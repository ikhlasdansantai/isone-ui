import HamburgerMenu from "./hamburger-menu";
import { GithubIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
      <ThemeToggle />
      <GithubIcon className="rounded-md size-10 p-2.5 border text-muted-foreground bg-transparent hover:!bg-transparent shadow-none dark:hover:opacity-65 cursor-pointer" />
    </div>
  );
}
