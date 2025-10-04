"use client";
import Image from "next/image";

interface MDXImageProps {
  src: string;
  alt: string;
}

export default function MDXImage(props: MDXImageProps) {
  const { src, alt } = props;

  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={600}
      className="aspect-video object-cover blur-sm transition-all duration-150"
      onLoadingComplete={(image) => image.classList.remove("blur-sm")}
    />
  );
}
