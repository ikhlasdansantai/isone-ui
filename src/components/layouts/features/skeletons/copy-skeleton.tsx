export default function CopySkeleton() {
  return (
    <>
      <figure className="flex items-center w-1/2 ml-auto gap-2">
        <span className="relative block h-2 w-full rounded-md bg-muted-foreground/40" />
        <span className="relative block w-full rounded-md text-xs text-center text-muted-foreground font-medium">
          copy
        </span>
        <span className="relative block h-2 w-full rounded-md bg-muted-foreground/40" />
      </figure>
      <div className="border p-4 mt-6 w-full flex gap-4">
        <span className="block size-8 aspect-square rounded-full bg-muted-foregound border" />
        <div className="titles space-y-3 w-full">
          <span className="block w-20 rounded-sm h-3 bg-muted-foregound border" />
          <span className="block w-full rounded-sm h-3 bg-muted-foregound border" />
        </div>
      </div>
    </>
  );
}
