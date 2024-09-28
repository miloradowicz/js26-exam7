import { OrderUnit, Product } from './types.d';
import { products } from './data';
import { useState } from 'react';
import OrderList from './components/OrderList/OrderList';
import ProductList from './components/ProductList/ProductList';
import './App.css';

const order: OrderUnit[] = [
  { product: products[1], qty: 2 },
  { product: products[3], qty: 4 },
  { product: products[0], qty: 1 },
];

function App() {
  const addProduct = () => {};
  const deleteProduct = () => {};

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
