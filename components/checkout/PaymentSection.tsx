"use client";

import { PaymentMethod } from "@/types/order";

const paymentOptions: { id: PaymentMethod; label: string; terms?: string }[] = [
  { id: "card", label: "Картой на сайте" },
  { id: "cash-on-pickup", label: "Оплата в кассе" },
  { id: "credit-otp", label: "Кредит от ОТП банка", terms: "Условия предоставления" },
  { id: "installment-sber", label: "Покупай со Сбером (оформление покупки в кредит)", terms: "Условия предоставления" },
];

interface PaymentSectionProps {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
}

export function PaymentSection({ value, onChange }: PaymentSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-bold text-neutral-900">Оплата</h2>
      <div className="mt-4 space-y-3">
        {paymentOptions.map((option) => (
          <label
            key={option.id}
            className="flex cursor-pointer items-center gap-3 text-sm text-neutral-700"
          >
            <input
              type="radio"
              name="payment-method"
              checked={value === option.id}
              onChange={() => onChange(option.id)}
              className="size-4 accent-blue-600"
            />
            <span>
              {option.label}
              {option.terms && (
                <>
                  {" "}
                  <span className="text-blue-600 underline-offset-2 hover:underline">
                    {option.terms}
                  </span>
                </>
              )}
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}
