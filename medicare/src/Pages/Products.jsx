import React, { useEffect, useState } from "react";
import { ProductList } from "../Components/ProductList";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(
    searchParams.getAll("Category") || []
  );
  const [order, setOrder] = useState(searchParams.get("order") || []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const params = {
      Category: category,
      order: order,
      q: e.target.value,
    };

    setSearchParams(params);
  };

  useEffect(() => {
    let params = {
      Category: category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);

  return (
    <div>
      <div>
        <h3>Search</h3>
        <input
          type="text"
          placeholder="Enter search query"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <DIV>
        <div className="product-list">
          <ProductList />
        </div>
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  display: flex;
  margin: auto;
  width: 98%;

  .product-list {
    width: 85%;
    display: flex;
    margin: 0 auto;
  }
`;
