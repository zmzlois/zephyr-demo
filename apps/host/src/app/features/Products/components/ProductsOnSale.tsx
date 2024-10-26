import { ProductCarousel } from '@acme/components';
import { ProductSaleData } from '../../../data/ProductData';

const ProductsOnSale = () => {
  return (
    <section style={{ marginTop: '1rem' }}>
      <h3 style={{ paddingLeft: '1rem' }}>Currently on sale:</h3>
      <ProductCarousel products={ProductSaleData} />
    </section>
  );
};

export default ProductsOnSale;
