import React, { useState } from 'react';
import { type Product } from '../../../types/Products';
import type { PropsWithChildren } from 'react';
import useCart from '../../Cart/hooks/useCart';
import useFavorites from '../hooks/useFavorites';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { formatAsCurrency } from '../../../utils/formatCurrency';
import classNames from 'classnames';
import './cartButtonAnimation.css';

export type ProductCardProps = {
  product: Product;
  isCartPage?: boolean;
  width?: string;
} & PropsWithChildren;

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  children,
  isCartPage = false,
  width = '300px',
}) => {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Reset after animation completes
  };

  const buttonClasses =
    'w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 flex items-center justify-center max-w-[200px] mx-auto';

  return (
    <div
      className={`flex flex-col justify-between p-6 h-[450px] rounded-xl text-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-1`}
      style={{ width }}
    >
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
          className={`text-2xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-200 max-w-[40px] ${
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
        <p className="text-2xl font-bold text-gray-700 text-center">
          {formatAsCurrency(product.price)}
        </p>
        {!isCartPage && (
          <button
            type="button"
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className={classNames(buttonClasses, {
              'animate-addToCart': isAnimating,
            })}
          >
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default ProductCard;
