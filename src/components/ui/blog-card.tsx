import { BlogCardProps } from "@/data/types/blog-card.interface";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ data }: { data: BlogCardProps[] }) {
  return (
    <>
      {data.map(({ title, description, thumbnail, slug }) => (
        <Link
          href={`/blog/${slug}`}
          key={title}
          className="w-full cursor-pointer hover:-translate-y-2 transition-transform duration-150"
        >
          <figure className="block bg-primary rounded-md overflow-hidden">
            <Image
              src={thumbnail || `https://avatar.vercel.sh/${title}`}
              alt="blog-thumb"
              width={400}
              height={400}
              className="block object-cover max-w-full aspect-video"
            />
          </figure>
          <div className="title mt-4">
            <b className="font-semibold text-xl leading-relaxed line-clamp-2 overflow-ellipsis max-h-16 h-fit">
              {title}
            </b>
            <p className="mt-2.5 text-muted-foreground line-clamp-2 overflow-ellipsis border-l border-primary pl-2.5">
              {description}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}
