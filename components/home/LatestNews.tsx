import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPostsByCategory } from "@/data/blog-data";
import { PostCard } from "@/components/blog/PostCard";

export default function LatestNews() {
  const posts = getPostsByCategory("novosti").slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-8">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Последние новости
        </h2>
        <Link
          href="/novosti"
          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
        >
          Смотреть все <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
