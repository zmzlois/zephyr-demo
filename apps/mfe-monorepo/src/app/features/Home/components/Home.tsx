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
    <section>
      <Suspense fallback={<div>Loading 123</div>}>
        {!isSmallScreen && <ProductHero label={'123'} />}
      </Suspense>
      <ProductsOnSale />
    </section>
  );
};

export default Home;
