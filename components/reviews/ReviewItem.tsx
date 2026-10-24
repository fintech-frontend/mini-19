import Image from "next/image";
import { RatingStars } from "@/components/reviews/RatingStars";
import { Review } from "@/types/review";

interface ReviewItemProps {
  review: Review;
  /** Кнопка действия в правом верхнем углу карточки (например, «Удалить»). */
  action?: React.ReactNode;
}

export function ReviewItem({ review, action }: ReviewItemProps) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-[15px] font-semibold text-neutral-900">{review.author}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            <time dateTime={review.sortDate} className="text-xs text-neutral-400">
              {review.date}
            </time>
            {review.pending && (
              <span className="rounded bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-600">
                На модерации
              </span>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <RatingStars rating={review.rating} />
          {action}
        </div>
      </div>

      <p className="mt-4 text-[13px] leading-relaxed text-neutral-600">{review.text}</p>

      {review.images && review.images.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {review.images.map((src) => (
            <li key={src} className="relative h-14 w-24 overflow-hidden rounded bg-neutral-100">
              <Image
                src={src}
                alt={`Фото к отзыву от ${review.author}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
