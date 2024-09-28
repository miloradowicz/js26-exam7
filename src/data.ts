import { Product, ProductType } from './types.d';

export const products: Product[] = [
  { id: 0, displayName: 'Hamburger', type: ProductType.Food, price: 80 },
  { id: 1, displayName: 'Cheeseburger', type: ProductType.Food, price: 90 },
  { id: 2, displayName: 'Fries', type: ProductType.Food, price: 45 },
  { id: 3, displayName: 'Coffee', type: ProductType.Drink, price: 70 },
  { id: 4, displayName: 'Tea', type: ProductType.Drink, price: 50 },
  { id: 5, displayName: 'Cola', type: ProductType.Drink, price: 40 },
  { id: 6, displayName: 'Pizza', type: ProductType.Food, price: 150 },
  { id: 7, displayName: 'Good stuff', type: ProductType.Drink, price: 300 },
];

export const currency: string = 'KGS';
