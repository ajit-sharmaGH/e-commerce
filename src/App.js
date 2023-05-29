import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/landing-page";
import { Navbar } from "./components/navbar/navbar";
import { ProductListingPage } from "./pages/productListing";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListingPage/>}/>
        </Routes>
    </>
  );
}

export default App;
