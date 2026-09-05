"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PasswordField } from "@/components/auth/PasswordField";
import { changePassword, openChangePasswordWindow } from "@/lib/api/auth";
import { isAuthenticated } from "@/lib/api/token";
import { ApiError } from "@/lib/api/errors";

type WindowState = "checking" | "open" | "error";

export function ChangePasswordForm() {
  const router = useRouter();
  const [windowState, setWindowState] = useState<WindowState>("checking");
  const [windowError, setWindowError] = useState<string | null>(null);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/my-account");
      return;
    }

    openChangePasswordWindow()
      .then(() => setWindowState("open"))
      .catch((err: unknown) => {
        setWindowState("error");
        setWindowError(
          err instanceof ApiError ? err.message : "Не удалось открыть окно смены пароля."
        );
      });
  }, [router]);

  const mismatch = Boolean(newPassword) && newPassword !== confirmPassword;
  const isValid = Boolean(currentPassword) && Boolean(newPassword) && !mismatch;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (saving) return;
    setSubmitted(true);
    setSaved(false);
    setError(null);
    if (!isValid) return;

    if (windowState !== "open") {
      setError("You can open change request first");
      return;
    }

    setSaving(true);
    try {
      await changePassword(currentPassword, newPassword, confirmPassword);
      setSaved(true);
      setSubmitted(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Не удалось сменить пароль.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-neutral-900">Сменить пароль</h2>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="max-w-md space-y-4 rounded-2xl border border-neutral-200 p-6"
      >
        {windowState === "checking" && (
          <p className="text-sm text-neutral-500">Открываем окно смены пароля...</p>
        )}
        {windowState === "error" && windowError && (
          <div className="rounded-lg border border-dashed border-red-300 bg-red-50 p-3 text-sm text-red-600">
            {windowError}
          </div>
        )}
        {error && (
          <div className="rounded-lg border border-dashed border-red-300 bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <PasswordField
          label="Текущий пароль"
          required
          placeholder="Введите текущий пароль"
          value={currentPassword}
          onChange={(v) => {
            setCurrentPassword(v);
            setSaved(false);
          }}
          error={submitted && !currentPassword}
        />
        <PasswordField
          label="Новый пароль"
          required
          placeholder="Введите пароль"
          value={newPassword}
          onChange={(v) => {
            setNewPassword(v);
            setSaved(false);
          }}
          error={submitted && !newPassword}
        />
        <PasswordField
          label="Подтвердите пароль"
          required
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChange={(v) => {
            setConfirmPassword(v);
            setSaved(false);
          }}
          error={submitted && mismatch}
        />

        <button
          type="submit"
          disabled={saving || windowState !== "open"}
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
        >
          {saving ? "Сохраняем..." : saved ? "Сохранено" : "Сохранить"}
        </button>
      </form>
    </div>
  );
}
