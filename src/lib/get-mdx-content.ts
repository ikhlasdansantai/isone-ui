import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export async function getMdxContent(filePath: string) {
  const absPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(absPath)) {
    return null;
  }

  const raw = fs.readFileSync(absPath, "utf-8");
  const { content } = matter(raw);

  const mdx = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, { theme: "tokyo-night" }]],
      },
    },
  });

  return mdx;
}
