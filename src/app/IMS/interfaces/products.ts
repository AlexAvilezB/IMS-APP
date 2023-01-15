export interface Product {
  id?: number;
  product_name: string;
  description: string;
  price: number;
  quantity: number;
  category: Category;
}

export interface Category {
  id?: number;
  category_name: string;
}
