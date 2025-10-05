"use client";
import DesktopNav from "@/components/layouts/navbar/navbar-desktop";
import MobileNav from "@/components/layouts/navbar/navbar-mobile";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SHOW_NAVBAR_AT = ["/", "/collections", "/blogs"];

export default function Navbar() {
  const [active, setActive] = useState<boolean>(false);
  const currentPathname = usePathname();

  useEffect(() => {
    setActive(false);
  }, [currentPathname]);

  if (!SHOW_NAVBAR_AT.includes(currentPathname)) {
    return null;
  }

  return (
    <header
      id="header"
      className="fixed right-4 left-4 z-100 mx-auto max-w-2xl max-sm:bottom-4 sm:top-4 md:block"
    >
      <nav className="p-4 rounded-lg overflow-hidden border">
        <MobileNav active={active} />
        <DesktopNav active={active} setActive={setActive} />
      </nav>
    </header>
  );
}
