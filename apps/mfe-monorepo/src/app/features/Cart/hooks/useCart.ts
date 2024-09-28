import { useAtom } from 'jotai';
import { cartAtom } from '../store';
import { type Product } from '../../../types/Products';

const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const addToCart = (product: Product) => {
    setCart((cart) => {
      const existingProduct = cart.products.find((p) => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.products.push({ ...product, quantity: 1 });
      }
      return { ...cart };
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((cart) => {
      cart.products = cart.products.filter(
        (product) => product.id !== productId
      );
      return { ...cart };
    });
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCart((cart) => {
      const product = cart.products.find((p) => p.id === productId);
      if (product) {
        product.quantity = Math.max(1, newQuantity);
      }
      return { ...cart };
    });
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
};

export default useCart;
