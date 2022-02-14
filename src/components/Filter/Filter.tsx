import { Form } from "react-bootstrap";
import "./Filter.css";

type FilterProps = {
  count: number;
  sort: string;
  category: string;
  keyword: string;
  handleSortProducts: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleFilterProducts: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearchProducts: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Filter = ({
  count,
  sort,
  handleSortProducts,
  handleFilterProducts,
  category,
  keyword,
  handleSearchProducts,
}: FilterProps) => {
  return (
    <div className="filter">
      <div className="filter-count">{count} Products.</div>
      <div className="filter-sort">
        Sort{" "}
        <select value={sort} onChange={handleSortProducts}>
          <option value="ASC">Default</option>
          <option value="DESC">Name (Z-A)</option>
          <option value="lowest">Price: Low to High</option>
          <option value="highest">Price: High to Low</option>
        </select>
      </div>
      <div className="filter-cat">
        Categories{" "}
        <select value={category} onChange={handleFilterProducts}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>
      <div className="search">
        <Form className="d-flex nv-search">
          <input
            type="text"
            placeholder="Search product.."
            className="me-2 sm nv-input"
            aria-label="Search"
            value={keyword}
            onChange={handleSearchProducts}
          />
        </Form>
      </div>
    </div>
  );
};

export default Filter;
