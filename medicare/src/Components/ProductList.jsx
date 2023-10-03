import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Products/action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/ProductList.module.css";

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const paramsObj = {
    params: {
      Category: searchParams.getAll("Category"),
      _sort: searchParams.get("order") && "Price",
      _order: searchParams.get("order"),
      q: searchQuery,
    },
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(getProduct(paramsObj));
  }, [searchParams, searchQuery]);

  console.log(products);

  return (
    <div className={styles.product_list}>
      <div className={styles.search_container}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search for medicine and healthcare products"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <DIV>
        {products.length > 0 &&
          products.map((el, i) => {
            return <ProductCard key={i} {...el} />;
          })}
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4em;

  @media screen and (min-width: 521px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2em;
  }
`;
