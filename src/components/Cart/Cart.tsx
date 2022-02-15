import { Button } from "react-bootstrap";
import { CartItemType } from "../../types";
import formatCurrency from "../../utilities";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = ({
  cartItems,
  handleRemoveFromCart,
}: {
  cartItems: CartItemType[];
  handleRemoveFromCart: (cartItem: CartItemType) => void;
}) => {
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
        <div className="cart">
          <div className="cart-total">
            <div>
              Total: &nbsp;
              {formatCurrency(
                cartItems.reduce((a, b) => a + b.price * b.inCartQuantity, 0)
              )}
            </div>
            <Button variant="outline-success" size="lg">
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
