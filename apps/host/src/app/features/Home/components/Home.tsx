import useScreenSize from '../../Products/hooks/useScreenSize';
import { Suspense, lazy } from 'react';
import { Products } from '../../Products';

const ProductHero = lazy(() => import('hero/ProductHero'));
const ProductsOnSale = lazy(() => import('hero/ProductsOnSale'));

const bodyElement = document.querySelector('body');

const Home = () => {
  const { isSmallScreen } = useScreenSize({
    htmlElement: bodyElement,
  });

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen overflow-x-hidden">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        {!isSmallScreen && <ProductHero />}
      </Suspense>
      <h2 className="text-3xl font-bold mb-6 text-gray-200 dark:text-gray-200 mt-4 p-2">
        Products on Sale
      </h2>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          <Suspense>
            <ProductsOnSale />
          </Suspense>
        </div>
        <div className="mt-8">
          <Products />
        </div>
      </div>
    </section>
  );
};

export default Home;
