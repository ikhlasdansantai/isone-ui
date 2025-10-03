import CustomNotFound from "@/components/ui/custom-not-found";

export default function GlobalNotFound() {
  return (
    <CustomNotFound
      textComponent={
        <p className="leading-loose sm:text-lg">
          It looks like you’ve followed a broken link or entered a URL that
          doesn't exist on our site 😢
        </p>
      }
    />
  );
}
