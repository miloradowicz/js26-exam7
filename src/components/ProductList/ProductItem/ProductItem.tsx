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
    <button type='button' onClick={onClick} className='btn btn-light card'>
      <div className='row align-items-center'>
        <div className='col-3'>
          <FontAwesomeIcon size='3x' icon={icon} />
        </div>
        <div className='col-9'>
          <div className='card-body'>
            <h5 className='card-title'>{displayName}</h5>
            <p className='card-text'>
              Price: {price} {currency}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProductItem;
