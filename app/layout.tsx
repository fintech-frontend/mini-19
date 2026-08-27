import type { Metadata } from "next";
import Header from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { ShopProvider } from "@/context/ShopContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Стройоптторг",
  description: "Интернет-магазин товаров для строительства и ремонта",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <ShopProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
