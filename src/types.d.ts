export enum ProductType {
  Drink,
  Food,
}

export interface Product {
  get id(): number;
  get displayName(): string;
  get type(): ProductType;
  get price(): number;
}

export interface OrderUnit {
  get product(): Product;
  get qty(): number;
}
