import { atom } from 'jotai';
import type { Product } from './types/Products';

export type Cart = {
  products: Product[];
};

const cartAtom = atom<Cart>({
  products: [],
});

export { cartAtom };
