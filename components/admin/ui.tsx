"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs as UiTabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useI18n } from "@/lib/admin/i18n";
import type { StatusInfo, Tone } from "@/lib/admin/format";
import { cn } from "@/lib/utils";

/*
 * Admin sahifalarining umumiy bloklari — shadcn komponentlari (components/ui)
 * ustidagi yupqa qatlam. Matnlar o'zbekcha kalit, shu yerda tarjima qilinadi.
 */

const TONE: Record<Tone, string> = {
  green: "bg-[var(--green-soft)] text-[var(--green)]",
  yellow: "bg-[var(--yellow-soft)] text-[var(--yellow)]",
  blue: "bg-[var(--blue-soft)] text-[var(--blue)]",
  red: "bg-[var(--accent-soft)] text-[var(--accent)] dark:text-[#ff7b78]",
  grey: "bg-[var(--grey-soft)] text-[var(--grey)]",
};

export function StatusBadge({ tone = "grey", status, children }: { tone?: Tone; status?: StatusInfo; children?: ReactNode }) {
  const { t } = useI18n();
  const content = status ? t(status.label) : typeof children === "string" ? t(children) : children;
  return (
    <Badge
      variant="secondary"
      className={cn(
        "h-auto gap-1.5 px-2.5 py-[3px] font-semibold before:size-1.5 before:rounded-full before:bg-current before:content-['']",
        TONE[status?.tone ?? tone],
      )}
    >
      {content}
    </Badge>
  );
}

export function PageHeader({ title, sub, children }: { title: string; sub?: string; children?: ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="page-header">
      <div>
        <h1>{t(title)}</h1>
        {sub && <div className="sub">{t(sub)}</div>}
      </div>
      <div className="actions">{children}</div>
    </div>
  );
}

export function Kpi({ label, value, icon, tint }: { label: string; value: string; icon?: ReactNode; tint?: "red" | "green" }) {
  const { t } = useI18n();
  return (
    <div className="card kpi">
      {icon && <div className={`ico ${tint ?? ""}`}>{icon}</div>}
      <div className="label">{t(label)}</div>
      <div className="value">{value}</div>
    </div>
  );
}

/** Sahifa ichidagi filtr tablari (holat bo'yicha va h.k.). */
export function Tabs<T extends string>({ tabs, value, onChange }: { tabs: { key: T; label: string }[]; value: T; onChange: (k: T) => void }) {
  const { t } = useI18n();
  return (
    <UiTabs value={value} onValueChange={(v) => onChange(v as T)} className="mb-5">
      <TabsList variant="line" className="h-auto max-w-full justify-start overflow-x-auto">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.key} value={tab.key} className="flex-none px-3 py-2">
            {t(tab.label)}
          </TabsTrigger>
        ))}
      </TabsList>
    </UiTabs>
  );
}

/** Bo'lim ichidagi sahifalar orasida o'tish (Mahsulotlar / Kategoriyalar / Brendlar). */
export function SubNav({ links }: { links: [href: string, label: string][] }) {
  const { t } = useI18n();
  const pathname = usePathname();
  return (
    <nav className="mb-5 flex gap-1 overflow-x-auto border-b border-border">
      {links.map(([href, label]) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "-mb-px whitespace-nowrap border-b-2 px-4 py-2.5 text-sm font-semibold no-underline hover:no-underline",
              active ? "border-[var(--link)] text-[var(--link)]" : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {t(label)}
          </Link>
        );
      })}
    </nav>
  );
}

export function Field({ label, hint, error, htmlFor, children }: { label: string; hint?: string; error?: string; htmlFor?: string; children: ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="field">
      <Label htmlFor={htmlFor}>{t(label)}</Label>
      {children}
      {hint && <span className="hint">{t(hint)}</span>}
      {error && <span className="err">{t(error)}</span>}
    </div>
  );
}

export function Confirm({
  title,
  text,
  confirmLabel = "Tasdiqlash",
  danger,
  onConfirm,
  onClose,
  children,
}: {
  title: string;
  text?: string;
  confirmLabel?: string;
  danger?: boolean;
  onConfirm: () => void | Promise<void>;
  onClose: () => void;
  children?: ReactNode;
}) {
  const { t } = useI18n();
  const [busy, setBusy] = useState(false);
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogTitle className="text-lg font-bold">{t(title)}</DialogTitle>
        {text && <DialogDescription>{t(text)}</DialogDescription>}
        {children}
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            {t("Bekor qilish")}
          </Button>
          <Button
            variant={danger ? "destructive" : "default"}
            disabled={busy}
            onClick={async () => {
              setBusy(true);
              try {
                await onConfirm();
              } finally {
                setBusy(false);
              }
            }}
          >
            {busy ? t("Kuting…") : t(confirmLabel)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/** Forma oynasi (kategoriya, brend …): sarlavha, maydonlar, Saqlash/Bekor. */
export function FormDialog({
  title,
  busy,
  onSubmit,
  onClose,
  children,
}: {
  title: string;
  busy?: boolean;
  onSubmit: () => void;
  onClose: () => void;
  children: ReactNode;
}) {
  const { t } = useI18n();
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogTitle className="text-lg font-bold">{t(title)}</DialogTitle>
        <form
          id="admin-form-dialog"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {children}
        </form>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            {t("Bekor qilish")}
          </Button>
          <Button type="submit" form="admin-form-dialog" disabled={busy}>
            {busy ? t("Kuting…") : t("Saqlash")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function Drawer({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const { t } = useI18n();
  return (
    <Sheet open onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full gap-0 overflow-y-auto p-7 data-[side=right]:sm:max-w-[520px] max-sm:p-5">
        <SheetTitle className="mb-5 pr-8 text-xl font-bold">{t(title)}</SheetTitle>
        {children}
      </SheetContent>
    </Sheet>
  );
}

export interface Option {
  value: string;
  label: string;
}

export function SimpleSelect({
  value,
  onValueChange,
  options,
  placeholder,
  className,
  "aria-label": ariaLabel,
}: {
  value: string;
  onValueChange: (v: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <Select items={options} value={value} onValueChange={(v) => onValueChange(String(v ?? ""))}>
      <SelectTrigger className={cn("h-10 w-full bg-card", className)} aria-label={ariaLabel}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((o) => (
          <SelectItem key={o.value} value={o.value}>
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function LoadingRows({ rows = 5 }: { rows?: number }) {
  return (
    <div className="grid gap-3 p-4">
      {Array.from({ length: rows }, (_, i) => (
        <Skeleton key={i} className="h-4" />
      ))}
    </div>
  );
}

/** So'rov xatosi + qayta urinish. */
export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  const { t } = useI18n();
  return (
    <div className="card">
      <p className="err" style={{ margin: 0 }}>
        {t(message)}
      </p>
      {onRetry && (
        <Button variant="outline" size="sm" className="mt-3" onClick={onRetry}>
          {t("Qayta urinish")}
        </Button>
      )}
    </div>
  );
}
