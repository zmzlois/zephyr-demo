import type { Product } from '../types/Products';
import { ProductCard } from './ProductCard';

export type ProductCarouselProps = {
  products: Product[];
};

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <ul className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory space-x-4 p-4">
      {products.map((product) => (
        <li key={product.id} className="flex-shrink-0 h-auto snap-start">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductCarousel;
