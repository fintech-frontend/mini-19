export type OrderStatus = "processing" | "completed" | "cancelled";

export type AccountTab = "overview" | "profile" | "orders" | "address" | "favorites" | "password";

export interface Order {
  number: string;
  date: string;
  status: OrderStatus;
  total: number;
}

export interface UserProfile {
  firstName: string;
  fullName: string;
  email: string;
  phone: string;
  region: string;
}

export interface DeliveryAddress {
  fullName: string;
  address: string;
  phone: string;
  email: string;
}
