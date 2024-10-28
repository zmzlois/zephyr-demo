import { ProductCard, useCart } from '@acme/components';
import EmptyCart from './EmptyCart';
import { ShoppingCartIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { formatAsCurrency } from '@acme/utils';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  if (!cart.products.length) {
    return <EmptyCart />;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen p-4">
      <section>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Cart</h1>
          <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {cart.products.map((product) => (
            <div key={product.id} className="flex">
              <ProductCard product={product}>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors dark:bg-red-600 dark:hover:bg-red-700 mt-auto flex items-center justify-center w-full max-w-[200px] mx-auto"
                  aria-label="Remove item from cart"
                >
                  <XCircleIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                  Remove
                </button>
              </ProductCard>
            </div>
          ))}
        </div>
      </section>
      {cart.products.length > 0 && (
        <section className="mt-8 flex justify-end">
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
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
