import { atom } from 'jotai';
import { type Cart } from '../../../types/Cart';
import { test } from 'src/app/data/ProductData';

const cartAtom = atom<Cart>({
  products: [],
});

export { cartAtom };

export class TestClass {
  whatever = 'whatever';

  constructor() {
    console.log('TestClass');
  }

  public testMethod() {
    console.log('testMethod');
  }
}

const TestModule = {
  testMethod() {
    console.log('testMethod');
  }
}
