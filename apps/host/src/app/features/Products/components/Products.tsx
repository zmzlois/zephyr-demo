import ProductSearch from './ProductSearch';
import ProductSearchResults from './ProductSearchResults';

interface ProductsProps {
  className?: string;
}

export const Products: React.FC<ProductsProps> = ({ className = '' }) => {
  return (
    <section
      className={`bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 ${className} w-full`}
    >
      <div className="flex justify-center">
        <ProductSearch />
      </div>
      <div className="px-4 py-2">
        <ProductSearchResults />
      </div>
    </section>
  );
};

export default Products;
