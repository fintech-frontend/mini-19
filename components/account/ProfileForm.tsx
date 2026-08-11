"use client";

import { FormEvent, useState } from "react";
import { FormField } from "@/components/auth/FormField";
import { UserProfile } from "@/types/account";

export function ProfileForm({ user }: { user: UserProfile }) {
  const [email, setEmail] = useState(user.email);
  const [fullName, setFullName] = useState(user.fullName);
  const [phone, setPhone] = useState(user.phone);
  const [region, setRegion] = useState(user.region);
  const [saved, setSaved] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire up to profile update API
    setSaved(true);
  }

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-neutral-900">Изменить профиль</h2>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4 rounded-2xl border border-neutral-200 p-6">
        <FormField
          label="Email"
          required
          type="email"
          placeholder="Введите ваш email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setSaved(false);
          }}
        />
        <FormField
          label="ФИО"
          required
          placeholder="Введите ваше имя"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            setSaved(false);
          }}
        />
        <FormField
          label="Номер телефона"
          required
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setSaved(false);
          }}
        />
        <FormField
          label="Регион"
          required
          placeholder="Ваш регион"
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            setSaved(false);
          }}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700"
        >
          {saved ? "Сохранено" : "Сохранить изменения"}
        </button>
      </form>
    </div>
  );
}
