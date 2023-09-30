import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Products/action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.productReducer.products);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const searchQuery = searchParams.get("q") || "";

  const products = allProducts.filter((product) =>
    product.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const paramsObj = {
      Category: searchParams.getAll("Category"),
      _sort: searchParams.get("order") && "Price",
      _order: searchParams.get("order"),
    };

    const query = searchParams.get("q");
    if (query) {
      paramsObj.q = query;
    }

    dispatch(getProduct(paramsObj));
  }, [location.search]);

  return (
    <DIV>
      {products.length > 0 &&
        products.map((el, i) => {
          return <ProductCard key={i} {...el} />;
        })}
    </DIV>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 15px;
`;
