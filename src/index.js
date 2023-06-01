import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { ProductContextProvider } from "./context/productContext";
import { CartContextProvider } from "./context/cartContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductContextProvider>
        <CartContextProvider>
        <App />
        </CartContextProvider>
      </ProductContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
