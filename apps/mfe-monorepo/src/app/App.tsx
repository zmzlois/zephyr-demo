import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Home } from './features/Home';
import { lazy, Suspense } from 'react';
import Navbar from './features/Navbar/components/Navbar';
import { ThemeProvider } from './features/Theme/ThemeProvider';

const Products = lazy(() => import('./features/Products/components/Products'));
const Cart = lazy(() => import('./features/Cart/components/Cart'));
const Favorites = lazy(
  () => import('./features/Products/components/Favorites')
);

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
        path: '/cart',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: '/favorites',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Favorites />
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
