import React from 'react';
import useFavorites from '../hooks/useFavorites';
import { type Product } from '../../../types/Products';
import ProductCard from './ProductCard';
import { FaStar } from 'react-icons/fa';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
          <FaStar className="text-gray-600 mr-3" />
          My Favorite Products
          <FaStar className="text-gray-600 ml-3" />
        </h1>
        {favorites.length === 0 ? (
          <div className="text-center p-8 bg-gray-50 rounded-lg shadow-lg">
            <p className="text-xl text-gray-700 mb-4">
              You haven't added any favorites yet.
            </p>
            <p className="text-gray-600">
              Explore our products and add some to your favorites!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((product: Product) => (
              <ProductCard key={product.id} product={product}>
                <p className="text-sm text-gray-600 mt-2 font-semibold">
                  Added to favorites
                </p>
              </ProductCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;
