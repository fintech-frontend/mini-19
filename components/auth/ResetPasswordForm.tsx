"use client";

import { FormEvent, useState } from "react";
import { Info } from "lucide-react";
import { FormField } from "./FormField";

export function ResetPasswordForm() {
  const [login, setLogin] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!login) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-neutral-200 p-8 text-center">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-400">
          <Info size={18} />
        </div>
        <p className="text-sm leading-relaxed text-neutral-600">
          Ссылка для сброса пароля и дальнейших инструкций отправлена вам на почту. Перейдите по
          ссылке и следуйте дальнейшим инструкциям.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-4 rounded-2xl border border-neutral-200 p-8"
    >
      <p className="text-center text-sm leading-relaxed text-neutral-600">
        <strong className="font-semibold text-neutral-900">Забыли свой пароль?</strong> Укажите
        свой Email или имя пользователя. Ссылку на создание нового пароля вы получите по
        электронной почте.
      </p>

      <FormField
        label="Email или логин"
        required
        placeholder="Введите данные для авторизации"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
      >
        Сбросить пароль
      </button>
    </form>
  );
}
