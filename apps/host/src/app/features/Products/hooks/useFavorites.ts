import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import type { Product } from '@acme/components';

const favoritesAtom = atom<Product[]>([]);

const useFavorites = () => {
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  useEffect(() => {
    // Load favorites from localStorage on initial render
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [setFavorites]);

  useEffect(() => {
    // Save favorites to localStorage whenever it changes
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product: Product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === product.id);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== product.id);
      }

      return [...prevFavorites, product];
    });
  };

  const isFavorite = (product: Product) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  return { favorites, toggleFavorite, isFavorite };
};

export default useFavorites;
