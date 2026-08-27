import { Review } from "@/types/review";

const STORAGE_KEY = "stroiopttorg:reviews";

/** Событие, по которому список отзывов перечитывает хранилище. */
export const REVIEWS_UPDATED_EVENT = "reviews:updated";

export interface NewReviewInput {
  author: string;
  email: string;
  rating: number;
  text: string;
  subject?: string;
}

/** Отзыв в хранилище: то же, что и в списке, плюс email — его не показываем. */
interface StoredReview extends Review {
  email: string;
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${date.getDate()}.${month}.${date.getFullYear()}`;
}

function readStorage(): StoredReview[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is StoredReview =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as StoredReview).id === "string" &&
        typeof (item as StoredReview).author === "string" &&
        typeof (item as StoredReview).text === "string"
    );
  } catch {
    // Приватный режим, отключённое хранилище или повреждённый JSON.
    return [];
  }
}

function writeStorage(reviews: StoredReview[]): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch {
    // Квота исчерпана или запись запрещена — молча пропускаем.
  }
}

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * Публичный слой доступа к отзывам.
 *
 * Сейчас данные лежат в localStorage конкретного браузера. Когда появится
 * бэкенд, достаточно заменить тела двух функций ниже:
 *
 *   fetchUserReviews  →  const res = await fetch("/api/reviews"); return res.json();
 *   submitReview      →  const res = await fetch("/api/reviews", { method: "POST", ... });
 *                        return res.json();
 *
 * Сигнатуры уже асинхронные, поэтому вызывающие компоненты менять не придётся.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export async function fetchUserReviews(): Promise<Review[]> {
  return readStorage().sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}

export async function submitReview(input: NewReviewInput): Promise<Review> {
  const now = new Date();

  const review: StoredReview = {
    id: `local-${now.getTime()}`,
    author: input.author,
    email: input.email,
    rating: input.rating,
    text: input.text,
    subject: input.subject,
    date: formatDate(now.toISOString()),
    sortDate: now.toISOString().slice(0, 10),
    pending: true,
  };

  writeStorage([review, ...readStorage()]);
  window.dispatchEvent(new CustomEvent(REVIEWS_UPDATED_EVENT));

  return review;
}

export async function deleteUserReview(id: string): Promise<void> {
  writeStorage(readStorage().filter((review) => review.id !== id));
  window.dispatchEvent(new CustomEvent(REVIEWS_UPDATED_EVENT));
}
