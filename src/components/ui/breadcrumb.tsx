"use client";

import { HouseIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbDataProps {
  href: string;
  label: string;
}

export default function Breadcrumb({ data }: { data: BreadcrumbDataProps[] }) {
  const getFullPath = usePathname();
  const currentPath = getFullPath.split("/")[getFullPath.split("/").length - 1];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm">
        <li className="flex items-center gap-1.5">
          <Link href="/" aria-label="Home">
            <HouseIcon className="size-4.5" />
          </Link>
          <p className="text-muted-foreground mx-1.5">/</p>
        </li>
        {data.map(({ label, href }) => (
          <li key={label} className="flex items-center gap-1.5">
            <Link href={`${href}`} aria-label={label}>
              {label}
            </Link>
            <p className="text-muted-foreground mx-1.5">/</p>
          </li>
        ))}
        <li className="text-muted-foreground">{currentPath}</li>
      </ol>
    </nav>
  );
}
