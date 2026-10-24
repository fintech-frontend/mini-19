import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPostsByCategory } from "@/data/blog-data";
import { PostCard } from "@/components/blog/PostCard";
import HorizontalScroller from "@/components/ui/HorizontalScroller";

/** Лента последних материалов блога (все рубрики), как слайдер новостей на эталоне. */
const NEWS_LIMIT = 8;

export default function LatestNews() {
  const posts = getPostsByCategory().slice(0, NEWS_LIMIT);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-8">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Новости</h2>
        <Link
          href="/blog"
          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
        >
          Смотреть все <ArrowRight size={16} />
        </Link>
      </div>
      <HorizontalScroller className="gap-6 pb-2">
        {posts.map((post) => (
          <div key={`${post.category}/${post.slug}`} className="w-[260px] shrink-0 sm:w-[290px]">
            <PostCard post={post} />
          </div>
        ))}
      </HorizontalScroller>
    </section>
  );
}
