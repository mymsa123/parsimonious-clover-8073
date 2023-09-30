import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCard = ({
  id,
  Name,
  Image,
  Price,
  Desc,
  Category,
  Manufacturer,
}) => {
  return (
    <CARDWRAPPER>
      <img src={Image} alt="" width={200} />
      <br />
      <p>{id}</p>
      <h2>{Name}</h2>
      <h3>Price : ₹{Price}</h3>
      <p>Manufacturer : {Manufacturer}</p>
      <p>Category : {Category}</p>
      <p>Description : {Desc}</p>
      <button>Add to Cart</button>
    </CARDWRAPPER>
  );
};

const CARDWRAPPER = styled.div`
  border: 1px solid gray;
  padding: 10px;
  margin-bottom: 40px;

  img {
    width: 200px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  button {
    width: 90%;
    height: 30px;
    color: white;
    background-color: #00525d;
    border-radius: 5px;
  }
`;
