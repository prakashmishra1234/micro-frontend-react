import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationProducts from "Products/NavigationProducts";
import Navigation from "Home/Navigation";
import NavigationBlog from "Blog/NavigationBlog";
import Layout from "./components/Layout";
import { createBrowserHistory } from "history";
import Login from "./components/Auth/Login";

const history = createBrowserHistory();

const Navigationcontainer = () => {
  return (
    <BrowserRouter history={history}>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/*" element={<Navigation />} />
          <Route path="/products/*" element={<NavigationProducts />} />
          <Route path="/blogs/*" element={<NavigationBlog />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Navigationcontainer;
