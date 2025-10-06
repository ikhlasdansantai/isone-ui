import { BlogCardProps } from "../data/types/blog-card.interface";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import path from "path";

export async function getPost(slug: string) {
  const blogFilePath = path.join(
    process.cwd(),
    "src/data/posts",
    `${slug}.mdx`,
  );

  if (!fs.existsSync(blogFilePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(blogFilePath);
  const { data: metadata, content } = matter(fileContent);

  return {
    data: metadata,
    content,
  };
}

export function getPosts(): BlogCardProps[] {
  const blogsFilePath = path.join(process.cwd(), "src/data/posts");
  const fileNames = fs.readdirSync(blogsFilePath);
  const mdxFiles = fileNames.filter((fileName) => fileName.endsWith(".mdx"));

  const posts = mdxFiles.map((filename) => {
    const filePath = path.join(blogsFilePath, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    const slug = filename.replace(/\.mdx$/, "");

    const postData: BlogCardProps = {
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      author: data.author as string,
      thumbnail: data.thumbnail as string | undefined,
      slug: slug,
    };

    return postData;
  });

  return posts;
}
