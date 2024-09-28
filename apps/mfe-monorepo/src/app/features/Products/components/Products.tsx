import ProductSearch from './ProductSearch';
import ProductSearchResults from './ProductSearchResults';

export const Products = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <ProductSearch />
      <ProductSearchResults />
    </section>
  );
};

export default Products;
