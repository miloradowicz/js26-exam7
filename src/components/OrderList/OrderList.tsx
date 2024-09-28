import { OrderUnit, Product } from '../../types';
import { FC } from 'react';
import OrderItem from './OrderItem/OrderItem';
import OrderTotal from './OrderTotal/OrderTotal';

interface OrderListProps {
  order: OrderUnit[];
  onItemDeleteClick: (_: Product) => void;
}

const OrderList: FC<OrderListProps> = ({ order, onItemDeleteClick }) => {
  return (
    <div className='col container'>
      <h3>Order details:</h3>
      {order.length === 0 ? (
        <div>
          <p>Order is empty!</p>
          <p>Please add some items!</p>
        </div>
      ) : (
        <ul className='list-group'>
          {order.map((x, i) => (
            <OrderItem key={i} item={x} onDeleteClick={() => onItemDeleteClick(x.product)} />
          ))}
          <OrderTotal total={order.reduce((a, x) => a + x.product.price * x.qty, 0)} />
        </ul>
      )}
    </div>
  );
};

export default OrderList;
