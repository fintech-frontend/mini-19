import { Star } from "lucide-react";

/**
 * Заглушка отзывов: реальных отзывов нет ни у одного товара (их неоткуда взять до
 * появления бэкенда), поэтому блок всегда показывает пустое состояние с нулевым
 * рейтингом — но присутствует на каждой странице товара, как на эталонном сайте.
 */
export default function ProductReviews({ title }: { title: string }) {
  return (
    <div className="mt-12 border-t border-neutral-200 pt-10">
      <h2 className="mb-4 text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">
        Отзывы о товаре «{title}»
      </h2>
      <p className="mb-3 text-sm text-neutral-500">Отзывов на данный товар пока нет</p>

      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center gap-0.5" role="img" aria-label="Рейтинг 0 из 5">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={16} className="text-neutral-300" fill="none" />
          ))}
        </div>
        <span className="font-bold text-neutral-900">0.0</span>
        <span className="text-neutral-400">из 5 · 0 отзывов</span>
      </div>
    </div>
  );
}
