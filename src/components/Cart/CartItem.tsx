import { Fade } from "react-awesome-reveal";
import { Button } from "react-bootstrap";
import { CartItemType, ProductType } from "../../types";
import formatCurrency from "../../utilities";

const CartItem = ({
  cartItem,
  handleRemoveFromCart,
}: {
  cartItem: ProductType;
  handleRemoveFromCart: (cartItem: ProductType) => void;
}) => {
  return (
    <Fade triggerOnce cascade direction="left" duration={1000}>
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
              onClick={() => handleRemoveFromCart(cartItem)}
            >
              Remove
            </Button>
          </div>
        </div>
      </li>
    </Fade>
  );
};

export default CartItem;
