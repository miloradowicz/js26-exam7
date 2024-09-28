import { OrderUnit, Product } from './types.d';
import { products } from './data';
import { useState } from 'react';
import OrderList from './components/OrderList/OrderList';
import ProductList from './components/ProductList/ProductList';
import './App.css';

function App() {
  const [order, setOrder] = useState<OrderUnit[]>([]);

  const addProduct = (product: Product) => {
    setOrder((order) => {
      const _order = [...order];

      const i = _order.findIndex((x) => x.product.id === product.id);
      if (i < 0) {
        _order.push({ product, qty: 1 });
      } else {
        _order.splice(i, 1, { ..._order[i], qty: _order[i].qty + 1 });
      }

      return _order;
    });
  };

  const deleteProduct = (product: Product) => {
    setOrder((order) => {
      const _order = [...order];

      const i = _order.findIndex((x) => x.product.id === product.id);
      if (i >= 0) {
        if (_order[i].qty > 1) {
          _order.splice(i, 1, { ..._order[i], qty: _order[i].qty - 1 });
        } else {
          _order.splice(i, 1);
        }
      }

      return _order;
    });
  };

  return (
    <div className='container'>
      <h1>Super Duper Restaurant</h1>
      <div className='row row-cols-1 row-cols-md-2 flex-column-reverse flex-md-row'>
        <OrderList order={order} onItemDeleteClick={deleteProduct}></OrderList>
        <ProductList products={products} onItemClick={addProduct} />
      </div>
    </div>
  );
}

export default App;
