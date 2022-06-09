export type Product = {
  id: number;
  category: string;
  name: string;
  price: string;
  description?: string;
  image: string;
};

export type ProductCart = {
  quantity: number;
  size: string;
};
