import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { ProductContextProvider } from "./context/productContext";
import {  FilterContextProvider } from "./context/filterContext";
import { AuthContextProvider } from "./context/authContext";
import { WishlistContextProvider } from "./context/wishlistContext";
import { CartContextProvider } from "./context/cartContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
      <WishlistContextProvider>
      <ProductContextProvider>
        <FilterContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </FilterContextProvider>
      </ProductContextProvider>
      </WishlistContextProvider>
      </CartContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
