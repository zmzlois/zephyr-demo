import { type Product, ProductColor, ProductSize } from '../types/Products';

const sizes = Object.values(ProductSize);
const colors = Object.values(ProductColor);

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
      price: Math.floor(Math.random() * 1000) + 1,
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
