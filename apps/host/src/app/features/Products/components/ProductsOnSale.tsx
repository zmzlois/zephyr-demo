import { ProductCarousel } from '@acme/components';
import { ProductSaleData } from '../../../data/ProductData';

const ProductsOnSale = () => {
  return (
    <section style={{ marginTop: '1rem' }}>
      <ProductCarousel products={ProductSaleData} />
    </section>
  );
};

export default ProductsOnSale;
