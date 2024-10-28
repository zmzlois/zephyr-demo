import { useAtom } from 'jotai';
import { searchTextAtom, searchSizeAtom, searchColorAtom } from '../store';
import { ProductData, ProductCard } from '@acme/components';
import { useCart } from '../../../hooks';

const ProductSearchResults = () => {
  const [searchText] = useAtom(searchTextAtom);
  const [searchSize] = useAtom(searchSizeAtom);
  const [searchColor] = useAtom(searchColorAtom);
  const { addToCart } = useCart();

  const filteredProducts = ProductData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (searchSize ? product.size === searchSize : true) &&
      (searchColor ? product.color === searchColor : true)
  );

  return (
    <section className="bg-background text-text">
      <h3 className="text-xl font-semibold mb-4">Search Results:</h3>
      <div className="scroll-container h-[calc(100vh-200px)] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex">
              <ProductCard product={product}>
                <button
                  type="button"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
                  onClick={() => addToCart(product)}
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
