"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FormField } from "./FormField";
import { PasswordField } from "./PasswordField";

interface RegisterFields {
  email: string;
  phone: string;
  fullName: string;
  region: string;
  password: string;
  confirmPassword: string;
}

const initialFields: RegisterFields = {
  email: "",
  phone: "",
  fullName: "",
  region: "",
  password: "",
  confirmPassword: "",
};

export function RegisterForm() {
  const [fields, setFields] = useState<RegisterFields>(initialFields);
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  function updateField(field: keyof RegisterFields) {
    return (e: ChangeEvent<HTMLInputElement>) =>
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
  }

  const passwordMismatch = Boolean(fields.password) && fields.password !== fields.confirmPassword;

  const errors = [
    !fields.email && "Поле Email не может быть пустым",
    !fields.fullName && "Заполните поле ФИО",
    !fields.password && "Введите пароль",
    passwordMismatch && "Пароли не совпадают",
    !terms && "Вы должны согласиться с условиями обслуживания",
    !privacy && "Вы должны согласиться с обработкой персональных данных",
  ].filter((error): error is string => Boolean(error));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (errors.length === 0) {
      // TODO: wire up to registration API
      router.push("/account");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {submitted && errors.length > 0 && (
        <div className="space-y-1 rounded-lg border border-dashed border-red-300 bg-red-50 p-4 text-sm text-red-600">
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Email"
          required
          type="email"
          placeholder="Введите ваш email адрес"
          value={fields.email}
          onChange={updateField("email")}
          error={submitted && !fields.email}
        />
        <FormField
          label="Номер телефона"
          required
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={fields.phone}
          onChange={updateField("phone")}
        />
      </div>

      <FormField
        label="ФИО"
        required
        placeholder="Ваше полное имя"
        value={fields.fullName}
        onChange={updateField("fullName")}
        error={submitted && !fields.fullName}
      />

      <FormField
        label="Регион"
        required
        placeholder="Ваш регион"
        value={fields.region}
        onChange={updateField("region")}
      />

      <PasswordField
        label="Пароль"
        required
        placeholder="Введите пароль"
        value={fields.password}
        onChange={(value) => setFields((prev) => ({ ...prev, password: value }))}
        error={submitted && !fields.password}
      />

      <PasswordField
        label="Подтвердите пароль"
        required
        placeholder="Повторите пароль"
        value={fields.confirmPassword}
        onChange={(value) => setFields((prev) => ({ ...prev, confirmPassword: value }))}
        error={submitted && passwordMismatch}
      />

      <div className="space-y-2">
        <label className="flex items-start gap-2 text-sm text-neutral-600">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            className={`mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300 ${
              submitted && !terms ? "border-red-400 ring-1 ring-red-400" : ""
            }`}
          />
          Согласен с условиями обслуживания
        </label>
        <label className="flex items-start gap-2 text-sm text-neutral-600">
          <input
            type="checkbox"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
            className={`mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300 ${
              submitted && !privacy ? "border-red-400 ring-1 ring-red-400" : ""
            }`}
          />
          Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
      >
        Зарегистрироваться
      </button>
    </form>
  );
}
