import { ProductSaleData } from '../../../data/ProductData';
import { ProductCard } from '@acme/components';

const ProductCarousel = () => {
  return (
    <ul className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory space-x-4 px-4">
      {ProductSaleData.map((product) => (
        <li key={product.id} className="flex-shrink-0 h-auto snap-start">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductCarousel;
