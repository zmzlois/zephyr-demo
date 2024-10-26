import type { FC, PropsWithChildren } from 'react';
import type { Product } from '../types/Products';
import { formatAsCurrency } from '@acme/utils';

export type ProductCardProps = {
  product: Product;
  width?: string;
} & PropsWithChildren;

export const ProductCard: FC<ProductCardProps> = ({
  product,
  children,
  width = '300px',
}) => {
  return (
    <div
      className={
        'flex flex-col justify-between p-6 h-auto min-h-[350px] w-full max-w-sm rounded-xl text-gray-800 shadow-lg hover:ring-2 hover:ring-gray-500 hover:bg-gray-200 dark:hover:ring-gray-200 dark:hover:bg-gray-50 transition-all duration-300 ease-in-out bg-white md:max-w-md lg:max-w-lg'
      }
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold truncate text-gray-800">
          {product.title}
        </h3>
      </div>
      <img
        src={product.imgUrl}
        alt={product.title}
        className="w-full h-44 md:h-52 lg:h-60 object-contain my-4"
      />
      <div className="flex flex-col gap-3 mt-auto">
        <p className="text-2xl font-bold text-gray-700 text-center">
          {formatAsCurrency(product.price)}
        </p>
      </div>
      {children}
    </div>
  );
};

export default ProductCard;
