"use client";

import { useCallback, useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { ReviewItem } from "@/components/reviews/ReviewItem";
import {
  deleteUserReview,
  fetchUserReviews,
  REVIEWS_UPDATED_EVENT,
} from "@/lib/reviews-storage";
import { Review } from "@/types/review";

export function UserReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  const load = useCallback(() => {
    fetchUserReviews().then(setReviews);
  }, []);

  useEffect(() => {
    load();
    window.addEventListener(REVIEWS_UPDATED_EVENT, load);
    // Другая вкладка того же браузера тоже могла оставить отзыв.
    window.addEventListener("storage", load);
    return () => {
      window.removeEventListener(REVIEWS_UPDATED_EVENT, load);
      window.removeEventListener("storage", load);
    };
  }, [load]);

  return (
    <>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
          action={
            <button
              type="button"
              onClick={() => deleteUserReview(review.id)}
              aria-label="Удалить отзыв"
              className="rounded p-1 text-neutral-300 transition-colors hover:bg-neutral-100 hover:text-red-500"
            >
              <Trash2 size={15} />
            </button>
          }
        />
      ))}
    </>
  );
}
