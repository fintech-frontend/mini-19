import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AdminApp } from "@/components/admin/AdminApp";
import { themeInitScript } from "@/lib/admin/theme";
import "./admin.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Stroyopttorg Admin",
  robots: { index: false, follow: false },
};

/**
 * Admin panel (/admin/*). Vitrina oformleniyasi (app/(site)) bu yerga kirmaydi —
 * o'z stillari (admin.css), shrifti va provayderlari bor.
 */
export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return (
    <>
      {/* Tema gidratsiyadan oldin qo'yiladi — qorong'i rejimda yorug' "miltillash" bo'lmasin */}
      <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      <style href="admin-font" precedence="default">{`:root{--admin-font:${inter.style.fontFamily}}`}</style>
      <AdminApp>{children}</AdminApp>
    </>
  );
}
