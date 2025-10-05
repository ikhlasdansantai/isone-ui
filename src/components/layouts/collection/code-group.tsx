"use client";
import React, { ReactElement, useState } from "react";
import { FrameworksProps } from "@/data/enums/framework-props.enum";
import ComponentAction from "./component-action";
import { extractTextFromChildren } from "@/lib/extract-text-from-children";

export default function CodeGroup({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const [framework, setFramework] = useState<FrameworksProps>(
    FrameworksProps.HTML,
  );

  const variants: { framework: string; code: string; node: ReactElement }[] =
    [];

  function findPre(node: any) {
    if (!node) return;

    if (node.type === "pre") {
      const codeEl = node.props.children;
      const framework =
        codeEl?.props?.["data-language"] ??
        codeEl?.props?.className?.replace("language-", "") ??
        "txt";

      const rawCode = extractTextFromChildren(codeEl.props?.children).trim();

      if (rawCode) {
        variants.push({
          framework,
          code: rawCode,
          node,
        });
      }
    }

    if (node.props?.children) {
      React.Children.forEach(node.props.children, findPre);
    }
  }
  React.Children.forEach(children, findPre);

  const activeVariant = variants.find(
    (codeObj) => codeObj.framework === framework.toLowerCase(),
  );

  return (
    <ComponentAction
      componentPath={name}
      framework={framework}
      setFramework={setFramework}
    >
      {activeVariant?.node}
    </ComponentAction>
  );
}
