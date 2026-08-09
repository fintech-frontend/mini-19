import type { Metadata } from "next";
<<<<<<< HEAD
=======
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer"
>>>>>>> 79350449f2761e59bd83717106924f9f1620133b
import "./globals.css";


export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Стройоптторг",
  description: "Интернет-магазин товаров для строительства и ремонта",
=======
  title: "СТРОЙОПТТОРГ",
  description: "Всё для строительства и ремонта",
>>>>>>> 79350449f2761e59bd83717106924f9f1620133b
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="ru" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <main className="flex-1">{children}</main>
=======
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
>>>>>>> 79350449f2761e59bd83717106924f9f1620133b
      </body>
    </html>
  );
}