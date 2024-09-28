import { OrderUnit } from '../../../types.d';
import { currency } from '../../../data';
import { FC, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface OrderItemProps {
  item: OrderUnit;
  onDeleteClick: MouseEventHandler;
}

const OrderItem: FC<OrderItemProps> = ({
  item: {
    product: { displayName, price },
    qty,
  },
  onDeleteClick,
}) => {
  return (
    <li className='list-group-item'>
      <div className='row align-items-center'>
        <div className='col-12 col-sm-6 col-md-4 col-lg-6 text-start'>
          <span>{displayName}</span>
        </div>
        <div className='col-2 offset-2 col-sm-1 offset-sm-0'>
          <span>x{qty}</span>
        </div>
        <div className='col-4 col-sm-3 col-md-4 col-lg-3'>
          <span>
            {price * qty} {currency}
          </span>
        </div>
        <div className='col-4 col-sm-2 col-md-3 col-lg-2'>
          <button type='button' className='btn btn-danger' onClick={onDeleteClick} aria-label='Delete'>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
