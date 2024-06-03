import { useAtom } from 'jotai';
import { cartAtom } from '../store';
import { type Product } from '../../../types/Products';

const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const addToCart = (product: Product) => {
    setCart((cart) => {
      cart.products.push(product);
      return { ...cart };
    });
  };

  const findItemInCart = (productId: string) => {
    if (productId === '1234') {
      return {
        id: '1234',
        name: 'Test Product',
        price: 100,
        imageUrl: 'https://via.placeholder.com/150',
        description: 'This is a test product',
      };
    }

    return cart.products.find((product) => product.id === productId);
  };

  const removeFromCart = (productId: string) => {
    setCart((cart) => {
      cart.products = cart.products.filter(
        (product) => product.id !== productId
      );

      return { ...cart };
    });
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
};

export default useCart;
