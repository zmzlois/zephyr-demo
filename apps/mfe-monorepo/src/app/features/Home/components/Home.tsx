import { ProductsOnSale } from '../../Products';
import useScreenSize from '../../Products/hooks/useScreenSize';
import { Suspense, lazy } from 'react';

const ProductHero = lazy(() => import('hero/ProductHero'));
const bodyElement = document.querySelector('body')!;

const Home = () => {
  const { isSmallScreen } = useScreenSize({
    htmlElement: bodyElement,
  });

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        {!isSmallScreen && <ProductHero label={'Featured Products'} />}
      </Suspense>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Products on Sale</h2>
        <ProductsOnSale />
      </div>
    </section>
  );
};

export default Home;
