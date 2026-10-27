export interface Stock {
  id: string;
  title: string;
  badge: string;
  discountLabel: string;
  validUntil: string;
  image: string;
  description: string[];
  offerTitle: string;
  offerText: string[];
  promoCode?: string;
}
