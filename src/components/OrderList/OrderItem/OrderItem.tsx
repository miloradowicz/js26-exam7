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
        <div className='col-6 text-start'>
          <span>{displayName}</span>
        </div>
        <div className='col-2'>
          <span>x{qty}</span>
        </div>
        <div className='col-2'>
          <span>
            {price * qty} {currency}
          </span>
        </div>
        <div className='col-2'>
          <button type='button' className='btn btn-danger' onClick={onDeleteClick} aria-label='Delete'>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
