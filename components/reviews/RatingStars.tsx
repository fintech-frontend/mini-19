import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  size?: number;
  className?: string;
}

export function RatingStars({ rating, size = 14, className }: RatingStarsProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label={`Оценка ${rating} из 5`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          strokeWidth={1.5}
          className={star <= rating ? "fill-amber-400 text-amber-400" : "fill-none text-neutral-300"}
          aria-hidden
        />
      ))}
    </span>
  );
}
