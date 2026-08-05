import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
        Стройоптторг — товары для строительства и ремонта
      </h1>
      <p className="max-w-xl text-neutral-500">
        Доступная цена, скидки постоянным покупателям и быстрая доставка. Загляните в наш блог —
        там новости компании, обзоры товаров и полезные советы.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Перейти в блог
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
