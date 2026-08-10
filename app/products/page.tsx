import ProductCard from '@/components/ui/ProductCard'
import { staticProducts } from '@/data/staticProducts'
import React from 'react'

function Productmap() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {staticProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
  )
}

export default Productmap
