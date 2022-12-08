import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeMain from "./components/HomeMain";
import Homedetails from "./components/Homedetails.js";
import { StoreProvider } from "Conainer/Provider";

const Navigation = () => {
  return (
    <StoreProvider>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/details" element={<Homedetails />} />
      </Routes>
    </StoreProvider>
  );
};

export default Navigation;
