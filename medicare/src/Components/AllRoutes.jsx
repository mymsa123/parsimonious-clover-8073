import React from "react";
import { Products } from "../Pages/Products";
import DoctorsList from "../Pages/DoctorsList";
import { Routes, Route } from "react-router";
import { Home } from "./Home";
import Book from "../Pages/Book";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/medicines" element={<Products />} />
      <Route path="/doctors" element={<DoctorsList />} />
      <Route path="/book" element={<Book />} />
    </Routes>
  );
};
