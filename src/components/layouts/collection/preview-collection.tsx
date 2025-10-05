"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function PreviewCollection({
  path,
  responsiveTab = "desktop",
}: {
  path: string;
  responsiveTab?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [iframeWidth, setIframeWidth] = useState(1280);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [componentHtml, setComponentHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const collectionName = usePathname().replace("/collection/", "");

  useEffect(() => {
    async function fetchHtml() {
      try {
        setLoading(true);
        const htmlFile = await fetch(
          `/components/${collectionName}/${path}.html`,
        );
        const data = await htmlFile.text();
        setComponentHtml(data);
        console.log({ data });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHtml();
  }, []);

  // detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      requestAnimationFrame(() => {
        for (const entry of entries) {
          setContainerWidth(entry.contentRect.width);
          setContainerHeight(entry.contentRect.height);
        }
      });
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // scaling calculation
  const scale =
    containerWidth > 0 ? Math.min((containerWidth - 0) / iframeWidth, 1) : 1;

  const htmlContent = useMemo(() => {
    if (!componentHtml) return "";
    return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
          </head>
          <body class="p-4 font-sans">
          ${componentHtml}
          </body>
        </html>
      `;
  }, [componentHtml]);

  useEffect(() => {
    const widths: Record<string, number> = {
      desktop: 1280,
      laptop: 1024,
      tablet: 720,
      mobile: 340,
    };
    setIframeWidth(widths[responsiveTab.toLowerCase()] ?? 340);
  }, [responsiveTab]);

  return (
    <>
      <div
        ref={containerRef}
        className="w-full rounded-md flex  overflow-hidden relative"
      >
        <div className="overflow-hidden rounded bg-transparent flex justify-center h-120 w-full transition duration-300">
          <div
            style={{
              transform: isMobile ? "none" : `scale(${scale})`,
              transformOrigin: "top",
              width: isMobile ? "100%" : `${iframeWidth}px`,
              height: isMobile
                ? `${containerHeight}px`
                : `${containerHeight / scale}px`,
              transition: "all 0.5s",
            }}
          >
            {componentHtml ? (
              <iframe
                title={`Preview ${collectionName} - ${responsiveTab}`}
                srcDoc={htmlContent}
                style={{
                  width: isMobile ? "100%" : iframeWidth,
                  height: isMobile
                    ? `${containerHeight}px`
                    : `${containerHeight / scale}px`,
                  backgroundColor: "white",
                  transition: "all 0.5s",
                }}
                className="border-0 block"
                loading="lazy"
              />
            ) : (
              <ComponentFrameLoading
                isMobile={isMobile}
                iframeWidth={iframeWidth}
                containerHeight={containerHeight}
                scale={scale}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function ComponentFrameLoading({
  isMobile,
  iframeWidth,
  containerHeight,
  scale,
}: any) {
  return (
    <div
      className="flex items-center justify-center flex-wrap gap-4"
      style={{
        width: isMobile ? "100%" : iframeWidth,
        height: isMobile
          ? `${containerHeight}px`
          : `${containerHeight / scale}px`,
      }}
    >
      <span className="block animate-pulse bg-slate-400 w-52 h-52 rounded-md" />
      <span className="block animate-pulse bg-slate-400 w-52 h-52 rounded-md" />
      <span className="block animate-pulse bg-slate-400 w-52 h-52 rounded-md" />
    </div>
  );
}
