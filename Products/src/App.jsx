import React from "react";
import ReactDOM from "react-dom";
import NavigationProducts from "./NavigationProducts";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const App = () => (
  <BrowserRouter>
    <NavigationProducts />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
