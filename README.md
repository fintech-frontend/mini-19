# Stroyopttorg — sayt va admin panel

Bitta Next.js loyiha: do'kon sayti (`/`) va admin panel (`/admin`).

```bash
npm install
npm run dev     # http://localhost:3000 va http://localhost:3000/admin
npm run build
```

Sozlash: `.env.example` dan `.env.local` yarating (izohlar faylning o'zida).

## Tuzilma

| Joy | Nima |
|---|---|
| `app/layout.tsx` | Umumiy root: `<html>`, `<body>`, Redux (RTK Query) |
| `app/(site)/` | Sayt sahifalari. Oformleniyasi `components/site/SiteShell.tsx` da (stillar, shapka, footer, savat) |
| `app/admin/` | Admin panel. O'z stillari (`admin.css`), shrifti va provayderlari bor |
| `app/admin/(panel)/` | Kirishdan keyingi sahifalar: sidebar, topbar va rol tekshiruvi (`components/admin/AdminShell.tsx`) |
| `app/api/admin/` | Admin serveri: `auth` (login/sessiya), `fhp` (Fintechhub proxy) |
| `components/ui/` | shadcn komponentlari (base-ui). Sayt va admin uchun umumiy |
| `components/admin/` | Admin bloklari: jadval, forma oynalari, status badge, … |
| `lib/admin/` | Admin: rollar (`rbac.ts`), sessiya, til (uz/ru/en), tema, format |
| `lib/admin/server/` | Faqat server: cookie sessiya, Fintechhub imzosi (`server-only`) |
| `lib/store/api/` | **Yagona API qatlami** (RTK Query): sayt ham, admin ham shu hook'lardan foydalanadi |

Sayt va admin turli root stillarga ega (admin.css ↔ globals.css), shuning uchun ular o'rtasida
`<Link>` emas, oddiy `<a>` (to'liq sahifa yuklanishi) ishlatiladi.

## API

- **Do'kon backendi** (`NEXT_PUBLIC_API_URL`, standart `http://16.170.163.62/api`): mahsulotlar, kategoriyalar,
  brendlar, savat, buyurtmalar. Endpoint'lar `lib/store/api/*Api.ts` da. Admin ham shularni ishlatadi:
  mahsulot, kategoriya va brend CRUD, buyurtmalar ro'yxati va statusni o'zgartirish (`PATCH /orders/:id/`).
- **Fintechhub-payment** ([hujjat](http://159.223.145.49:3078)): Merchant API har so'rovda
  `Auth: <merchant_user_id>:sha1(timestamp + secret):<timestamp>` talab qiladi. Kalitlar faqat serverda turadi:
  brauzer `/api/admin/fhp` ga murojaat qiladi, imzoni `lib/admin/server/fhp.ts` qo'yadi. Imkoniyatlar: ulanish
  holati, to'lov statusi (payment ID yoki buyurtma raqami bo'yicha), refund, invoice.
  Hook'lari `lib/store/api/adminApi.ts` da.

## Admin panelga kirish

- **Server akkauntlari**: `ADMIN_USERS="login:parol:ROL,…"` + `ADMIN_SESSION_SECRET` (kamida 32 belgi).
  Sessiya HttpOnly imzolangan cookie'da (12 soat). Fintechhub faqat shu akkauntlar bilan ishlaydi.
- **Demo rejim**: server sozlanmagan va faqat `next dev` da ishlaydi (`NEXT_PUBLIC_ADMIN_DEMO_*`).
  Productionda o'chiq.
- **Xodimlar** (ro'yxatdan o'tish va Super admin tasdig'i) hozircha brauzer localStorage'ida (mock),
  chunki backendda xodimlar uchun endpoint yo'q.

Rollar: `SUPER_ADMIN`, `MANAGER`, `WAREHOUSE`, `ACCOUNTANT`, `CONTENT` (matritsa: `lib/admin/rbac.ts`). Refund faqat
`SUPER_ADMIN` va `ACCOUNTANT` uchun, server ham tekshiradi.

## Backendda yetishmayotganlar

- Foydalanuvchilar ro'yxati yo'q: "Mijozlar" buyurtmalardagi `user` id bo'yicha yig'iladi.
- Buyurtma tarkibi, yetkazish va mijoz ma'lumotlari API'da saqlanmaydi (`POST /orders/` faqat `number`/`subtotal`/`total`/`user` oladi).
- Fintechhub Shop API callback'lari (`prepare_url` / `complete_url`) do'kon backendida bo'lishi kerak.
  Merchant API'da to'lovlar ro'yxati endpointi yo'q.
