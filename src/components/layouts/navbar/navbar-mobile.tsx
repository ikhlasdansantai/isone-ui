import NavbarItem from "./navbar-item";

export default function MobileNav({ active }: { active: boolean }) {
  return (
    <div
      className={`${active ? "visible h-auto py-4 opacity-100" : "invisible h-0 opacity-0"} col-start-1 col-end-3 origin-bottom transition-all duration-400 sm:hidden linear`}
    >
      <ul className="text-muted-foreground flex flex-col items-start gap-y-8 text-lg sm:hidden">
        <NavbarItem />
      </ul>
    </div>
  );
}
