import { Fade } from "react-awesome-reveal";
import { Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";

import { ProductType } from "../../types";
import formatCurrency from "../../utilities";
import "./Product.css";

const Product = ({
  product,
  handleAddToCart,
}: {
  product: ProductType;
  handleAddToCart: (product: ProductType) => void;
}) => {
  return (
    <Fade triggerOnce cascade direction="left" duration={2000}>
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
            <Button
              variant="warning"
              className="button"
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </li>
    </Fade>
  );
};

export default Product;
