export interface Product {
  pid: number;
  product_name: string;
  description: string;
  price: number;
  quantity: number;
  category: Category;
}

export interface Category {
  cid: number;
  category_name: string;
}
