import React from "react";
import ReactDOM from "react-dom";
import NavigationContainer from "./NavigationContainer.js";

import "./index.css";
import { StoreProvider } from "Conainer/Provider";

const App = () => (
  <StoreProvider>
    <NavigationContainer />
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
