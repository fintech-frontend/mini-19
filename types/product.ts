export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  /** Артикул в товарах из staticProducts (каталог «Продукты») */
  article?: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  gallery: string[];
  category: string;
  description: string;
  inStock: boolean;
  specs: ProductSpec[];
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isSeasonal?: boolean;
  /** Артикул в товарах из каталога Create-Blog (ventilyatory-data и др.) */
  articul?: string;
}
