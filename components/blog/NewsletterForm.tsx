"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!agreed || !email) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus("done");
    setEmail("");
  }

  return (
    <div className="rounded-2xl border border-neutral-200 p-6">
      <h2 className="mb-2 text-lg font-semibold text-neutral-900">Подпишитесь на рассылку</h2>
      <p className="mb-4 text-sm text-neutral-500">
        Регулярные скидки и спецпредложения, а так же новости компании.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium uppercase text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
        >
          {status === "done" ? "Вы подписаны" : "Подписаться"}
        </button>

        <label className="flex items-start gap-2 text-xs leading-snug text-neutral-500">
          <input
            type="checkbox"
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
      </form>
    </div>
  );
}
