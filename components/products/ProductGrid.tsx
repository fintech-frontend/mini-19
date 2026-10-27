import ProductCard from "@/components/ui/ProductCard";
import { ResolvedProduct } from "@/lib/resolveProduct";

interface ProductGridProps {
  products: ResolvedProduct[];
  emptyMessage?: string;
}

export default function ProductGrid({ products, emptyMessage }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-gray-400">
        {emptyMessage ?? "В этой категории пока нет товаров."}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
