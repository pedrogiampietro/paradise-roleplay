import type { Product } from './Product';
import type { ProductCart } from './Product';

export type CartItem = Product & ProductCart;
