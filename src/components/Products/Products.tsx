import { ProductType } from "../../types";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({
  products,
  handleAddToCart,
}: {
  products: ProductType[];
  handleAddToCart: (product: ProductType) => void;
}) => {
  return (
    // <Fade triggerOnce cascade direction="left" duration={2000}>
    <div>
      <ul className="products">
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </ul>
    </div>
    // </Fade>
  );
};

export default Products;
