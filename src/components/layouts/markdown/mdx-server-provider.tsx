import { MDXServerProviderProps } from "@/data/types/mdx-context-prodiver.interface";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import MdxLayout from "./mdx-layout";

export default async function MdxServerProvider({
  className,
  components,
  source,
}: MDXServerProviderProps) {
  return (
    <MdxLayout className={`${className} mx-auto`}>
      <MDXRemote
        components={components}
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, { theme: "tokyo-night" }]],
          },
        }}
      />
    </MdxLayout>
  );
}
