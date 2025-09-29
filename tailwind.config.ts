import typography from "@tailwindcss/typography";
type ThemeResolver = (
  path: string,
  defaultValue?: string | number,
) => string | number | undefined;

export default {
  theme: {
    extend: {
      typography: ({ theme }: { theme: ThemeResolver }) => ({
        DEFAULT: {
          css: {
            h1: {
              color: "var(--foreground)",
              marginBottom: "em(26, 30)",
            },
            strong: {
              color: "var(--foreground)",
            },
            p: {
              color: "var(--muted-foreground)",
            },
            pre: {
              marginTop: "0",
              height: "100%",
            },
            "h5:first-of-type": {
              marginTop: "0 !important",
            },
            "p:has(strong)": {
              margin: "0 !important",
            },
            "a:hover": {
              display: "inline-block",
              opacity: "0.6",
            },
            img: {
              width: "100%",
              height: "100%",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
