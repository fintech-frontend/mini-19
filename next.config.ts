import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.stroiopttorg.ru',
        pathname: '**',
      },
    ],
  },
  /**
   * Навбар и футер ссылаются на /about и /contacts, а у эталонного сайта те же
   * страницы живут по адресам /o-kompanii и /kontakty. Держим оба адреса рабочими:
   * ссылки внутри приложения не трогаем, а «оригинальные» URL уводим редиректом,
   * чтобы не заводить вторую копию страницы.
   */
  redirects() {
    return [
      { source: '/o-kompanii', destination: '/about', permanent: true },
      { source: '/kontakty', destination: '/contacts', permanent: true },
      // Навбар и футер ссылаются на /payment, а страница живёт по адресу оригинала.
      { source: '/payment', destination: '/oplata', permanent: true },
      // То же самое для «Вопрос-ответ»: ссылки ведут на /faq, страница — /vopros-otvet.
      { source: '/faq', destination: '/vopros-otvet', permanent: true },
      // Избранное: ссылки в навбаре ведут на /favorites, у оригинала адрес /izbrannoe.
      { source: '/izbrannoe', destination: '/favorites', permanent: true },
    ];
  },
};

export default nextConfig;
