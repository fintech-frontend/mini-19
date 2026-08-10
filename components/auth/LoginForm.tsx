"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormField } from "./FormField";
import { PasswordField } from "./PasswordField";

export function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire up to auth API — redirect assumes the credentials are valid
    router.push("/account");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        label="Email или логин"
        required
        name="login"
        placeholder="Введите данные для авторизации"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />

      <PasswordField
        label="Пароль"
        required
        name="password"
        placeholder="Введите пароль"
        value={password}
        onChange={setPassword}
      />

      <Link
        href="/my-account/lost-password"
        className="block rounded-lg bg-blue-50 py-2.5 text-center text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100"
      >
        Восстановить пароль
      </Link>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
      >
        Авторизоваться
      </button>

      <label className="flex items-center gap-2 text-sm text-neutral-600">
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="h-4 w-4 rounded border-neutral-300"
        />
        Запомнить меня
      </label>
    </form>
  );
}
