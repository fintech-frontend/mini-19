"use client";

import { FormEvent, useState } from "react";
import { FormField } from "@/components/auth/FormField";
import { UserProfile } from "@/types/account";
import {
  openChangeEmailWindow,
  requestChangeEmail,
  verifyChangeEmail,
  resendChangeEmailOtp,
} from "@/lib/api/auth";
import { ApiError } from "@/lib/api/errors";

type EmailStep = "idle" | "opening" | "enterEmail" | "verify";

export function ProfileForm({ user }: { user: UserProfile }) {
  const [email, setEmail] = useState(user.email);
  const [emailStep, setEmailStep] = useState<EmailStep>("idle");
  const [newEmail, setNewEmail] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailSuccess, setEmailSuccess] = useState<string | null>(null);
  const [resending, setResending] = useState(false);

  async function handleStartChange() {
    setEmailError(null);
    setEmailSuccess(null);
    setEmailStep("opening");
    setEmailLoading(true);
    try {
      await openChangeEmailWindow();
      setNewEmail("");
      setEmailStep("enterEmail");
    } catch (err) {
      setEmailError(err instanceof ApiError ? err.message : "Не удалось открыть окно смены email.");
      setEmailStep("idle");
    } finally {
      setEmailLoading(false);
    }
  }

  function handleCancelChange() {
    setEmailStep("idle");
    setEmailError(null);
    setEmailSuccess(null);
    setOtpCode("");
  }

  async function handleRequestChange(e: FormEvent) {
    e.preventDefault();
    if (emailLoading) return;
    setEmailError(null);
    if (!newEmail) {
      setEmailError("Введите новый email");
      return;
    }

    setEmailLoading(true);
    try {
      await requestChangeEmail(newEmail);
      setOtpCode("");
      setEmailStep("verify");
    } catch (err) {
      setEmailError(err instanceof ApiError ? err.message : "Не удалось отправить запрос на смену email.");
    } finally {
      setEmailLoading(false);
    }
  }

  async function handleVerifyChange(e: FormEvent) {
    e.preventDefault();
    if (emailLoading) return;
    setEmailError(null);
    if (!otpCode) {
      setEmailError("Введите код подтверждения");
      return;
    }

    setEmailLoading(true);
    try {
      await verifyChangeEmail(otpCode);
      setEmail(newEmail);
      setEmailSuccess("Email успешно изменён");
      setEmailStep("idle");
    } catch (err) {
      setEmailError(err instanceof ApiError ? err.message : "Не удалось подтвердить код.");
    } finally {
      setEmailLoading(false);
    }
  }

  async function handleResendOtp() {
    if (resending) return;
    setEmailError(null);
    setResending(true);
    try {
      await resendChangeEmailOtp();
      setEmailSuccess("Код отправлен повторно");
    } catch (err) {
      setEmailError(err instanceof ApiError ? err.message : "Не удалось отправить код повторно.");
    } finally {
      setResending(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-4 text-lg font-semibold text-neutral-900">Email для входа</h2>
        <div className="max-w-md space-y-4 rounded-2xl border border-neutral-200 p-6">
          {emailError && (
            <div className="rounded-lg border border-dashed border-red-300 bg-red-50 p-3 text-sm text-red-600">
              {emailError}
            </div>
          )}
          {emailSuccess && emailStep === "idle" && (
            <div className="rounded-lg border border-dashed border-blue-300 bg-blue-50 p-3 text-sm text-blue-700">
              {emailSuccess}
            </div>
          )}

          {emailStep === "idle" && (
            <>
              <FormField label="Email" value={email} disabled readOnly />
              <button
                type="button"
                onClick={handleStartChange}
                disabled={emailLoading}
                className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
              >
                {emailLoading ? "Открываем..." : "Изменить email"}
              </button>
            </>
          )}

          {emailStep === "opening" && <p className="text-sm text-neutral-500">Открываем окно смены email...</p>}

          {emailStep === "enterEmail" && (
            <form onSubmit={handleRequestChange} className="space-y-4" noValidate>
              <FormField
                label="Новый email"
                required
                type="email"
                placeholder="Введите новый email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={emailLoading}
                  className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
                >
                  {emailLoading ? "Отправляем..." : "Отправить код"}
                </button>
                <button
                  type="button"
                  onClick={handleCancelChange}
                  className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
                >
                  Отмена
                </button>
              </div>
            </form>
          )}

          {emailStep === "verify" && (
            <form onSubmit={handleVerifyChange} className="space-y-4" noValidate>
              <p className="text-sm text-neutral-600">
                Мы отправили код подтверждения на{" "}
                <strong className="font-semibold text-neutral-900">{newEmail}</strong>.
              </p>
              <FormField
                label="Код подтверждения"
                required
                placeholder="Введите код из письма"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={emailLoading}
                  className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
                >
                  {emailLoading ? "Проверяем..." : "Подтвердить"}
                </button>
                <button
                  type="button"
                  onClick={handleCancelChange}
                  className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
                >
                  Отмена
                </button>
              </div>
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={resending}
                className="w-full rounded-lg bg-blue-50 py-2.5 text-center text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100 disabled:opacity-60"
              >
                {resending ? "Отправляем..." : "Отправить код повторно"}
              </button>
            </form>
          )}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-neutral-900">Личные данные</h2>
        <div className="max-w-md space-y-4 rounded-2xl border border-neutral-200 p-6">
          <p className="text-xs leading-relaxed text-neutral-400">
            Изменение ФИО, номера телефона и региона пока не поддерживается (hozircha
            qo&apos;llab-quvvatlanmaydi).
          </p>
          <FormField label="ФИО" value={user.fullName} disabled readOnly />
          <FormField label="Номер телефона" value={user.phone} disabled readOnly />
          <FormField label="Регион" value={user.region} disabled readOnly />
        </div>
      </div>
    </div>
  );
}
