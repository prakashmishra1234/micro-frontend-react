import React from "react";
import ReactDOM from "react-dom";
import NavigationBlog from "./NavigationBlog.js";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <NavigationBlog />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
