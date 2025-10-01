import { MDXComponents } from "mdx/types";
export interface MDXContextProviderProps {
  components: MDXComponents;
  className?: string;
}
export interface MDXClientProviderProps extends MDXContextProviderProps {
  children: React.ReactNode;
}
export interface MDXServerProviderProps extends MDXContextProviderProps {
  source: string;
}
