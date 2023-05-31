import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/landing-page";
import { Navbar } from "./components/navbar/navbar";
import { FilterProductListing } from "./pages/filterProductPage";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<FilterProductListing/>}/>
        </Routes>
    </>
  );
}

export default App;
