export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  threshold: number;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface SalesData {
  totalRevenue: number;
  totalOrders: number;
}

export interface CreateProductInput {
  name: string;
  sku: string;
  price: number;
  stock: number;
  threshold: number;
}
