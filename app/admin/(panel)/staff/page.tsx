"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/admin/toast";
import { Confirm, PageHeader, StatusBadge } from "@/components/admin/ui";
import { MODULES, ROLE_LABEL } from "@/lib/admin/auth";
import { useI18n } from "@/lib/admin/i18n";
import { PERMISSIONS, ROLES } from "@/lib/admin/rbac";
import { approveStaff, removeStaff, useStaffList, type StaffAccount } from "@/lib/admin/staffDb";

export default function StaffPage() {
  const { t } = useI18n();
  const staff = useStaffList();
  const pending = staff.filter((a) => a.status === "PENDING");
  const active = staff.filter((a) => a.status === "ACTIVE");
  const [kicking, setKicking] = useState<StaffAccount | null>(null);

  const decide = (a: StaffAccount, yes: boolean) => {
    if (yes) {
      approveStaff(a.id);
      toast(`${a.name} — ${t("qabul qilindi")}`);
    } else {
      removeStaff(a.id);
      toast(`${a.name} — ${t("rad etildi")}`, "info");
    }
  };

  return (
    <>
      <PageHeader title="Xodimlar va rollar" sub="Ruxsatlar matritsasi (server ham har so'rovda tekshiradi)" />

      <div className="table-wrap" style={{ marginBottom: 20 }}>
        <div className="table-scroll">
          <h3 style={{ padding: "16px 16px 0" }}>
            {t("Qabul kutayotgan so'rovlar")} {pending.length > 0 && <StatusBadge tone="yellow">{String(pending.length)}</StatusBadge>}
          </h3>
          <table className="t">
            <thead>
              <tr>
                <th>{t("Ism")}</th>
                <th>{t("Telefon")}</th>
                <th>{t("Rol")}</th>
                <th>{t("Sana")}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {pending.length === 0 && (
                <tr>
                  <td colSpan={5}>{t("Yangi so'rov yo'q")}</td>
                </tr>
              )}
              {pending.map((a) => (
                <tr key={a.id}>
                  <td>{a.name}</td>
                  <td>{a.phone}</td>
                  <td>{t(ROLE_LABEL[a.role])}</td>
                  <td>{new Date(a.createdAt).toLocaleString()}</td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <Button size="sm" onClick={() => decide(a, true)}>
                      {t("Ha")}
                    </Button>{" "}
                    <Button size="sm" variant="outline" onClick={() => decide(a, false)}>
                      {t("Yo'q")}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="table-wrap" style={{ marginBottom: 20 }}>
        <div className="table-scroll">
          <h3 style={{ padding: "16px 16px 0" }}>{t("Faol xodimlar")}</h3>
          <table className="t">
            <thead>
              <tr>
                <th>{t("Ism")}</th>
                <th>{t("Telefon")}</th>
                <th>{t("Rol")}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {active.length === 0 && (
                <tr>
                  <td colSpan={4}>{t("Hozircha xodim yo'q")}</td>
                </tr>
              )}
              {active.map((a) => (
                <tr key={a.id}>
                  <td>{a.name}</td>
                  <td>{a.phone}</td>
                  <td>{t(ROLE_LABEL[a.role])}</td>
                  <td>
                    <Button size="sm" variant="outline" onClick={() => setKicking(a)}>
                      {t("Chiqarib yuborish")}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="table-wrap">
        <div className="table-scroll">
          <table className="t perm-table">
            <thead>
              <tr>
                <th>{t("Modul")}</th>
                {ROLES.map((r) => (
                  <th key={r}>{t(ROLE_LABEL[r])}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MODULES.map((m) => (
                <tr key={m.key}>
                  <td>{t(m.label)}</td>
                  {ROLES.map((r) => (
                    <td key={r}>
                      <Checkbox className="mx-auto" checked={PERMISSIONS[r].includes(m.key)} disabled aria-label={`${t(ROLE_LABEL[r])} — ${t(m.label)}`} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {kicking && (
        <Confirm
          title="Akkauntni chiqarib yuborish"
          danger
          confirmLabel="Chiqarib yuborish"
          text="Xodim qayta ro'yxatdan o'tishi kerak bo'ladi."
          onClose={() => setKicking(null)}
          onConfirm={() => {
            removeStaff(kicking.id);
            toast(`${kicking.name} — ${t("chiqarib yuborildi")}`, "info");
            setKicking(null);
          }}
        />
      )}
    </>
  );
}
