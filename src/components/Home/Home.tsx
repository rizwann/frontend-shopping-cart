import React, { useEffect, useState } from "react";
import { CartItemType, ProductType } from "../../types";
import Cart from "../Cart/Cart";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [sort, setSort] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const api = "https://fakestoreapi.com/products/";

  const handleAddToCart = (product: ProductType): void => {
    const cartItemsCopy = [...cartItems];
    let alreadyInCart = false;
    cartItemsCopy.forEach((item) => {
      if (item.id === product.id) {
        item.inCartQuantity += 1;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItemsCopy.push({ ...product, inCartQuantity: 1 });
    }
    setCartItems(cartItemsCopy);
  };

  const handleRemoveFromCart = (cartItem: CartItemType): void => {
    const cartItemsCopy = [...cartItems];
    cartItemsCopy.forEach((item) => {
      if (item.id === cartItem.id) {
        item.inCartQuantity -= 1;
        if (item.inCartQuantity === 0) {
          cartItemsCopy.splice(cartItemsCopy.indexOf(item), 1);
        }
      }
    });

    setCartItems(cartItemsCopy);
  };

  const removeAllFromCart = (): void => {
    setCartItems([]);
  };

  const handleSortProducts = (
    ev: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSort(ev.target.value);

    const sortedProducts = [...filteredProducts];
    if (ev.target.value === "ASC") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (ev.target.value === "DESC") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (ev.target.value === "lowest") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (ev.target.value === "highest") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  const handleFilterProducts = (
    ev: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCategory(ev.target.value);

    const filteredProductsCopy = [...products];
    if (ev.target.value === "all") {
      setFilteredProducts(filteredProductsCopy);
      setSort("");
    } else {
      setFilteredProducts(
        filteredProductsCopy.filter(
          (product) => product.category === ev.target.value
        )
      );
      setSort("");
    }
  };

  const handleSearchProducts = (
    ev: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setKeyword(ev.target.value);
    setCategory("all");
    const searchedProducts = products.filter((product) => {
      return (
        product.title.toLowerCase().search(ev.target.value.toLowerCase()) !== -1
      );
    });
    setFilteredProducts(searchedProducts);
  };

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  return (
    <div className="app-container">
      <header>
        <a href="/"> React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={filteredProducts.length}
              sort={sort}
              category={category}
              handleSortProducts={handleSortProducts}
              handleFilterProducts={handleFilterProducts}
              handleSearchProducts={handleSearchProducts}
              keyword={keyword}
            />
            <Products
              products={filteredProducts}
              handleAddToCart={handleAddToCart}
            />
          </div>
          <div className="sidebar">
            <Cart
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
              removeAllFromCart={removeAllFromCart}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
