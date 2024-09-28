import { Product } from '../../types.d';
import { FC } from 'react';
import ProductItem from './ProductItem/ProductItem';

interface ProductListProps {
  products: Product[];
  currency: string;
  onItemClick: (_: Product) => void;
}

const ProductList: FC<ProductListProps> = ({ products, currency, onItemClick }) => {
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2'>
      {products.map((x) => (
        <div className='col'>
          <ProductItem key={x.id} product={x} currency={currency} onClick={() => onItemClick(x)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
