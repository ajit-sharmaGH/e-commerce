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
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishlistContextProvider>
      <ProductContextProvider>
        <FilterContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </FilterContextProvider>
      </ProductContextProvider>
      </WishlistContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
