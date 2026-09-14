export interface Order {
  id: string;
  customerId: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
