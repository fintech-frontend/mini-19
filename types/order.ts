export type DeliveryMethod = "pickup" | "store-delivery" | "sdek";

export type StoreDeliverySubMethod = "courier" | "pvz";

export type PaymentMethod = "card" | "cash-on-pickup" | "credit-otp" | "installment-sber";

export interface OrderItemLine {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export interface OrderCustomer {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone: string;
  comment?: string;
}

export interface SubmittedOrder {
  number: string;
  date: string;
  items: OrderItemLine[];
  subtotal: number;
  discount: number;
  deliveryCost: number;
  total: number;
  deliveryMethod: DeliveryMethod;
  deliveryLabel: string;
  paymentMethod: PaymentMethod;
  paymentLabel: string;
  customer: OrderCustomer;
  address?: string;
}
