import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Home } from './features/Home';
import { lazy, Suspense } from 'react';
import Navbar from './features/Navbar/components/Navbar';
import { ThemeProvider } from './features/Theme/ThemeProvider';

const Products = lazy(() => import('./features/Products/components/Products'));
const Cart = lazy(() => import('./features/Cart/components/Cart'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ThemeProvider>
        <>
          <Navbar />
          <Outlet />
        </>
      </ThemeProvider>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: '/products',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
