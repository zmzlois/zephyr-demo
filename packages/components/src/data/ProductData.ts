import { type Product, ProductColor, ProductSize } from '../types/Products';

const sizes = Object.values(ProductSize);
const colors = Object.values(ProductColor);

const generateRealisticPrice = (): number => {
  const priceRange = { min: 10.99, max: 199.99 };
  const price =
    Math.random() * (priceRange.max - priceRange.min) + priceRange.min;

  // Round to 2 decimal places
  return Number(price.toFixed(2));
};

const generateProducts = (count: number): Product[] => {
  const products: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = sizes[Math.floor(Math.random() * sizes.length)];

    const product: Product = {
      id: i.toString(),
      title: `${color} ${size} Shirt`,
      size,
      color,
      price: generateRealisticPrice(),
      imgUrl: `./assets/${color}Shirt.png`,
      quantity: 1,
    };

    products.push(product);
  }

  return products;
};

const ProductData = generateProducts(100);
const ProductSaleData = ProductData.slice(0, 20);

export { ProductSaleData, ProductData };
