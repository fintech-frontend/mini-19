"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/admin/i18n";
import { LoadingRows } from "./ui";

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
  /** saralash va CSV uchun */
  value?: (row: T) => string | number;
  align?: "right";
  sortable?: boolean;
}

interface Props<T> {
  rows: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string | number;
  searchPlaceholder?: string;
  searchText?: (row: T) => string;
  pageSize?: number;
  onRowClick?: (row: T) => void;
  toolbar?: ReactNode;
  exportName?: string;
  loading?: boolean;
  /** So'rov xatosi matni — bo'lsa, "Ma'lumot topilmadi" o'rniga ko'rsatiladi */
  error?: string;
}

const toggle = <V,>(set: Set<V>, v: V) => {
  const next = new Set(set);
  if (next.has(v)) next.delete(v);
  else next.add(v);
  return next;
};

export function DataTable<T>({
  rows,
  columns,
  rowKey,
  searchPlaceholder = "Qidirish…",
  searchText,
  pageSize = 10,
  onRowClick,
  toolbar,
  exportName,
  loading,
  error,
}: Props<T>) {
  const { t } = useI18n();
  const [q, setQ] = useState("");
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState<{ key: string; dir: 1 | -1 } | null>(null);
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [colMenu, setColMenu] = useState(false);

  const visible = columns.filter((c) => !hidden.has(c.key));

  const filtered = useMemo(() => {
    let r = rows;
    if (q && searchText) r = r.filter((x) => searchText(x).toLowerCase().includes(q.toLowerCase()));
    const col = sort && columns.find((c) => c.key === sort.key);
    if (sort && col?.value) {
      const value = col.value;
      r = [...r].sort((a, b) => {
        const va = value(a);
        const vb = value(b);
        return (va < vb ? -1 : va > vb ? 1 : 0) * sort.dir;
      });
    }
    return r;
  }, [rows, q, sort, columns, searchText]);

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const cur = Math.min(page, pages - 1);
  const slice = filtered.slice(cur * pageSize, cur * pageSize + pageSize);

  const exportCsv = () => {
    const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const cols = columns.filter((c) => c.value);
    const head = cols.map((c) => esc(t(c.header))).join(",");
    const body = filtered.map((r) => cols.map((c) => esc(c.value!(r))).join(",")).join("\n");
    const blob = new Blob(["﻿" + head + "\n" + body], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${exportName || "export"}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="table-wrap">
      <div className="table-tools">
        {searchText && (
          <Input
            className="h-10 max-w-[280px] bg-card"
            placeholder={t(searchPlaceholder)}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(0);
            }}
            aria-label={t("Qidirish")}
          />
        )}
        {toolbar}
        <div style={{ flex: 1 }} />
        <div style={{ position: "relative" }}>
          <Button variant="outline" size="sm" onClick={() => setColMenu((v) => !v)}>
            {t("Ustunlar")}
          </Button>
          {colMenu && (
            <div className="card" style={{ position: "absolute", right: 0, top: 36, zIndex: 5, width: 200, padding: 12 }}>
              {columns
                .filter((c) => c.header)
                .map((c) => (
                  <label key={c.key} style={{ display: "flex", gap: 8, padding: "4px 0", alignItems: "center" }}>
                    <Checkbox checked={!hidden.has(c.key)} onCheckedChange={() => setHidden((h) => toggle(h, c.key))} />
                    {t(c.header)}
                  </label>
                ))}
            </div>
          )}
        </div>
        {exportName && (
          <Button variant="outline" size="sm" onClick={exportCsv}>
            {t("CSV eksport")}
          </Button>
        )}
      </div>

      <div className="table-scroll">
        <table className="t">
          <thead>
            <tr>
              {visible.map((c) => (
                <th
                  key={c.key}
                  className={`${c.align === "right" ? "num" : ""} ${c.sortable ? "sortable" : ""}`}
                  onClick={() =>
                    c.sortable && setSort((s) => (s?.key === c.key ? { key: c.key, dir: (s.dir * -1) as 1 | -1 } : { key: c.key, dir: 1 }))
                  }
                >
                  {t(c.header)}
                  {sort?.key === c.key ? (sort.dir === 1 ? " ▲" : " ▼") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!loading &&
              slice.map((r) => (
                <tr key={rowKey(r)} className={onRowClick ? "click" : ""} onClick={() => onRowClick?.(r)}>
                  {visible.map((c) => (
                    <td key={c.key} className={c.align === "right" ? "num" : ""}>
                      {c.render ? c.render(r) : (c.value?.(r) ?? "")}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        {loading && <LoadingRows />}
        {!loading && error && (
          <div className="empty err" style={{ color: "var(--accent)" }}>
            {t(error)}
          </div>
        )}
        {!loading && !error && filtered.length === 0 && <div className="empty">{t("Ma'lumot topilmadi")}</div>}
      </div>

      <div className="pager">
        <span>
          {t("Jami")}: {filtered.length}
        </span>
        <div className="row">
          <Button variant="outline" size="sm" disabled={cur === 0} onClick={() => setPage(cur - 1)}>
            ‹ {t("Oldingi")}
          </Button>
          <span>
            {cur + 1} / {pages}
          </span>
          <Button variant="outline" size="sm" disabled={cur >= pages - 1} onClick={() => setPage(cur + 1)}>
            {t("Keyingi")} ›
          </Button>
        </div>
      </div>
    </div>
  );
}
