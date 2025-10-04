import MdxLayout from "@/app/mdx-layout";
import { MDXClientProviderProps } from "@/data/types/mdx-context-prodiver.interface";
import { MDXProvider } from "@mdx-js/react";

export default function MdxClientProvider({
  className,
  components,
  children,
}: MDXClientProviderProps) {
  return (
    <MdxLayout className={`${className} mx-auto`}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </MdxLayout>
  );
}
