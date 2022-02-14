import { Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";

import { ProductType } from "../../types";
import formatCurrency from "../../utilities";
import "./Product.css";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <li>
      <div className="product">
        <a href={"#" + product.id}>
          <img src={product.image} alt={product.title} /> <br /> <br />
          <p>{product.title}</p>
          <div className="rating">
            <StarRatings
              rating={product?.rating.rate}
              starRatedColor="blue"
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing="5px"
            />{" "}
            <span>{product.rating.count} reviews </span>
          </div>
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
