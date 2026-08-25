export interface Review {
  id: string;
  /** Имя покупателя */
  author: string;
  /** Оценка от 1 до 5 */
  rating: number;
  /** Дата в виде, готовом к выводу */
  date: string;
  /** ISO-дата, используется только для сортировки */
  sortDate: string;
  /** Товар или услуга, о которой отзыв */
  subject?: string;
  text: string;
  /** Фотографии, приложенные к отзыву */
  images?: string[];
  /** Отзыв оставлен посетителем и ещё не прошёл модерацию */
  pending?: boolean;
}

export interface RatingSummary {
  average: number;
  total: number;
  /** Количество отзывов по каждой оценке: ключ — 1..5 */
  breakdown: Record<number, number>;
}
