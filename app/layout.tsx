import { Providers } from "./providers";

/**
 * Корневой layout общий для витрины (app/(site)) и админ-панели (app/(admin)).
 * Здесь только то, что нужно обеим частям: документ и Redux (RTK Query) —
 * стили и оформление каждая группа подключает в своём layout.
 * suppressHydrationWarning: админка выставляет data-theme на <html> до гидрации.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
