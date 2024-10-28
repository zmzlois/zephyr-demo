import type { Product } from '../types/Products';
import { ProductCard } from './ProductCard';
import useCart from '../hooks/useCart';

export type ProductCarouselProps = {
  products: Product[];
};

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const { addToCart } = useCart();

  return (
    <div className="cl-flex cl-flex-col -cl-mx-4 cl-px-4">
      <ul className="cl-flex cl-overflow-x-auto cl-overflow-y-hidden cl-snap-x cl-snap-mandatory cl-space-x-4 cl-w-screen cl-relative cl-left-1/2 -cl-translate-x-1/2 cl-scroll-px-4 cl-p-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="cl-flex-shrink-0 cl-snap-start cl-flex cl-items-center cl-justify-center cl-py-2"
          >
            <ProductCard product={product}>
              <button
                onClick={() => addToCart(product)}
                type="button"
                className={`
    cl-mt-4 cl-w-full cl-inline-flex cl-items-center cl-justify-center
    cl-px-6 cl-py-3 cl-rounded-lg cl-font-medium cl-text-white
    cl-transition-all cl-duration-200 cl-ease-in-out
    cl-bg-gradient-to-r cl-from-indigo-600 cl-to-purple-600
    hover:cl-from-indigo-700 hover:cl-to-purple-700
    cl-transform hover:cl-scale-102 hover:cl-shadow-lg
    focus:cl-outline-none focus:cl-ring-2 focus:cl-ring-offset-2
    focus:cl-ring-indigo-500 focus:cl-ring-opacity-50
    active:cl-scale-98
    disabled:cl-opacity-50 disabled:cl-cursor-not-allowed
    cl-space-x-2
  `}
              >
                Add to Cart
              </button>
            </ProductCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCarousel;
