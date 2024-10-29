import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Home } from './features/Home';
import { lazy, Suspense } from 'react';
import Navbar from './features/Navbar/components/Navbar';
import { ThemeProvider } from './features/Theme/ThemeProvider';

const Products = lazy(() => import('./features/Products/components/Products'));
const ProductDetails = lazy(() => import('hero/ProductDetails'));
const Cart = lazy(() => import('./features/Cart/components/Cart'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: '/products/:id',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
