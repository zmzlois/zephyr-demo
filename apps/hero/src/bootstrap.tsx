import { createRoot } from 'react-dom/client';
import { ProductHero } from './features/Products';
import ProductsOnSale from './features/Products/components/ProductsOnSale';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appElement = document.getElementById('app');

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <ProductHero />
        <ProductsOnSale />
      </div>
    ),
  },
]);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(appElement!);
root.render(<RouterProvider router={router} />);
