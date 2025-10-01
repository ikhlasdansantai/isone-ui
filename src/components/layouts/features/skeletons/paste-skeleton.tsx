export default function PasteSkeleton() {
  return (
    <span className="border flex flex-col items-center justify-evenly w-full h-full p-4">
      {Array.from({ length: 2 }, (_, i) => (
        <div key={i} className="border p-4 w-full flex gap-4">
          <span className="block size-8 aspect-square rounded-full bg-muted-foregound border" />
          <div className="titles space-y-3 w-full">
            <span className="block w-20 rounded-sm h-3 bg-muted-foregound border" />
            <span className="block w-full rounded-sm h-3 bg-muted-foregound border" />
          </div>
        </div>
      ))}
    </span>
  );
}
