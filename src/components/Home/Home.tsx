import { useEffect } from "react";
import { BsCartDash, BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";

import { getProductsAsync } from "../../redux/actions/productActions";
import { RootStateType } from "../../redux/reducers/rootReducer";
import { darkModeType } from "../../types";

import Cart from "../Cart/Cart";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";

const Home = ({ toggleDarkMode, darkMode }: darkModeType) => {
  const dispatch = useDispatch();
  const cart = useSelector(
    (state: RootStateType) => state.productReducer.cartItems
  );

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  return (
    <div className="app-container">
      <header>
        <div>
          <a href="/"> React Shopping Cart</a>
        </div>
        <div>
          <Link to="/cart" className="cartIcon">
            {cart.length > 0 ? <BsCartPlus /> : <BsCartDash />}
            {cart.length > 0 ? (
              <span className="cart-number">{cart.length}</span>
            ) : (
              ""
            )}
          </Link>
          <Toggle
            icons={{
              checked: "☾",
              unchecked: "☽",
            }}
            defaultChecked={darkMode}
            onChange={toggleDarkMode}
          />
        </div>
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
