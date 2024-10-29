import { ProductCarousel, useProducts } from '@acme/components';

const ProductsOnSale = () => {
  const { productsOnSale } = useProducts();

  return (
    <section style={{ marginTop: '1rem' }}>
      <ProductCarousel products={productsOnSale} />
    </section>
  );
};

export default ProductsOnSale;
