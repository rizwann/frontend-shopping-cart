import { ProductType } from "../../types";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <ul className="products">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
