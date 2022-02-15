import React from "react";
import { Button } from "react-bootstrap";
import { CartItemType } from "../../types";
import formatCurrency from "../../utilities";

const CartItem = ({
  cartItem,
  handleRemoveFromCart,
}: {
  cartItem: CartItemType;
  handleRemoveFromCart: (cartItem: CartItemType) => void;
}) => {
  return (
    <li className="cart-item">
      <div>
        <img src={cartItem.image} alt={cartItem.title} />
      </div>
      <div>
        <div> {cartItem.title} </div>
        <div className="cart-right">
          {formatCurrency(cartItem.price)} x {cartItem.inCartQuantity}
          <Button
            style={{ marginLeft: "15px" }}
            variant="outline-danger"
            className="button"
            onClick={() => handleRemoveFromCart(cartItem)}
          >
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
