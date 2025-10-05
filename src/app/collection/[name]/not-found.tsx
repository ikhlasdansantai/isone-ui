import CustomNotFound from "@/components/ui/custom-not-found";

export default function NotFound() {
  return (
    <CustomNotFound
      textComponent={
        <p className="leading-loose sm:text-lg">
          No worries! The <b>collection</b> you’re looking for might still be in
          progress, or maybe you’d like to add one 👀
        </p>
      }
    />
  );
}
