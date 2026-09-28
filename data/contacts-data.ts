import type {
  ConsultFormConfig,
  ContactDepartment,
  ContactRegionsBlock,
  ContactRequisites,
  ContactsCard,
  ContactsMap,
} from "@/types/contacts";

/**
 * Контент страницы «Контакты». Держим его здесь, а не в разметке, чтобы компоненты
 * в components/contacts/* работали только с данными: когда появятся реальные
 * эндпоинты, lib/api/contacts.ts начнёт отдавать те же типы с сервера, а UI
 * останется прежним (тот же приём уже применён в data/about-data.ts).
 *
 * Тексты, телефоны, адреса и реквизиты сняты со страницы
 * https://www.stroiopttorg.ru/kontakty/ — это эталон, с которым сверяется вёрстка.
 */

/** Заголовок H1 и последняя крошка. */
export const contactsTitle = "Контакты";

/**
 * Виджет Яндекс.Карт из оригинала. Вынесен в данные, а не в JSX: у боевого
 * бэкенда это, скорее всего, будет настраиваемое поле, а не константа вёрстки.
 */
export const contactsMap: ContactsMap = {
  embedUrl:
    "https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=false&source=constructor-api&um=constructor%3A118b76b1d6a2d3c1b4c918c9e8b0158629e7341b2ffeda1862f58f5ef5bd73d8",
  title: "Карта: ООО «Стройоптторг», г. Черкесск, ул. Октябрьская, 301",
};

export const contactsCard: ContactsCard = {
  legalName: "ООО «Стройоптторг»",
  address: {
    postalCode: "369012",
    region: "Карачаево-Черкесская Республика",
    locality: "г. Черкесск",
    street: "ул Октябрьская,  дом 301",
  },
  phone: { label: "8 (8782) 28-42-72", tel: "88782284272" },
  email: "info@stroiopttorg.ru",
  schedule: {
    label: "Ежедневно, с 8:00 до 17:00",
    note: "Без перерыва и выходных",
    machine: "Mo-Su 8:00-18:00",
  },
  callButtonLabel: "Заказать звонок",
};

/** Восемь карточек отделов под картой (сетка 4 колонки × 2 ряда на десктопе). */
export const contactDepartments: ContactDepartment[] = [
  {
    id: "director",
    title: "Генеральный директор:",
    phone: { label: "8 (8782) 28-42-67 (приемная)", tel: "88782284267" },
  },
  {
    id: "supply",
    title: "Отдел снабжения:",
    phone: { label: "8 (8782) 28-42-67", tel: "88782284267" },
  },
  {
    id: "sales",
    title: "Отдел сбыта:",
    phone: { label: "8(8782) 28-45-81", tel: "88782284581" },
  },
  {
    id: "legal",
    title: "Юридический отдел:",
    phone: { label: "8 (8782) 28-42-69", tel: "88782284269" },
  },
  {
    id: "accounting",
    title: "Бухгалтерия:",
    phone: { label: "8 (8782) 28-42-71", tel: "88782284271" },
  },
  {
    id: "delivery",
    title: "Отдел доставки:",
    phone: { label: "8 (8782) 28-45-83", tel: "88782284583" },
  },
  {
    id: "credit",
    title: "Кредитный отдел:",
    phone: { label: "8 (8782) 28-45-82", tel: "88782284582" },
  },
  {
    id: "hr",
    title: "Отдел кадров:",
    phone: { label: "8 (8782) 28-42-73", tel: "88782284273" },
  },
];

export const contactRequisites: ContactRequisites = {
  title: "Реквизиты:",
  text:
    'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СТРОЙОПТТОРГ"ИНН 0901051787КПП ' +
    "090101001369000, Карачаево-Черкесская республика, город Черкесск, Октябрьская " +
    "улица, 301р/с 40702810360000102415 в Ставропольское отделение №5230 ПАО Сбербанк, " +
    "БИК 040702615",
};

/** Единый номер и почта для всех региональных представительств. */
const REGION_PHONE = { label: "+7 (800) 444-00-65", tel: "+78004440065" };
const REGION_EMAIL = "info@stroiopttorg.ru";

export const contactRegions: ContactRegionsBlock = {
  title: "Работаем по регионам:",
  items: [
    {
      id: "moscow",
      city: "Москва",
      address: "127015, Бумажный пр., 19, стр. 2",
      phone: REGION_PHONE,
      email: REGION_EMAIL,
    },
    {
      id: "stavropol",
      city: "Ставрополь",
      address: "355037, ул. Доваторцев, 38Д",
      phone: REGION_PHONE,
      email: REGION_EMAIL,
    },
    {
      id: "krasnodar",
      city: "Краснодар",
      address: "350002, Северная ул., 490",
      phone: REGION_PHONE,
      email: REGION_EMAIL,
    },
    {
      id: "grozny",
      city: "Грозный",
      address: "364024, ул. Шейха Али Митаева, 17",
      phone: REGION_PHONE,
      email: REGION_EMAIL,
    },
    {
      id: "rostov",
      city: "Ростов-на-Дону",
      address: "344006, Нижнебульварная ул., 6",
      phone: REGION_PHONE,
      email: REGION_EMAIL,
    },
    {
      id: "samara",
      city: "Самара",
      address: "443080, Московское ш., 41",
      phone: REGION_PHONE,
      email: REGION_EMAIL,
    },
  ],
};

export const consultForm: ConsultFormConfig = {
  titleLine1: "У вас есть вопросы?",
  titleLine2: "С радостью ответим на них!",
  fields: [
    { name: "name", label: "Ваше имя", placeholder: "Введите ваше имя", required: true },
    { name: "phone", label: "Номер телефона", placeholder: "+7 (___) ___-__-__", required: true },
    { name: "message", label: "Текст сообщения", placeholder: "Введите ваш вопрос", required: true },
  ],
  submitLabel: "Отправить",
  consentText: "Согласен с обработкой персональных данных в соответствии с",
  consentLinkLabel: "политикой конфиденциальности",
  consentLinkHref: "/privacy-policy",
};
