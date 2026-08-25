"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface BuyOneClickButtonProps {
  /** Достаточно заголовка — модалка больше ничего о товаре не показывает, поэтому
   *  сюда одинаково подходит и Product, и CatalogListingProduct. */
  product: { title: string };
  disabled?: boolean;
}

export default function BuyOneClickButton({ product, disabled }: BuyOneClickButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(true)}
        className={`w-full py-2.5 px-4 rounded-lg font-semibold text-xs border transition-all ${
          disabled
            ? "border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
            : "border-gray-300 text-blue-600 bg-white hover:bg-gray-50 active:scale-[0.98]"
        }`}
      >
        Купить в 1 клик
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Заказать в 1 клик</h2>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-6 text-center">
                <p className="text-sm text-gray-700 mb-4">
                  Спасибо! Ваш заказ принят, наш менеджер свяжется с вами в ближайшее время.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full py-2.5 px-4 rounded-lg font-bold text-sm bg-blue-600 text-white hover:bg-blue-700"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <p className="text-xs text-gray-500 mb-1 line-clamp-2">{product.title}</p>

                <input
                  type="text"
                  required
                  placeholder="Ваше имя"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="Номер телефона"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="flex items-start gap-2 text-[11px] text-gray-500 pt-1">
                  <input type="checkbox" required className="mt-0.5" />
                  <span>Соглашаюсь с обработкой персональных данных и условиями оферты</span>
                </label>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98] transition-all"
                >
                  КУПИТЬ
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
