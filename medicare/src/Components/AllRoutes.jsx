import React from "react";
import { Products } from "../Pages/Products";
import DoctorsList from "../Pages/DoctorsList";
import { Routes, Route } from "react-router";
import { Home } from "./Home";
import Book from "../Pages/Book";
import { About } from "../Pages/AboutUs";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/medicines" element={<Products />} />
      <Route path="/doctors" element={<DoctorsList />} />
      <Route path="/book" element={<Book />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
