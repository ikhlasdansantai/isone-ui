import BlogCard from "@/components/ui/blog-card";
import { getPosts } from "@/lib/get-post";

export default function CtaBlogs() {
  const getPostAll = getPosts();
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 w-full mt-10 gap-10 gap-y-16">
      <BlogCard data={getPostAll} />
    </div>
  );
}
