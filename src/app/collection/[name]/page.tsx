import fs from "node:fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import path from "node:path";
import CollectionList from "@/components/layouts/collection/collection-list";
import { BREADCRUMB_COLLECTION } from "@/data/const/breadcrumb-data";
import Breadcrumb from "@/components/ui/breadcrumb";

export async function generateStaticParams() {
  return [{ name: "cards" }, { name: "pricing" }];
}

export default async function CollectionsPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const snippetPath = path.join(
    process.cwd(),
    `src/data/snippets/${name}.mdx`,
  );

  if (!fs.existsSync(snippetPath)) {
    notFound();
  }

  const snippetFileContent = fs.readFileSync(snippetPath);
  const { data: metadata, content } = matter(snippetFileContent);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Breadcrumb data={BREADCRUMB_COLLECTION} />

      <h2 className="text-4xl font-bold mt-10">{name}</h2>
      <p className="leading-[1.7] mt-2.5 text-muted-foreground">
        Selection of responsive {name} components for Tailwind CSS v4
        applications.
      </p>

      <section>
        <CollectionList
          author={"ngasal"}
          title={"Cardooo"}
          slug={"asdas"}
          content={content}
        />
      </section>
    </main>
  );
}
