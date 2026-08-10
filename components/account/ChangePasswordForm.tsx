"use client";

import { FormEvent, useState } from "react";
import { PasswordField } from "@/components/auth/PasswordField";

export function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saved, setSaved] = useState(false);

  const mismatch = Boolean(newPassword) && newPassword !== confirmPassword;
  const isValid = Boolean(currentPassword) && Boolean(newPassword) && !mismatch;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (isValid) {
      // TODO: wire up to password change API
      setSaved(true);
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
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
        >
          {saved ? "Сохранено" : "Сохранить"}
        </button>
      </form>
    </div>
  );
}
