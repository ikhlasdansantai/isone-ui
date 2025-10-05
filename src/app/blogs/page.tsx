import BlogCard from "@/components/ui/blog-card";
import Heading from "@/components/ui/Heading";
import { getPosts } from "@/lib/get-post";

export default function BlogsPage() {
  const getPostAll = getPosts();

  return (
    <main className="px-4 max-w-6xl mx-auto pt-12 pb-30 sm:py-38">
      <section>
        <Heading className="text-2xl">Iqra Millea</Heading>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 w-full mt-20 gap-10 gap-y-16">
          <BlogCard data={getPostAll} />
        </div>
      </section>
    </main>
  );
}
