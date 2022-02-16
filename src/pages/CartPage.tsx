import { useSelector } from "react-redux";
import CartPageItem from "./CartPageItem";
import { RootStateType } from "../redux/reducers/rootReducer";
import { darkModeType, ProductType } from "../types";
import formatCurrency from "../utilities";
import { Link } from "react-router-dom";
import { BsCartDash, BsCartPlus } from "react-icons/bs";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import CreateOrder from "../components/Cart/CreateOrder";
import Toggle from "react-toggle";

function CartPage({ toggleDarkMode, darkMode }: darkModeType) {
  const [showCheckoutForm, setShowCheckoutForm] = useState<boolean>(false);

  const cartItems = useSelector(
    (state: RootStateType) => state.productReducer.cartItems
  );
  console.log(cartItems);
  return (
    <div className="App">
      <header>
        <div>
          <a href="/cart"> Checkout Page</a>
        </div>
        <div>
          <Link to="/cart" className="cartIcon">
            {cartItems.length > 0 ? <BsCartPlus /> : <BsCartDash />}
            {cartItems.length > 0 ? (
              <span className="cart-number">{cartItems.length}</span>
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

      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <main className="col-md-9">
              <div className="card" style={{ marginTop: "60px" }}>
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" style={{ width: "120px" }}>
                        Quantity
                      </th>
                      <th scope="col" style={{ width: "120px" }}>
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-right"
                        style={{ width: "200px" }}
                      >
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item: ProductType) => (
                      <CartPageItem key={item.id} item={item} />
                    ))}
                  </tbody>
                </table>

                <div className="card-body border-top">
                  <button
                    className="btn btn-primary float-md-right"
                    onClick={() => {
                      cartItems.length > 0 &&
                        setShowCheckoutForm(!showCheckoutForm);
                    }}
                  >
                    {showCheckoutForm ? "Hide Checkout Form" : "Make Purchase"}{" "}
                    <i className="fa fa-chevron-right"></i>{" "}
                  </button>
                  <Link
                    to="/"
                    className="btn btn-light"
                    style={{
                      backgroundColor: "#376190",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    <i className="fa fa-chevron-left"></i> &nbsp; Continue
                    shopping
                  </Link>
                </div>
              </div>

              <div className="alert alert-success mt-3">
                <p className="icontext">
                  <i className="icon text-success fa fa-truck"></i> Free
                  Delivery within 3-4 days
                </p>
              </div>
            </main>
            <aside className="col-md-3" style={{ marginTop: "60px" }}>
              <div className="card mb-3">
                <div
                  className={darkMode ? "card-body dark-checkout" : "card-body"}
                >
                  <form>
                    <div className="form-group">
                      <label>Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          placeholder="Coupon code"
                        />
                        <span className="input-group-append">
                          <button className="btn btn-primary">Apply</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div
                  className={darkMode ? "card-body dark-checkout" : "card-body"}
                >
                  <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right">
                      {formatCurrency(
                        cartItems.reduce(
                          (a, b) => a + b.price * b.inCartQuantity!,
                          0
                        )
                      )}
                    </dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right">00</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right  h5">
                      <strong>
                        {formatCurrency(
                          cartItems.reduce(
                            (a, b) => a + b.price * b.inCartQuantity!,
                            0
                          )
                        )}
                      </strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center mb-3">
                    <img
                      src="assets/images/payments.png"
                      alt="payment-gateways"
                      height="26"
                    />
                  </p>
                </div>
              </div>
              <Link
                to="/"
                className="btn btn-outline-success btn-block mt-5"
                style={{ fontSize: "14px" }}
              >
                Home
              </Link>
            </aside>
          </div>
        </div>
      </section>
      {showCheckoutForm && (
        <div className="container">
          <CreateOrder origin="checkoutpage" />
        </div>
      )}
      <section
        className={
          darkMode
            ? "section-name bg padding-y dark-checkout"
            : "section-name bg padding-y"
        }
      >
        <div className="container">
          <h6>Payment and refund policy</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <div style={{ marginTop: "323px" }}>
        <Footer />
      </div>
    </div>
  );
}
export default CartPage;
