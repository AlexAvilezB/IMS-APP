export interface Product {
  id?: number;
  product_name: string;
  description: string;
  price: number;
  quantity: number;
  category: Category;
}

export interface Category {
  _id?: string;
  category_name: string;
  category_description: string;
  isActive: boolean;
}
