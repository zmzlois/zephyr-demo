import { atom } from 'jotai';
import type { ProductSize, ProductColor } from '@acme/components';

export const searchTextAtom = atom('');
export const searchSizeAtom = atom<ProductSize | ''>('');
export const searchColorAtom = atom<ProductColor | ''>('');
