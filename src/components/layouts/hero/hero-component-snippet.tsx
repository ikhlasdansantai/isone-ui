import MdxLayout from "@/app/mdx-layout";
import React from "react";
import MdxClientProvider from "@/components/layouts/markdown/mdx-client-provider";
import CodeExample from "./HeroCodeExample.mdx";
import { baseMDXComponents } from "@/data/const/base-mdx-component";

export default function HeroComponentSnippet() {
  return (
    <MdxLayout className="overflow-hidden shadow-md">
      <MdxClientProvider components={baseMDXComponents}>
        <CodeExample />
      </MdxClientProvider>
    </MdxLayout>
  );
}
