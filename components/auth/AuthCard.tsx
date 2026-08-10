import { ReactNode } from "react";

interface AuthCardProps {
  form: ReactNode;
  promo: ReactNode;
}

export function AuthCard({ form, promo }: AuthCardProps) {
  return (
    <div className="grid grid-cols-1 gap-8 rounded-2xl border border-neutral-200 p-6 sm:p-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-10">
      <div className="max-w-md">{form}</div>
      <div className="hidden bg-neutral-200 lg:block" />
      <div className="max-w-md">{promo}</div>
    </div>
  );
}
