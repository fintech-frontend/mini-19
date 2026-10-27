"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Calculator,
  CheckCircle2,
  CreditCard,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Package,
  PenLine,
  Phone,
  User as UserIcon,
  Warehouse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LangSwitch, ThemeToggle } from "@/components/admin/Prefs";
import { ROLE_LABEL, useAuth } from "@/lib/admin/auth";
import { useI18n } from "@/lib/admin/i18n";
import { registerStaff, type StaffAccount } from "@/lib/admin/staffDb";
import { sanitizePhone } from "@/lib/input";

const ROLES: { key: StaffAccount["role"]; desc: string; icon: typeof Briefcase }[] = [
  { key: "MANAGER", desc: "Savdo va operatsiya", icon: Briefcase },
  { key: "WAREHOUSE", desc: "Ombor va buyurtmalar", icon: Warehouse },
  { key: "ACCOUNTANT", desc: "To'lov va hisobotlar", icon: Calculator },
  { key: "CONTENT", desc: "Mahsulot kontenti", icon: PenLine },
];

const INPUT = "h-auto bg-card py-3 pl-10";

export default function AdminLoginPage() {
  const { user, ready, login } = useAuth();
  const { t } = useI18n();
  const router = useRouter();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [role, setRole] = useState<StaffAccount["role"]>("MANAGER");
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (ready && user) router.replace("/admin");
  }, [ready, user, router]);

  if (!ready || user) return null;

  const switchMode = (m: "login" | "register") => {
    setMode(m);
    setErr("");
    setSent(false);
    setPw("");
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr("");
    try {
      if (mode === "login") {
        await login(id, pw);
      } else {
        if (name.trim().length < 2) throw new Error("Ism kiriting");
        if (id.replace(/\D/g, "").length < 9) throw new Error("Telefon raqamni to'g'ri kiriting");
        if (pw.length < 6) throw new Error("Parol kamida 6 ta belgi bo'lsin");
        registerStaff({ name, phone: id, password: pw, role });
        setSent(true);
      }
    } catch (x) {
      setErr((x as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-prefs">
        <LangSwitch />
        <ThemeToggle />
      </div>

      <section className="login-hero">
        <div className="brand">
          <span className="logo">S</span>Stroyopttorg
        </div>
        <div className="hero-body">
          <h2>{t("Qurilish mollari do'konini bitta joydan boshqaring")}</h2>
          <p>{t("Mahsulotlar, buyurtmalar, to'lovlar, ombor va foyda — hammasi bir panelda.")}</p>
          <ul className="hero-feats">
            <li>
              <span>
                <Package size={18} />
              </span>
              {t("Mahsulot va ombor nazorati")}
            </li>
            <li>
              <span>
                <CreditCard size={18} />
              </span>
              {t("To'lovlar va refundlar")}
            </li>
            <li>
              <span>
                <BarChart3 size={18} />
              </span>
              {t("Sotuv va foyda hisobotlari")}
            </li>
          </ul>
        </div>
        <div className="hero-foot">© Stroyopttorg Admin</div>
      </section>

      <section className="login-form-wrap">
        <div className="login-mobile-brand">
          <span className="logo">S</span>Stroyopttorg
        </div>
        <form className="login-card" onSubmit={submit}>
          {sent ? (
            <div style={{ textAlign: "center" }}>
              <CheckCircle2 size={48} style={{ color: "var(--green)", margin: "0 auto 12px" }} />
              <h1>{t("So'rov yuborildi")}</h1>
              <p className="login-sub">{t("Super adminga SMS ketdi. U sizni tasdiqlagach, telefon raqam va parol bilan kira olasiz.")}</p>
              <Button type="button" size="lg" className="h-11 w-full" onClick={() => switchMode("login")}>
                {t("Kirish sahifasiga")}
              </Button>
            </div>
          ) : (
            <>
              <h1>{t(mode === "login" ? "Xush kelibsiz" : "Ro'yxatdan o'tish")}</h1>
              <p className="login-sub">{t(mode === "login" ? "Hisobingizga kiring" : "Ro'yxatdan o'ting, Super admin tasdiqlaydi")}</p>

              {mode === "register" && (
                <div className="field">
                  <Label htmlFor="name">{t("Ism familiya")}</Label>
                  <div className="input-icon">
                    <UserIcon size={18} />
                    <Input id="name" className={INPUT} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" autoFocus />
                  </div>
                </div>
              )}

              <div className="field">
                <Label htmlFor="id">{t(mode === "login" ? "Login yoki telefon" : "Telefon raqam")}</Label>
                <div className="input-icon">
                  {mode === "login" ? <Mail size={18} /> : <Phone size={18} />}
                  <Input
                    id="id"
                    className={INPUT}
                    placeholder={mode === "login" ? "superadmin / +998901234567" : "+998901234567"}
                    value={id}
                    onChange={(e) => setId(mode === "register" ? sanitizePhone(e.target.value) : e.target.value)}
                    autoComplete="username"
                    autoFocus={mode === "login"}
                  />
                </div>
              </div>

              <div className="field">
                <Label htmlFor="pw">{t("Parol")}</Label>
                <div className="input-icon">
                  <Lock size={18} />
                  <Input
                    id="pw"
                    className={`${INPUT} pr-10`}
                    type={show ? "text" : "password"}
                    placeholder="••••••••"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    autoComplete={mode === "login" ? "current-password" : "new-password"}
                  />
                  <button
                    type="button"
                    className="eye"
                    aria-label={show ? t("Parolni yashirish") : t("Parolni ko'rsatish")}
                    onClick={() => setShow(!show)}
                  >
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {mode === "register" && (
                <div className="field">
                  <Label>{t("Rol")}</Label>
                  <div className="role-grid" role="radiogroup" aria-label={t("Rol")}>
                    {ROLES.map((r) => (
                      <button
                        type="button"
                        key={r.key}
                        role="radio"
                        aria-checked={role === r.key}
                        className={`role-card ${role === r.key ? "active" : ""}`}
                        onClick={() => setRole(r.key)}
                      >
                        <span className="role-ico">
                          <r.icon size={18} />
                        </span>
                        <span className="role-txt">
                          <b>{t(ROLE_LABEL[r.key])}</b>
                          <small>{t(r.desc)}</small>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {err && (
                <div className="field">
                  <span className="err">{t(err)}</span>
                </div>
              )}

              <Button type="submit" size="lg" className="mt-2 h-11 w-full" disabled={busy}>
                {busy ? (
                  t("Kuting…")
                ) : (
                  <>
                    {t(mode === "login" ? "Kirish" : "So'rov yuborish")} <ArrowRight size={18} />
                  </>
                )}
              </Button>

              <p style={{ textAlign: "center", marginTop: 16 }}>
                {mode === "login" ? t("Akkauntingiz yo'qmi?") : t("Akkauntingiz bormi?")}{" "}
                <button
                  type="button"
                  className="font-medium text-[var(--link)] hover:underline"
                  onClick={() => switchMode(mode === "login" ? "register" : "login")}
                >
                  {t(mode === "login" ? "Ro'yxatdan o'tish" : "Kirish")}
                </button>
              </p>
            </>
          )}
        </form>
      </section>
    </div>
  );
}
