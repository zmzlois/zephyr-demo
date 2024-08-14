import { type Product } from '../../../types/Products';
import useCart from '../../Cart/hooks/useCart';
import styles from './ProductCard.module.css';
import { PropsWithChildren } from 'react';

export type ProductCardProps = {
  product: Product;
} & PropsWithChildren;

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
}
const TestComp = () => {
  return (<div>123</div>)
}

const formatAsCurrency = (price: number) => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: navigator.language === 'en-US' ? Currency.USD : Currency.EUR,
  }).format(price);
};

const ProductCard = ({ product, children }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className={styles['product-card']}>
      <h3>{product.title}</h3>
      <img
        src={product.imgUrl}
        alt={product.title}
        className={styles['product-card__image']}
      />
      <div className={styles['product-card__details']}>
        <p className={styles['product-card__details__price']}>
          {formatAsCurrency(product.price)}
        </p>
        <button type="button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        {children}
      </div>
    </div>
  );
};

export default ProductCard;
