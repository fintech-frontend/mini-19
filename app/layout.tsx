import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Стройоптторг",
  description: "Интернет-магазин товаров для строительства и ремонта",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
