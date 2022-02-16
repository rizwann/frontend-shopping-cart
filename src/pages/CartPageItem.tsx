import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";
import { addToCart, removeFromCart } from "../redux/actions/productActions";
import { ProductType } from "../types";
import formatCurrency from "../utilities";

const CartPageItem = ({ item }: { item: ProductType }) => {
  const dispatch = useDispatch();

  function handleAddToCart(product: ProductType): void {
    dispatch(addToCart(product));
  }
  function handleRemoveFromCart(product: ProductType): void {
    dispatch(removeFromCart(product));
  }

  return (
    <tr>
      <td>
        <figure className="itemside">
          <div className="aside">
            <img
              src={item.image}
              className="img-sm"
              style={{ objectFit: "contain" }}
              alt={item.title}
            />
          </div>
          <figcaption className="info">
            <p className="title text-dark">{item.title}</p>
            <p className="text-muted small">
              <span style={{ textTransform: "capitalize" }}>
                {" "}
                Category: {item.category}
              </span>
              <br /> Rating: &nbsp;
              <StarRatings
                rating={item?.rating.rate}
                starRatedColor="orange"
                numberOfStars={5}
                name="rating"
                starDimension="7px"
                starSpacing="2px"
              />{" "}
              <span
                style={{
                  color: "#a3956e",
                  fontSize: "10px",
                  marginLeft: "5px",
                }}
              >
                {item.rating.count} reviews{" "}
              </span>
            </p>
          </figcaption>
        </figure>
      </td>
      <td style={{ textAlign: "center" }}>{item.inCartQuantity}</td>
      <td>
        <div className="price-wrap">
          <var className="price">
            {formatCurrency(item.inCartQuantity! * item.price)}
          </var>
          <small className="text-muted">
            {" "}
            {formatCurrency(item.price)} each{" "}
          </small>
        </div>
      </td>
      <td className="text-right">
        <button
          className="btn btn-outline-success mr-2"
          onClick={() => handleAddToCart(item)}
        >
          {" "}
          <i className="fa fa-plus"></i>
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => handleRemoveFromCart(item)}
        >
          {" "}
          <i className="fa fa-minus"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartPageItem;
