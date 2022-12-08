import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const App = () => (
  <div>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
