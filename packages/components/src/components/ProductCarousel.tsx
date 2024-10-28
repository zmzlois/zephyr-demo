import type { Product } from '../types/Products';
import { ProductCard } from './ProductCard';

export type ProductCarouselProps = {
  products: Product[];
};

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <div className="cl-flex cl-flex-col -cl-mx-4 cl-px-4">
      <ul className="cl-flex cl-overflow-x-auto cl-overflow-y-hidden cl-snap-x cl-snap-mandatory cl-space-x-4 cl-w-screen cl-relative cl-left-1/2 -cl-translate-x-1/2 cl-scroll-px-4 cl-p-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="cl-flex-shrink-0 cl-snap-start cl-flex cl-items-center cl-justify-center cl-py-2"
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCarousel;
