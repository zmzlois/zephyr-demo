import { ProductCard } from '../../Products';
import useCart from '../hooks/useCart';

const formatAsCurrency = (price: number, currency = 'USD') => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency,
  }).format(price);
};

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  if (!cart.products.length) {
    return (
      <h3 className="text-lg font-semibold">
        Sorry your cart is currently empty.
      </h3>
    );
  }

  return (
    <div className="p-4">
      <section>
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        <ul className="space-y-4">
          {cart.products.map((product) => (
            <ProductCard key={product.id} product={product}>
              <button
                type="button"
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Remove from cart
              </button>
            </ProductCard>
          ))}
        </ul>
      </section>
      {cart.products.length > 0 && (
        <section className="mt-8 flex justify-end">
          <div>
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <ul>
              <li className="flex justify-between">
                <span className="pr-4">Total:</span>
                <span>{formatAsCurrency(total)}</span>
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
