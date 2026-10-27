import Link from "next/link";
import { getPostHref } from "@/data/blog-data";
import { BlogPost } from "@/types/blog";

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const href = getPostHref(post);

  return (
    <article className="flex flex-col">
      <Link
        href={href}
        className="relative mb-4 block aspect-[227/165] w-full overflow-hidden rounded-2xl bg-neutral-100"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <h3 className="mb-2 text-lg font-semibold leading-snug text-neutral-900">
        <Link href={href} className="hover:text-blue-600">
          {post.title}
        </Link>
      </h3>

      <p className="mb-3 line-clamp-2 text-sm text-neutral-500">{post.excerpt}</p>

      <time className="mt-auto text-sm text-neutral-400">{post.date}</time>
    </article>
  );
}