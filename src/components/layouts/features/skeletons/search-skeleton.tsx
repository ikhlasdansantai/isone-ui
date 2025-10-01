import { SearchIcon } from "lucide-react";

export default function SearchSkeleton() {
  return (
    <figure className="flex items-center justify-center w-full mx-auto border p-3 gap-4">
      <SearchIcon className="size-6" />
      <span className="relative block h-4 w-full rounded-sm border" />
    </figure>
  );
}
