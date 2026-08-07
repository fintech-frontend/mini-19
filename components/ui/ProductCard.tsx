import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-RU") + " ₽";
  };

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <Link href={`/products/${product.id}`} className="relative block aspect-square w-full bg-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Нет в наличии
          </span>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">
          {product.category}
        </span>

        <Link href={`/products/${product.id}`} className="flex-grow">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors duration-150 mb-2 min-h-[40px]">
            {product.title}
          </h3>
        </Link>

        <div className="mt-auto pt-3 border-t border-gray-50">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs text-gray-400 font-medium">Цена</p>
              <p className="text-base font-bold text-gray-900">{formatPrice(product.price)}</p>
            </div>

            <button
              disabled={!product.inStock}
              className={`p-2.5 rounded-lg transition-all duration-150 ${
                product.inStock
                  ? "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              title="Добавить в корзину"
            >
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
