export default function BuiltWithHeading() {
  return (
    <div className="relative text-center">
      <span className="-z-1 absolute top-1/2 block h-1 rounded-sm w-full bg-muted" />
      <span className="inline-block bg-background px-4 text-sm text-muted-foreground">
        isoneui is built with
      </span>
    </div>
  );
}
