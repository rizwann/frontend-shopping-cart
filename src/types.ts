interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export type ProductType = ProductInterface;

export type CartItemType = ProductInterface & { inCartQuantity: number };
