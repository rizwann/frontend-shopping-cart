import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/productActions";
import { RootStateType } from "../../redux/reducers/rootReducer";
import { ProductType } from "../../types";
import formatCurrency from "../../utilities";
import "./Cart.css";
import CartItem from "./CartItem";
import CreateOrder from "./CreateOrder";

const Cart = () => {
  const [showCheckoutForm, setShowCheckoutForm] = useState<boolean>(false);

  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootStateType) => state.productReducer.cartItems
  );

  function handleRemoveFromCart(product: ProductType): void {
    dispatch(removeFromCart(product));
  }

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
            <CreateOrder origin="homepage" />
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
