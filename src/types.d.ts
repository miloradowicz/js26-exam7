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
