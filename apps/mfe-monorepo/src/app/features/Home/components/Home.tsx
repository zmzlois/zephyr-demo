import { ProductsOnSale } from '../../Products';
import useScreenSize from '../../Products/hooks/useScreenSize';
import { Suspense, lazy } from 'react';
import { Products } from '../../Products';

const ProductHero = lazy(() => import('hero/ProductHero'));
const bodyElement = document.querySelector('body')!;

const Home = () => {
  const { isSmallScreen } = useScreenSize({
    htmlElement: bodyElement,
  });

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        {!isSmallScreen && <ProductHero label={'Featured Products'} />}
      </Suspense>
      <div className="container mx-auto mt-8">
        {' '}
        {/* Added mt-8 for top margin */}
        <h2 className="text-3xl font-bold mb-6">Products on Sale</h2>
        <ProductsOnSale />
      </div>
      <div className="container mx-auto mt-8">
        {' '}
        {/* Wrapped Products in a div with mt-8 */}
        <Products />
      </div>
    </section>
  );
};

export default Home;
