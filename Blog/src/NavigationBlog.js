import React from "react";
import { Routes, Route } from "react-router-dom";
import Blogmain from "./components/Blogmain";

const NavigationBlog = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogmain />} />
    </Routes>
  );
};

export default NavigationBlog;
