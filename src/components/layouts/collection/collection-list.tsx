import type { MDXComponents } from "mdx/types";
import CodeGroup from "./code-group";
import ComponentAction from "./component-action";
import { CollectionListProps } from "@/data/types/collection-list.interface";
import MdxServerProvider from "@/components/layouts/markdown/mdx-server-provider";

const components: MDXComponents = {
  ComponentAction,
  CodeGroup,
};

export default function CollectionList({
  title,
  author,
  slug,
  content,
}: CollectionListProps) {
  return (
    <MdxServerProvider
      components={components}
      source={content}
      className="w-full max-w-5xl"
    />
  );
}
