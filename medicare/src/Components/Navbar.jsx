import React from "react";
import { Link } from "react-router-dom";
import {styled} from "styled-components"
import medilogo from "../assests/MediCare.png"
export const Navbar = () => {

return (
 <NAVWRAPPER>

{/* <h1>MediCare</h1> */}
<img src={medilogo} width="100px"/>
<Link to={"/"}>Home</Link>
<Link to={"/login"}>Login</Link>
<Link to={"/Add To Cart"}>Add To Cart</Link>

 </NAVWRAPPER>

);

};

const NAVWRAPPER = styled.div`
display:flex;
justify-content: space-between;
margin:auto;
align-items:center;
gap:20px;
background-color: white;

`;