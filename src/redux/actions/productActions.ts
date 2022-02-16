import { Dispatch } from "redux";
import {
  FilterCategoryActionType,
  GetProductsActionType,
  ProductType,
  SearchProductsActionType,
  SortProductsActionType,
} from "../../types";
import {
  FILTER_CATEGORY,
  GET_PRODUCTS,
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
