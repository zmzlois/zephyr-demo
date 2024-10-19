import { atom } from 'jotai';
import { ProductSize, ProductColor } from '../../../types/Products';

export const searchTextAtom = atom('');
export const searchSizeAtom = atom<ProductSize | ''>('');
export const searchColorAtom = atom<ProductColor | ''>('');
