import { createRoot } from 'react-dom/client';
import { ProductHero } from './features/Products';
import ProductsOnSale from './features/Products/components/ProductsOnSale';

const appElement = document.getElementById('app');

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(appElement!);
root.render(
  <div>
    <ProductHero />
    <ProductsOnSale />
  </div>
);
