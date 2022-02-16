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

export type initialStateType = {
  products: ProductType[];
  cart: CartItemType[];
  filteredProducts: ProductType[];
  keyword: string;
  sort: string;
  category: string;
};

export type GetProductsActionType = {
  type: "GET_PRODUCTS";
  payload: {
    products: ProductType[];
  };
};

export type SearchProductsActionType = {
  type: "SEARCH_PRODUCTS";
  payload: {
    keyword: string;
  };
};
export type SortProductsActionType = {
  type: "SORT_PRODUCTS";
  payload: {
    sort: string;
  };
};

export type FilterCategoryActionType = {
  type: "FILTER_CATEGORY";
  payload: {
    category: string;
  };
};

export type ProductActionType =
  | GetProductsActionType
  | SearchProductsActionType
  | SortProductsActionType
  | FilterCategoryActionType;
