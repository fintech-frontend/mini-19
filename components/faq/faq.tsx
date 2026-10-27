"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItemData = {
  question: string;
  answer: string;
};

function FaqItem({ question, answer }: FaqItemData) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 py-4 first:pt-0 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-neutral-900 sm:text-base"
      >
        {question}
        <ChevronDown
          size={18}
          className={`shrink-0 text-neutral-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function Faq({
  items,
  title = "Частые вопросы",
}: {
  items: FaqItemData[];
  title?: string;
}) {
  return (
    <section>
      {title && (
        <h2 className="mb-4 text-xl font-bold text-neutral-900 sm:text-2xl">
          {title}
        </h2>
      )}
      <div className="rounded-lg border border-neutral-200 bg-white px-4 sm:px-6">
        {items.map((item) => (
          <FaqItem key={item.question} {...item} />
        ))}
      </div>
    </section>
  );
}
