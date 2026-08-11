import { ReactNode } from "react";
import Link from "next/link";
import { UserPlus, ChevronRight } from "lucide-react";

interface AuthPromoPanelProps {
  title: string;
  children: ReactNode;
  ctaLabel: string;
  ctaHref: string;
}

export function AuthPromoPanel({ title, children, ctaLabel, ctaHref }: AuthPromoPanelProps) {
  return (
    <div className="flex flex-col items-start gap-4">
      <UserPlus size={28} strokeWidth={1.5} className="text-red-400" />
      <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-neutral-600">{children}</div>
      <Link
        href={ctaHref}
        className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-neutral-800"
      >
        {ctaLabel}
        <ChevronRight size={14} />
      </Link>
    </div>
  );
}
