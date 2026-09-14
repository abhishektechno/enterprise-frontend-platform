export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  status: ProductStatus;
}

export type ProductStatus = 'active' | 'inactive';
