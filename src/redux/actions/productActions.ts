import { Dispatch } from "redux";
import {
  AddToCartActionType,
  FilterCategoryActionType,
  GetProductsActionType,
  ProductType,
  RemoveAllFromCartActionType,
  RemoveFromCartActionType,
  SearchProductsActionType,
  SortProductsActionType,
} from "../../types";
import {
  ADD_TO_CART,
  FILTER_CATEGORY,
  GET_PRODUCTS,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,
} from "./actionTypes";

export function getProducts(products: ProductType[]): GetProductsActionType {
  return {
    type: GET_PRODUCTS,
    payload: {
      products,
    },
  };
}

export function getProductsAsync() {
  return (dispatch: Dispatch) => {
    return fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => dispatch(getProducts(products)));
  };
}

export function searchProducts(keyword: string): SearchProductsActionType {
  return {
    type: SEARCH_PRODUCTS,
    payload: {
      keyword,
    },
  };
}

export function sortProducts(sort: string): SortProductsActionType {
  return {
    type: SORT_PRODUCTS,
    payload: {
      sort,
    },
  };
}

export function filterCategory(category: string): FilterCategoryActionType {
  return {
    type: FILTER_CATEGORY,
    payload: {
      category,
    },
  };
}

export function addToCart(product: ProductType): AddToCartActionType {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  };
}

export function removeFromCart(product: ProductType): RemoveFromCartActionType {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      product,
    },
  };
}

export function removeAllFromCart(): RemoveAllFromCartActionType {
  return {
    type: REMOVE_ALL_FROM_CART,
  };
}
