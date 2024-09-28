import { Product, ProductType } from '../../../types.d';
import { FC, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ProductItemProps {
  product: Product;
  currency: string;
  onClick: MouseEventHandler;
}

const ProductItem: FC<ProductItemProps> = ({ product: { displayName, type, price }, currency, onClick }) => {
  let icon: IconDefinition;

  switch (type) {
    case ProductType.Drink:
      icon = faCoffee;
      break;

    case ProductType.Food:
      icon = faUtensils;
      break;
  }

  return (
    <button type='button' onClick={onClick}>
      <FontAwesomeIcon icon={icon} style={{}} />
      <span>{displayName}</span>
      <span>
        Price: {price} {currency}
      </span>
    </button>
  );
};

export default ProductItem;
