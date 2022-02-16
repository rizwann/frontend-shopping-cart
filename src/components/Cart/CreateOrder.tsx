import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeAllFromCart } from "../../redux/actions/productActions";

const CreateOrder = ({ origin }: { origin: string }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const dispatch = useDispatch();

  function handleRemoveAllFromCart(): void {
    dispatch(removeAllFromCart());
  }

  const createOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "Thank you! Order created for " + name + " against the email: " + email
    );

    handleRemoveAllFromCart();
    window.location.replace("/");
  };

  return (
    <Fade triggerOnce cascade direction="right" duration={1000}>
      <div
        className="create-order"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <h1 className="text-success display-1 font-weight-bold">
          {origin === "checkoutpage" ? " Create " : "Make"} Order
        </h1>
      </div>
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
  );
};

export default CreateOrder;
