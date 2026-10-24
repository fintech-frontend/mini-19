import { baseApi } from "./baseApi";
import {
  ABOUT_NEWS_LIMIT,
  companyAdvantages,
  companyCertificates,
  companyHistory,
  companyIntro,
  companyReviews,
  companyToday,
} from "@/data/about-data";
import { getPostHref, getPostsByCategory } from "@/data/blog-data";
import {
  consultForm,
  contactDepartments,
  contactRegions,
  contactRequisites,
  contactsCard,
  contactsMap,
  contactsTitle,
} from "@/data/contacts-data";
import { paymentBlocks, paymentPromos, paymentSubscribe, paymentTitle } from "@/data/payment-data";
import { privacyBlocks, privacyTitle } from "@/data/privacy-data";
import { faqItems, faqPromos, faqSubscribe, faqTitle } from "@/mocks/faq";
import type { CompanyNewsItem, CompanyProfile } from "@/types/company";
import type { ConsultRequestPayload, ConsultRequestResult, ContactsPageContent } from "@/types/contacts";
import type { FAQPageContent } from "@/types/faq";
import type { PaymentPageContent } from "@/types/payment";
import type { PrivacyPageContent } from "@/types/privacy";
import type { SubscribeRequestPayload, SubscribeRequestResult } from "@/types/reference";

/**
 * Контентные страницы и формы обратной связи.
 *
 * Этих разделов в документации бэкенда нет (только shop + auth), поэтому запросы
 * отдают локальные данные из data/ и mocks/. Когда маршруты появятся, достаточно
 * заменить `queryFn` на `query: () => "/<путь>/"` — хуки и страницы не изменятся.
 *
 * Пути форм читаются из окружения (NEXT_PUBLIC_CONSULT_ENDPOINT,
 * NEXT_PUBLIC_SUBSCRIBE_ENDPOINT). Пока путь не задан, мутация честно возвращает
 * `ok: false`, а не имитирует успех.
 */
const CONSULT_ENDPOINT = process.env.NEXT_PUBLIC_CONSULT_ENDPOINT?.trim();
const SUBSCRIBE_ENDPOINT = process.env.NEXT_PUBLIC_SUBSCRIBE_ENDPOINT?.trim();

export const contentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCompanyProfile: build.query<CompanyProfile, void>({
      queryFn: () => ({
        data: {
          intro: companyIntro,
          advantages: companyAdvantages,
          history: companyHistory,
          today: companyToday,
          certificates: companyCertificates,
          reviews: companyReviews,
        },
      }),
    }),

    /** Последние новости блога — для слайдера на /about. */
    getCompanyNews: build.query<CompanyNewsItem[], number | void>({
      queryFn: (limit) => ({
        data: getPostsByCategory()
          .slice(0, typeof limit === "number" ? limit : ABOUT_NEWS_LIMIT)
          .map((post) => ({
            id: `${post.category}/${post.slug}`,
            href: getPostHref(post),
            image: post.image,
            title: post.title,
            excerpt: post.excerpt,
            date: post.date,
          })),
      }),
    }),

    getContactsPage: build.query<ContactsPageContent, void>({
      queryFn: () => ({
        data: {
          title: contactsTitle,
          map: contactsMap,
          card: contactsCard,
          departments: contactDepartments,
          requisites: contactRequisites,
          regions: contactRegions,
          consult: consultForm,
        },
      }),
    }),

    getFaqPage: build.query<FAQPageContent, void>({
      queryFn: () => ({ data: { title: faqTitle, items: faqItems, promos: faqPromos, subscribe: faqSubscribe } }),
    }),

    getPaymentPage: build.query<PaymentPageContent, void>({
      queryFn: () => ({
        data: { title: paymentTitle, blocks: paymentBlocks, promos: paymentPromos, subscribe: paymentSubscribe },
      }),
    }),

    getPrivacyPage: build.query<PrivacyPageContent, void>({
      queryFn: () => ({ data: { title: privacyTitle, blocks: privacyBlocks } }),
    }),

    /** Форма «У вас есть вопросы?» (/contacts). */
    submitConsultRequest: build.mutation<ConsultRequestResult, ConsultRequestPayload>({
      queryFn: async (body, _api, _extra, baseQuery) => {
        if (!CONSULT_ENDPOINT) {
          return {
            data: {
              ok: false,
              message:
                "Форма обратной связи ещё не подключена к серверу. Позвоните нам по телефону 8 (8782) 28-42-72 — мы ответим сразу.",
            },
          };
        }
        const { error } = await baseQuery({ url: CONSULT_ENDPOINT, method: "POST", body });
        if (error) return { error };
        return { data: { ok: true, message: "Спасибо! Мы получили ваш вопрос и свяжемся с вами в ближайшее время." } };
      },
    }),

    /** Подписка на рассылку — форма в правой колонке /oplata, /vopros-otvet. */
    subscribeToNewsletter: build.mutation<SubscribeRequestResult, SubscribeRequestPayload>({
      queryFn: async (body, _api, _extra, baseQuery) => {
        if (!SUBSCRIBE_ENDPOINT) {
          return { data: { ok: false, message: "Подписка ещё не подключена к серверу. Попробуйте позже." } };
        }
        const { error } = await baseQuery({ url: SUBSCRIBE_ENDPOINT, method: "POST", body });
        if (error) return { error };
        return { data: { ok: true, message: "Спасибо! Вы подписаны на рассылку." } };
      },
    }),
  }),
});

export const {
  useGetCompanyProfileQuery,
  useGetCompanyNewsQuery,
  useGetContactsPageQuery,
  useGetFaqPageQuery,
  useGetPaymentPageQuery,
  useGetPrivacyPageQuery,
  useSubmitConsultRequestMutation,
  useSubscribeToNewsletterMutation,
} = contentApi;
