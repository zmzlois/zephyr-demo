import type { Product } from '../types/Products';
import { ProductCard } from './ProductCard';

export type ProductCarouselProps = {
  products: Product[];
};

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <div className="flex flex-col -mx-4 px-4">
      <ul className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory space-x-4 w-screen relative left-1/2 -translate-x-1/2">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex-shrink-0 snap-start flex items-center justify-center py-2"
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCarousel;
