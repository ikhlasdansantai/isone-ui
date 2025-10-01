import { motion } from "motion/react";
import RenderHtmlPreview from "@/markdown/home/code-example-html.mdx";
import RenderReactPreview from "@/markdown/home/code-example-react.mdx";
import RenderSveltePreview from "@/markdown/home/code-example-svelte.mdx";
import RenderVuePreview from "@/markdown/home/code-example-vue.mdx";
import MdxServerProvider from "../markdown/mdx-client-provider";
import { baseMDXComponents } from "@/data/const/base-mdx-component";

export default function HowToCodePreview({ currTech }: { currTech: string }) {
  return (
    <motion.div
      key={currTech}
      initial={{ translateY: "16px", opacity: 0.5 }}
      animate={{ translateY: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-8 h-fit"
    >
      <MdxServerProvider components={baseMDXComponents}>
        {currTech.toLowerCase() === "html" && <RenderHtmlPreview />}
        {currTech.toLowerCase() === "react" && <RenderReactPreview />}
        {currTech.toLowerCase() === "vue" && <RenderVuePreview />}
        {currTech.toLowerCase() === "svelte" && <RenderSveltePreview />}
      </MdxServerProvider>
    </motion.div>
  );
}
