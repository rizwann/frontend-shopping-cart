import { useState } from "react";
import { ProductType } from "../../types";
import Product from "../Product/Product";
import "./Products.css";
import Modal from "react-modal";
import { Zoom } from "react-awesome-reveal";
import { Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import formatCurrency from "../../utilities";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../redux/reducers/rootReducer";
import { addToCart } from "../../redux/actions/productActions";

Modal.setAppElement("#root");

const Products = () => {
  const [modalItem, setModalItem] = useState<any | null>(null);
  const products = useSelector(
    (state: RootStateType) => state.productReducer.filteredProducts
  );
  const dispatch = useDispatch();

  function handleAddToCart(product: ProductType): void {
    dispatch(addToCart(product));
  }

  const openModal = (product: ProductType): void => {
    setModalItem(product);
  };

  const closeModal = () => {
    setModalItem(null);
  };

  return (
    <div>
      <ul className="products">
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            openModal={openModal}
          />
        ))}
      </ul>
      {modalItem && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <Button
              onClick={closeModal}
              className="close-modal"
              variant="outline-danger"
            >
              X
            </Button>
            <div className="product-details">
              <img src={modalItem.image} alt={modalItem.title} />
              <div className="product-details-desc">
                <p>
                  {" "}
                  <strong> {modalItem.title}</strong>
                </p>
                <p>{modalItem.description}</p>
                <p>
                  Category: &nbsp;{" "}
                  <span className="cat">{modalItem.category} </span>
                </p>
                <div className="rating">
                  <StarRatings
                    rating={modalItem?.rating.rate}
                    starRatedColor="blue"
                    numberOfStars={5}
                    name="rating"
                    starDimension="15px"
                    starSpacing="5px"
                  />{" "}
                  <span>{modalItem.rating.count} reviews </span>
                </div>
                <div className="product-price">
                  <div>{formatCurrency(modalItem.price)}</div>
                  <Button
                    variant="warning"
                    className="button"
                    onClick={() => {
                      handleAddToCart(modalItem);
                      closeModal();
                    }}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Products;
