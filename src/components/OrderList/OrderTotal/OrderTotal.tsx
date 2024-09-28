import { currency } from '../../../data';
import { FC } from 'react';

interface OrderTotalProps {
  total: number;
}

const OrderTotal: FC<OrderTotalProps> = ({ total }) => {
  return (
    <li className='list-group-item list-group-item-secondary'>
      <div className='row align-items-center'>
        <div className='col-8 text-end'>
          <span>Total:</span>
        </div>
        <div className='col-2'>
          <span>
            {total} {currency}
          </span>
        </div>
      </div>
    </li>
  );
};

export default OrderTotal;
