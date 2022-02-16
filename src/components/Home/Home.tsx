import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../../redux/actions/productActions";
import { RootStateType } from "../../redux/reducers/rootReducer";
import { CartItemType, ProductType } from "../../types";
import Cart from "../Cart/Cart";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";

const Home = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  const allProducts = useSelector(
    (state: RootStateType) => state.productReducer.filteredProducts
  );

  const handleAddToCart = (product: ProductType): void => {
    const cartItemsCopy = [...cartItems];
    let alreadyInCart = false;
    cartItemsCopy.forEach((item) => {
      if (item.id === product.id) {
        item.inCartQuantity += 1;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItemsCopy.push({ ...product, inCartQuantity: 1 });
    }
    setCartItems(cartItemsCopy);
  };

  const handleRemoveFromCart = (cartItem: CartItemType): void => {
    const cartItemsCopy = [...cartItems];
    cartItemsCopy.forEach((item) => {
      if (item.id === cartItem.id) {
        item.inCartQuantity -= 1;
        if (item.inCartQuantity === 0) {
          cartItemsCopy.splice(cartItemsCopy.indexOf(item), 1);
        }
      }
    });

    setCartItems(cartItemsCopy);
  };

  const removeAllFromCart = (): void => {
    setCartItems([]);
  };

  return (
    <div className="app-container">
      <header>
        <a href="/"> React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter />
            <Products
              products={allProducts}
              handleAddToCart={handleAddToCart}
            />
          </div>
          <div className="sidebar">
            <Cart
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
              removeAllFromCart={removeAllFromCart}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
