import { Button } from "@/components/ui/button";
import { NAVBAR_ITEMS } from "@/data/const/navbar-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem() {
  const currentPath = usePathname();
  return (
    <>
      {NAVBAR_ITEMS.map(({ href, label }) => (
        <li key={label}>
          <Button
            variant="link"
            size="default"
            className={`cursor-pointer sm:text-lg p-0 m-0 ${currentPath === href ? "text-foreground" : "text-muted-foreground"}`}
            aria-label={`${label} page`}
            asChild
          >
            <Link href={href} prefetch>
              {label}
            </Link>
          </Button>
        </li>
      ))}
    </>
  );
}
