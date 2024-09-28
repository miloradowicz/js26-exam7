import { Product } from '../../types.d';
import { FC } from 'react';
import ProductItem from './ProductItem/ProductItem';

interface ProductListProps {
  products: Product[];
  onItemClick: (_: Product) => void;
}

const ProductList: FC<ProductListProps> = ({ products, onItemClick }) => {
  return (
    <div className='col'>
      <div className='container'>
        <h3 className='mb-3'>Add items:</h3>
        <div className='row row-cols-1 row-cols-lg-2 g-2'>
          {products.map((x) => (
            <ProductItem key={x.id} product={x} onClick={() => onItemClick(x)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
