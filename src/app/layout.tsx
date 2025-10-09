import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/sections/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isone UI — Tailwind Components for Developers",
  description: "A collection of beautiful and reusable Tailwind CSS components to help you build modern interfaces faster.",
  openGraph: {
    title: "Isone UI — Tailwind Components for Developers",
    description: "A collection of beautiful and reusable Tailwind CSS components to help you build modern interfaces faster.",
    url: "https://isone-ui-demo.vercel.app",
    siteName: "Isone UI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isone UI — Tailwind Components for Developers",
    description: "Build modern UIs faster with Isone UI’s collection of ready-to-use Tailwind CSS components.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>

      <body className={`${spaceGrotesk.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
