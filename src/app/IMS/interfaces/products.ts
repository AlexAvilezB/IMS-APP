export interface Product {
  pid: number;
  product_name: string;
  description: string;
  price: number;
  quantity: number;
  category: Category;
}

export enum Category {
  Computers = 'Computers',
  Audio = 'Audio',
  Accesories = 'Accesories',
}
