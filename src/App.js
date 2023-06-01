import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/landing-page";
import { Navbar } from "./components/navbar/navbar";
import { FilterProductListing } from "./pages/filterProductPage";
import { ProductDetails } from "./components/productCard/productDetails";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<FilterProductListing/>}/>
          <Route path="/products/:productId" element={<ProductDetails />} />

        </Routes>
    </>
  );
}

export default App;
