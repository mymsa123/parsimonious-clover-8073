import React from "react";
import { ProductList } from "../Components/ProductList";
import styled from "styled-components";
import { Sidebar } from "../Components/Sidebar";

export const Products = () => {
  return (
    <DIV>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="product-list">
        <ProductList />
      </div>
    </DIV>
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
