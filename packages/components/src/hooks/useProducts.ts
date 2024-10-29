import { useAtom } from 'jotai';
import { productsAtom, productsOnSaleAtom } from '../store';

export const useProducts = () => {
  const [products] = useAtom(productsAtom);
  const [productsOnSale] = useAtom(productsOnSaleAtom);

  return {
    products,
    productsOnSale,
  };
};
