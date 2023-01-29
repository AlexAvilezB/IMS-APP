export interface Product {
  _id?: string;
  product_name: string;
  description: string;
  price: number;
  quantity: number;
  category: Category;
  isActive: boolean;
}

export interface Category {
  _id?: string;
  category_name: string;
  category_description: string;
  isActive: boolean;
}
