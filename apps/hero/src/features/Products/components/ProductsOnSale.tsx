import { ProductCarousel, ProductSaleData } from '@acme/components';

const ProductsOnSale = () => {
  return (
    <section style={{ marginTop: '1rem' }}>
      <ProductCarousel products={ProductSaleData} />
    </section>
  );
};

export default ProductsOnSale;
