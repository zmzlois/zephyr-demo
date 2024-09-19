import { ProductSaleData } from '../../../data/ProductData';
import ProductCard from './ProductCard';

const ProductCarousel = () => {
  return (
    <ul className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
      {ProductSaleData.map((product) => (
        <li
          key={product.id}
          className="flex-shrink-0 h-auto snap-start p-2 mb-0.5"
        >
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductCarousel;
