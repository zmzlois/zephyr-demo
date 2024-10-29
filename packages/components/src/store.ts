import { atom } from 'jotai';
import { ProductData, ProductSaleData } from './data/ProductData';
import type { Product } from './types/Products';

export type Cart = {
  products: Product[];
};

const cartAtom = atom<Cart>({
  products: [],
});

const productsAtom = atom<Product[]>(ProductData);
const productsOnSaleAtom = atom<Product[]>(ProductSaleData);

export { cartAtom, productsAtom, productsOnSaleAtom };
