import { Button } from "react-bootstrap";
import { ProductType } from "../../types";
import formatCurrency from "../../utilities";
import "./Product.css";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <li>
      <div className="product">
        <a href={"#" + product.id}>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
        </a>
        <div className="product-price">
          <div>{formatCurrency(product.price)}</div>
          <Button variant="warning" className="button">
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Product;
