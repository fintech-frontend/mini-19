export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  article: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  gallery: string[];
  category: string;
  description: string;
  inStock: boolean;
  specs: ProductSpec[];
  articul?: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isSeasonal?: boolean;
}
