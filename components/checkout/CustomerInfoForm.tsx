"use client";

import { ChangeEvent } from "react";
import { FormField } from "@/components/auth/FormField";
import { OrderCustomer } from "@/types/order";

interface CustomerInfoFormProps {
  fields: OrderCustomer;
  onChange: (field: keyof OrderCustomer, value: string) => void;
  createAccount: boolean;
  onCreateAccountChange: (value: boolean) => void;
  submitted: boolean;
}

export function CustomerInfoForm({
  fields,
  onChange,
  createAccount,
  onCreateAccountChange,
  submitted,
}: CustomerInfoFormProps) {
  function handle(field: keyof OrderCustomer) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(field, e.target.value);
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Ваше имя"
          required
          placeholder="Как вас зовут"
          value={fields.firstName}
          onChange={handle("firstName")}
          error={submitted && !fields.firstName}
        />
        <FormField
          label="Фамилия"
          required
          placeholder="Введите вашу фамилию"
          value={fields.lastName}
          onChange={handle("lastName")}
          error={submitted && !fields.lastName}
        />
      </div>

      <FormField
        label="Название компании"
        placeholder="Введите название вашей компании"
        value={fields.company ?? ""}
        onChange={handle("company")}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Email"
          required
          type="email"
          placeholder="Введите ваш email адрес"
          value={fields.email}
          onChange={handle("email")}
          error={submitted && !fields.email}
        />
        <FormField
          label="Номер телефона"
          required
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={fields.phone}
          onChange={handle("phone")}
          error={submitted && !fields.phone}
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-neutral-600">
        <input
          type="checkbox"
          checked={createAccount}
          onChange={(e) => onCreateAccountChange(e.target.checked)}
          className="size-4 rounded border-neutral-300 accent-blue-600"
        />
        Создать аккаунт
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm text-neutral-700">Комментарий к заказу:</span>
        <textarea
          placeholder="Текстовое поле"
          rows={4}
          value={fields.comment ?? ""}
          onChange={handle("comment")}
          className="w-full resize-none rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-blue-500"
        />
      </label>
    </div>
  );
}
