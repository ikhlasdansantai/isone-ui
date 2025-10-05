import { getPost } from "@/lib/get-post";
import MDXImage from "@/components/layouts/markdown/mdx-image";
import { formatDate } from "@/lib/format-date";
import MdxServerProvider from "@/components/layouts/markdown/mdx-server-provider";
import Breadcrumb from "@/components/ui/breadcrumb";

const PostComponents = {
  img: MDXImage,
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: metadata, content } = await getPost(slug);

  return (
    <main className="py-10 !max-w-4xl mx-auto px-4">
      <Breadcrumb data={[{ href: "/blogs", label: "blogs" }]} />
      <div className="blog__header border-b rounded-sm w-full mx-auto pb-6 text-center mt-10">
        <p className="text-muted-foreground">{formatDate(metadata.date)}</p>
        <h2 className="text-3xl lg:text-5xl text-center font-semibold text-balance leading-relaxed max-w-lg mx-auto mt-4 mb-8">
          {metadata.title}
        </h2>
        <b>
          <span className="text-muted-foreground">By </span>
          {metadata.author}
        </b>
      </div>
      <MdxServerProvider
        components={PostComponents}
        source={content}
        className="mx-auto mt-14 !max-w-3xl prose-p:leading-9 prose-p:mb-12 lg:prose-xl prose-headings:leading-relaxed prose-headings:text-foreground"
      />
    </main>
  );
}
