"use client";

import { FormEvent, useState } from "react";
import { Info } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormField } from "./FormField";
import { PasswordField } from "./PasswordField";
import {
  useSendForgetPasswordOtpMutation,
  useSetNewPasswordMutation,
  useVerifyForgetPasswordOtpMutation,
} from "@/lib/store/api";
import { getErrorMessage } from "@/lib/store/api";

type Step = "email" | "code" | "password" | "done";

export function ResetPasswordForm() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPasswordValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const [sendForgetPasswordOtp, { isLoading: sending }] = useSendForgetPasswordOtpMutation();
  const [verifyForgetPasswordOtp, { isLoading: verifying }] = useVerifyForgetPasswordOtpMutation();
  const [setNewPassword, { isLoading: saving }] = useSetNewPasswordMutation();
  const loading = sending || verifying || saving;

  const mismatch = Boolean(newPassword) && newPassword !== confirmPassword;

  async function handleEmailSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setSubmitted(true);
    setError(null);
    if (!email) return;

    try {
      await sendForgetPasswordOtp({ email }).unwrap();
      setSubmitted(false);
      setStep("code");
    } catch (err) {
      setError(getErrorMessage(err, "Не удалось подключиться к серверу."));
    }
  }

  async function handleCodeSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setSubmitted(true);
    setError(null);
    if (!code) return;

    try {
      await verifyForgetPasswordOtp({ email, code }).unwrap();
      setSubmitted(false);
      setStep("password");
    } catch (err) {
      setError(getErrorMessage(err, "Не удалось подключиться к серверу."));
    }
  }

  async function handlePasswordSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setSubmitted(true);
    setError(null);
    if (!newPassword || mismatch) return;

    try {
      // Если сервер сразу выдал токены, эндпоинт их уже сохранил (lib/store/api/authApi.ts).
      const { accessToken } = await setNewPassword({
        email,
        new_password: newPassword,
        new_password_again: confirmPassword,
      }).unwrap();
      if (accessToken) {
        router.push("/account");
        return;
      }
      setSubmitted(false);
      setStep("done");
    } catch (err) {
      setError(getErrorMessage(err, "Не удалось подключиться к серверу."));
    }
  }

  if (step === "done") {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-neutral-200 p-8 text-center">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-400">
          <Info size={18} />
        </div>
        <p className="text-sm leading-relaxed text-neutral-600">
          Пароль успешно изменён. Теперь вы можете войти на сайт, используя новый пароль.
        </p>
        <Link
          href="/my-account"
          className="mt-4 inline-block w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
        >
          Войти
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md space-y-4 rounded-2xl border border-neutral-200 p-8">
      {step === "email" && (
        <p className="text-center text-sm leading-relaxed text-neutral-600">
          <strong className="font-semibold text-neutral-900">Забыли свой пароль?</strong> Укажите
          свой Email. Код для создания нового пароля вы получите по электронной почте.
        </p>
      )}
      {step === "code" && (
        <p className="text-center text-sm leading-relaxed text-neutral-600">
          Мы отправили код подтверждения на{" "}
          <strong className="font-semibold text-neutral-900">{email}</strong>.
        </p>
      )}
      {step === "password" && (
        <p className="text-center text-sm leading-relaxed text-neutral-600">
          Придумайте новый пароль для входа.
        </p>
      )}

      {error && (
        <div className="rounded-lg border border-dashed border-red-300 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {step === "email" && (
        <form onSubmit={handleEmailSubmit} className="space-y-4" noValidate>
          <FormField
            label="Email"
            required
            type="email"
            placeholder="Введите ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={submitted && !email}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Отправляем..." : "Сбросить пароль"}
          </button>
        </form>
      )}

      {step === "code" && (
        <form onSubmit={handleCodeSubmit} className="space-y-4" noValidate>
          <FormField
            label="Код подтверждения"
            required
            placeholder="Введите код из письма"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            error={submitted && !code}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Проверяем..." : "Подтвердить код"}
          </button>
        </form>
      )}

      {step === "password" && (
        <form onSubmit={handlePasswordSubmit} className="space-y-4" noValidate>
          <PasswordField
            label="Новый пароль"
            required
            placeholder="Введите пароль"
            value={newPassword}
            onChange={setNewPasswordValue}
            error={submitted && !newPassword}
          />
          <PasswordField
            label="Подтвердите пароль"
            required
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={setConfirmPassword}
            error={submitted && mismatch}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Сохраняем..." : "Сохранить новый пароль"}
          </button>
        </form>
      )}
    </div>
  );
}
