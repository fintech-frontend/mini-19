"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { FormField } from "@/components/auth/FormField";
import { submitReview } from "@/lib/reviews-storage";

export function ReviewForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [text, setText] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (rating === 0) {
      setError("Поставьте оценку от 1 до 5 звёзд");
      return;
    }

    setError(null);
    setStatus("submitting");

    try {
      await submitReview({ author: name.trim(), email: email.trim(), rating, text: text.trim() });
    } catch {
      setStatus("idle");
      setError("Не удалось сохранить отзыв. Попробуйте ещё раз.");
      return;
    }

    setStatus("done");
    setName("");
    setEmail("");
    setText("");
    setRating(0);
    setAgreed(false);
  }

  const shown = hovered || rating;

  return (
    <section id="ostavit-otzyv" className="mt-12 rounded-2xl border border-neutral-200 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">Оставить отзыв</h2>
      <p className="mt-2 text-sm text-neutral-500">
        Расскажите о покупке — это помогает другим покупателям и нам стать лучше.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            label="Имя"
            required
            name="name"
            placeholder="Как к вам обращаться"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormField
            label="Email"
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <fieldset>
          <legend className="mb-1.5 text-sm text-neutral-700">Оценка *:</legend>
          <div className="flex items-center gap-1" onMouseLeave={() => setHovered(0)}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                aria-label={`Поставить оценку ${star}`}
                aria-pressed={rating === star}
                onClick={() => {
                  setRating(star);
                  setError(null);
                }}
                onMouseEnter={() => setHovered(star)}
                className="rounded p-0.5 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Star
                  size={24}
                  strokeWidth={1.5}
                  className={
                    star <= shown ? "fill-amber-400 text-amber-400" : "fill-none text-neutral-300"
                  }
                />
              </button>
            ))}
          </div>
        </fieldset>

        <label className="block">
          <span className="mb-1.5 block text-sm text-neutral-700">Отзыв *:</span>
          <textarea
            required
            rows={5}
            name="text"
            placeholder="Что понравилось, что можно улучшить"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full resize-y rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-blue-500"
          />
        </label>

        <label className="flex items-start gap-2 text-xs leading-snug text-neutral-500">
          <input
            type="checkbox"
            required
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300"
          />
          <span>
            Согласен с обработкой персональных данных в соответствии с{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              политикой конфиденциальности
            </Link>
          </span>
        </label>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium uppercase text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
          >
            {status === "submitting" ? "Отправляем…" : "Отправить отзыв"}
          </button>

          {status === "done" && (
            <p className="text-sm text-emerald-600">
              Спасибо! Отзыв сохранён и появится в списке выше со статусом «На модерации».
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
