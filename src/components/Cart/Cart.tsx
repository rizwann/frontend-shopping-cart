import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllFromCart,
  removeFromCart,
} from "../../redux/actions/productActions";
import { RootStateType } from "../../redux/reducers/rootReducer";
import { ProductType } from "../../types";
import formatCurrency from "../../utilities";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const [showCheckoutForm, setShowCheckoutForm] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootStateType) => state.productReducer.cartItems
  );

  function handleRemoveFromCart(product: ProductType): void {
    dispatch(removeFromCart(product));
  }
  function handleRemoveAllFromCart(): void {
    dispatch(removeAllFromCart());
  }

  const createOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "Thank you! Order created for " + name + " against the email: " + email
    );
    setShowCheckoutForm(false);
    handleRemoveAllFromCart();
    // window.location.reload();
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Your cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length}{" "}
          {cartItems.length === 1 ? "item" : "items"} in the cart.
        </div>
      )}
      <div className="cart">
        <ul className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </ul>
      </div>
      {cartItems.length > 0 && (
        <div>
          <div className="cart">
            <div className="cart-total">
              <div>
                Total: &nbsp;
                {formatCurrency(
                  cartItems.reduce((a, b) => a + b.price * b.inCartQuantity!, 0)
                )}
              </div>
              <Button
                variant="outline-success"
                size="lg"
                onClick={() => setShowCheckoutForm(!showCheckoutForm)}
              >
                {showCheckoutForm ? "Hide Checkout" : "Checkout"}
              </Button>
            </div>
          </div>
          {showCheckoutForm && ( // if showCheckoutForm is true, show the form
            <Fade triggerOnce cascade direction="right" duration={1000}>
              <div className="cart">
                <form onSubmit={createOrder}>
                  <ul className="form-container">
                    <li>
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </li>
                    <li>
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </li>
                    <li>
                      <label>Address</label>
                      <input
                        type="text"
                        name="address"
                        required
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </li>
                    <li>
                      <Button
                        type="submit"
                        variant="outline-success"
                        className="button"
                      >
                        Place Order
                      </Button>
                    </li>
                  </ul>
                </form>
              </div>
            </Fade>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
