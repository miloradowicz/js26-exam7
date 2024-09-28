import { FC, MouseEventHandler } from 'react';
import { Product, ProductType } from '../../../types.d';

interface ProductItemProps {
  product: Product;
  currency: string;
  onClick: MouseEventHandler;
}

const ProductItem: FC<ProductItemProps> = ({ product: { displayName, type, price }, currency, onClick }) => {
  const classList: string[] = ['fa'];
  switch (type) {
    case ProductType.Drink:
      classList.push('fa-mug-saucer');
      break;

    case ProductType.Food:
      classList.push('fa-utensils');
      break;
  }

  return (
    <button type='button' className={classList.join(' ')} onClick={onClick}>
      <span>{displayName}</span>
      <span>
        Price: {price} {currency}
      </span>
    </button>
  );
};

export default ProductItem;
