import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";

const NavigationProducts = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/details" element={<ProductDetails />} />
    </Routes>
  );
};

export default NavigationProducts;
