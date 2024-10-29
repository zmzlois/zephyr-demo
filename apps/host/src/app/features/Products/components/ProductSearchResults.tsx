import { useAtom } from 'jotai';
import { searchTextAtom, searchSizeAtom, searchColorAtom } from '../store';
import { ProductCard, useProducts } from '@acme/components';
import { useCart } from '@acme/components';

const ProductSearchResults = () => {
  const [searchText] = useAtom(searchTextAtom);
  const [searchSize] = useAtom(searchSizeAtom);
  const [searchColor] = useAtom(searchColorAtom);
  const { products } = useProducts();
  const { addToCart } = useCart();

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (searchSize ? product.size === searchSize : true) &&
      (searchColor ? product.color === searchColor : true)
  );

  return (
    <section className="bg-background text-text">
      <h3 className="text-xl font-semibold mb-4">Search Results:</h3>
      <div className="scroll-container h-[calc(100vh-200px)] overflow-y-auto px-2 sm:px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 justify-items-center p-1">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex justify-center w-full">
              <ProductCard product={product}>
                <button
                  onClick={() => addToCart(product)}
                  type="button"
                  className={`
      mt-4 w-full inline-flex items-center justify-center
      px-6 py-3 rounded-lg font-medium text-white
      transition-all duration-200 ease-in-out
      bg-gradient-to-r from-indigo-600 to-purple-600
      hover:from-indigo-700 hover:to-purple-700
      transform hover:scale-102 hover:shadow-lg
      focus:outline-none focus:ring-2 focus:ring-offset-2
      focus:ring-indigo-500 focus:ring-opacity-50
      active:scale-98
      disabled:opacity-50 disabled:cursor-not-allowed
      space-x-2
    `}
                >
                  Add to Cart
                </button>
              </ProductCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSearchResults;
