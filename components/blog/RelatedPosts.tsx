import Link from "next/link";
import { getPostHref } from "@/data/blog-data";
import { BlogPost } from "@/types/blog";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        Другие новости:
      </h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => {
          const href = getPostHref(post);
          return (
            <article key={post.slug} className="flex flex-col">
              <Link
                href={href}
                className="relative mb-3 block aspect-[227/165] w-full overflow-hidden rounded-2xl bg-neutral-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover" />
              </Link>
              <h3 className="mb-1 text-sm font-semibold leading-snug text-neutral-900">
                <Link href={href} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h3>
              <p className="mb-2 line-clamp-2 text-xs text-neutral-500">{post.excerpt}</p>
              <time className="mt-auto text-xs text-neutral-400">{post.date}</time>
            </article>
          );
        })}
      </div>
    </section>
  );
}
