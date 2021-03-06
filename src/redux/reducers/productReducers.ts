import { initialStateType, ProductActionType } from "../../types";

const initialState: initialStateType = {
  products: [],
  cartItems: [],
  keyword: "",
  filteredProducts: [],
  sort: "",
  category: "",
};

export default function productReducer(
  state = initialState,
  action: ProductActionType
) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
        filteredProducts: action.payload.products,
        keyword: "",
        sort: "",
        category: "",
      };

    case "SEARCH_PRODUCTS":
      const searchedProducts = state.products.filter((product) => {
        return (
          product.title
            .toLowerCase()
            .search(action.payload.keyword.toLowerCase()) !== -1
        );
      });

      return {
        ...state,
        filteredProducts: searchedProducts,
        keyword: action.payload.keyword,
        category: "all",
      };

    case "SORT_PRODUCTS":
      const sortedProducts = [...state.filteredProducts];
      if (action.payload.sort === "ASC") {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (action.payload.sort === "DESC") {
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      } else if (action.payload.sort === "lowest") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (action.payload.sort === "highest") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      return {
        ...state,
        filteredProducts: sortedProducts,
        sort: action.payload.sort,
      };

    case "FILTER_CATEGORY":
      const filteredProductsCopy = [...state.products];
      if (action.payload.category === "all") {
        return {
          ...state,
          filteredProducts: filteredProductsCopy,
          category: action.payload.category,
          sort: "",
        };
      } else {
        const categorizedProducts = filteredProductsCopy.filter((product) => {
          return product.category === action.payload.category;
        });
        return {
          ...state,
          filteredProducts: categorizedProducts,
          category: action.payload.category,
          sort: "",
        };
      }

    case "ADD_TO_CART":
      const cartItemsCopy = [...state.cartItems];
      let alreadyInCart = false;
      cartItemsCopy.forEach((item) => {
        if (item.id === action.payload.product.id) {
          item.inCartQuantity! += 1;
          alreadyInCart = true;
        }
      });
      if (!alreadyInCart) {
        cartItemsCopy.push({ ...action.payload.product, inCartQuantity: 1 });
      }

      return {
        ...state,
        cartItems: cartItemsCopy,
      };

    case "REMOVE_FROM_CART":
      const cartItemsCopy2 = [...state.cartItems];
      cartItemsCopy2.forEach((item, index) => {
        if (item.id === action.payload.product.id) {
          if (item.inCartQuantity! > 1) {
            item.inCartQuantity! -= 1;
          } else {
            cartItemsCopy2.splice(index, 1);
          }
        }
      });
      return {
        ...state,
        cartItems: cartItemsCopy2,
      };

    case "REMOVE_ALL_FROM_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
}
