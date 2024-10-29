import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductGallery } from './ProductGallery';
import { useCart, useProducts } from '@acme/components';

const ProductDetails = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = useMemo(() => {
    return products.find((p) => p.id === id);
  }, [products, id]);

  if (!product) {
    return <></>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="mb-6">
        <button
          type="button"
          onClick={() => navigate('/products')}
          className="inline-flex text-lg items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          aria-label="Back to products"
        >
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Products
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery images={product.galleryImages} title={product.title} />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 dark: mb-4">
              {product.title}
            </h1>
            <div className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
              ${product.price.toFixed(2)}
            </div>
            <div className="prose prose-sm text-gray-500 mb-6">
              Experience unparalleled quality with this meticulously crafted
              product, designed to elevate your daily routine while delivering
              exceptional performance and lasting value.
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
