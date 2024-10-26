import ProductCarousel from './Carousel';

const ProductsOnSale = () => {
  return (
    <section style={{ marginTop: '1rem' }}>
      <h3 style={{ paddingLeft: '1rem' }}>Currently on sale:</h3>
      <ProductCarousel />
    </section>
  );
};

export default ProductsOnSale;
