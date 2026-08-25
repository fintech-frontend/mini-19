export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  gallery: string[];
  category: string;
  description: string;
  inStock: boolean;
  specs: ProductSpec[];
  articul?: string;
}
