import Image from "next/image";
import NavbarItem from "./navbar-item";
import NavbarActions from "./navbar-actions";

export default function DesktopNav({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      id="desktop-nav"
      className="relative z-10 grid grid-cols-2 items-center justify-between sm:grid-cols-[1fr_2fr_1fr] w-full"
    >
      <figure>
        <Image
          src="https://avatar.vercel.sh/rauchg?rounded=16"
          alt="vercel-avatar"
          width={38}
          height={38}
        />
      </figure>
      <ul className="text-muted-foreground items-center space-x-6 justify-self-center text-lg max-sm:hidden sm:flex">
        <NavbarItem />
      </ul>
      <NavbarActions active={active} setActive={setActive} />
    </div>
  );
}
