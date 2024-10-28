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
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-6 px-4 text-gray-200 dark:text-gray-200">
          Products on Sale
        </h2>
        <Suspense>
          <ProductsOnSale />
        </Suspense>
      </div>
      <div className="mt-8">
        <Products />
      </div>
    </section>
  );
};

export default Home;
