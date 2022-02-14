import React, { useEffect, useState } from "react";
import { ProductType } from "../../types";
import Footer from "../Footer/Footer";
import Products from "../Footer/Products/Products";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="app-container">
      <header>
        <a href="/"> React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
