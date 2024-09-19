import React from 'react';
import { type Product } from '../../../types/Products';
import type { PropsWithChildren } from 'react';
import useCart from '../../Cart/hooks/useCart';
import useFavorites from '../hooks/useFavorites';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

export type ProductCardProps = {
  product: Product;
} & PropsWithChildren;

const formatAsCurrency = (price: number, currency = 'USD') => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency,
  }).format(price);
};

const ProductCard: React.FC<ProductCardProps> = ({ product, children }) => {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="flex flex-col justify-between p-6 h-[450px] rounded-xl text-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-1">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold truncate text-gray-800">
          {product.title}
        </h3>
        <button
          type="button"
          onClick={() => toggleFavorite(product)}
          aria-label={
            isFavorite(product) ? 'Remove from favorites' : 'Add to favorites'
          }
          className={`text-2xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-200 ${
            isFavorite(product)
              ? 'text-red-500 hover:text-red-600'
              : 'text-gray-300 hover:text-red-400'
          }`}
        >
          <FaHeart />
        </button>
      </div>
      <img
        src={product.imgUrl}
        alt={product.title}
        className="w-full h-56 object-contain my-4"
      />
      <div className="flex flex-col gap-3 mt-auto">
        <p className="text-2xl font-bold text-gray-700">
          {formatAsCurrency(product.price)}
        </p>
        <button
          type="button"
          onClick={() => addToCart(product)}
          aria-label="Add to cart"
          className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 flex items-center justify-center"
        >
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
      {children}
    </div>
  );
};

export default ProductCard;
