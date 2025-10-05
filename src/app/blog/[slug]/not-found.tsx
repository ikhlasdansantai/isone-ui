import CustomNotFound from "@/components/ui/custom-not-found";
export default function BlogNotFound() {
  return (
    <CustomNotFound
      textComponent={
        <p className="leading-loose sm:text-lg">
          Oops! The <b>blog</b> post you’re looking for, doesn’t exist or the
          URL might be incorrect.
        </p>
      }
    />
  );
}
