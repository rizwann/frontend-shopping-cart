import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsAsync } from "../../redux/actions/productActions";

import Cart from "../Cart/Cart";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  // const handleAddToCart = (product: ProductType): void => {
  //   const cartItemsCopy = [...cartItems];
  //   let alreadyInCart = false;
  //   cartItemsCopy.forEach((item) => {
  //     if (item.id === product.id) {
  //       item.inCartQuantity += 1;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItemsCopy.push({ ...product, inCartQuantity: 1 });
  //   }
  //   setCartItems(cartItemsCopy);
  // };

  // const handleRemoveFromCart = (cartItem: ProductType): void => {
  //   const cartItemsCopy = [...cartItems];
  //   cartItemsCopy.forEach((item) => {
  //     if (item.id === cartItem.id) {
  //       item.inCartQuantity! -= 1;
  //       if (item.inCartQuantity === 0) {
  //         cartItemsCopy.splice(cartItemsCopy.indexOf(item), 1);
  //       }
  //     }
  //   });

  //   setCartItems(cartItemsCopy);
  // };

  // const removeAllFromCart = (): void => {
  //   setCartItems([]);
  // };

  return (
    <div className="app-container">
      <header>
        <a href="/"> React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter />
            <Products />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
