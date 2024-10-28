import type { FC, PropsWithChildren } from 'react';
import type { Product } from '../types/Products';
import { formatAsCurrency } from '@acme/utils';

export type ProductCardProps = {
  product: Product;
} & PropsWithChildren;

export const ProductCard: FC<ProductCardProps> = ({ product, children }) => {
  return (
    <div
      className={
        'cl-flex cl-flex-col cl-justify-between cl-p-6 cl-h-auto cl-min-h-[350px] cl-w-full cl-rounded-xl cl-text-gray-800 cl-shadow-lg hover:cl-ring-2 hover:cl-ring-gray-500 hover:cl-bg-gray-200 dark:hover:cl-ring-gray-200 dark:hover:cl-bg-gray-50 cl-transition-all cl-duration-300 cl-ease-in-out cl-bg-white'
      }
    >
      <div className="cl-flex cl-justify-between cl-items-start">
        <h3 className="cl-text-xl cl-font-semibold cl-truncate cl-text-gray-800">
          {product.title}
        </h3>
      </div>
      <img
        src={product.imgUrl}
        alt={product.title}
        className="cl-h-[300px] cl-w-[180px] cl-object-contain cl-p-4"
      />
      <div className="cl-flex cl-flex-col cl-gap-3 cl-mt-auto">
        <p className="cl-text-2xl cl-font-bold cl-text-gray-700 cl-text-center">
          {formatAsCurrency(product.price)}
        </p>
      </div>
      {children}
    </div>
  );
};

export default ProductCard;
