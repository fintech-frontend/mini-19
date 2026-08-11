import { DeliveryAddress, Order, UserProfile } from "@/types/account";

export const currentUser: UserProfile = {
  firstName: "Евгений",
  fullName: "Евгений Иванов",
  email: "example@email.com",
  phone: "+7 (950) 373-48-53",
  region: "Москва",
};

export const deliveryAddress: DeliveryAddress = {
  fullName: "Евгений Иванов",
  address: "098734, Москва, Россия, улица Варшавская, 315, кв.574",
  phone: "+7 (950) 373-48-53",
  email: "example@email.com",
};

export const favoriteProductIds = ["1", "2", "3"];

export const orders: Order[] = [
  { number: "#2365341-11", date: "16 Августа 2023", status: "processing", total: 36829 },
  { number: "#2356576-13", date: "1 Августа 2023", status: "completed", total: 11299 },
  { number: "#577598-26", date: "17 Июля 2023", status: "cancelled", total: 1311 },
  { number: "#436879-12", date: "11 Января 2023", status: "processing", total: 12889 },
  { number: "#2365341-11", date: "10 Декабря 2022", status: "processing", total: 2829 },
  { number: "#2298104-07", date: "2 Декабря 2022", status: "completed", total: 8420 },
  { number: "#2287651-19", date: "20 Ноября 2022", status: "completed", total: 5390 },
  { number: "#2256390-04", date: "5 Ноября 2022", status: "cancelled", total: 1990 },
  { number: "#2214980-22", date: "28 Октября 2022", status: "processing", total: 24750 },
  { number: "#2198765-15", date: "14 Октября 2022", status: "completed", total: 3120 },
  { number: "#2154321-08", date: "30 Сентября 2022", status: "completed", total: 15680 },
  { number: "#2109876-31", date: "9 Сентября 2022", status: "processing", total: 7240 },
];
