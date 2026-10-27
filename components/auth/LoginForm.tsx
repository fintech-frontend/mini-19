"use client";

import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormField } from "./FormField";
import { PasswordField } from "./PasswordField";
import { useLoginMutation } from "@/lib/store/api";
import { getErrorMessage } from "@/lib/store/api";

/** Показывает уведомление после успешной регистрации (?notice=registered в URL). */
function RegisteredNotice() {
  const searchParams = useSearchParams();
  if (searchParams.get("notice") !== "registered") return null;

  return (
    <div className="rounded-lg border border-dashed border-blue-300 bg-blue-50 p-3 text-sm text-blue-700">
      Ro&apos;yxatdan o&apos;tish yakunlandi, endi tizimga kiring.
    </div>
  );
}

export function LoginForm({ redirectTo = "/account" }: { redirectTo?: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [login, { isLoading: loading }] = useLoginMutation();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setError(null);

    if (!email || !password) {
      setError("Заполните email и пароль");
      return;
    }

    try {
      // Токены сохраняет сам эндпоинт login (lib/store/api/authApi.ts).
      const { accessToken } = await login({ email, password }).unwrap();
      if (!accessToken) {
        setError("Kirish muvaffaqiyatsiz: token topilmadi");
        return;
      }
      router.push(redirectTo);
    } catch (err) {
      setError(getErrorMessage(err, "Не удалось подключиться к серверу."));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Suspense fallback={null}>
        <RegisteredNotice />
      </Suspense>

      {error && (
        <div className="rounded-lg border border-dashed border-red-300 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <FormField
        label="Email"
        required
        type="email"
        name="email"
        placeholder="Введите ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Входим..." : "Авторизоваться"}
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
