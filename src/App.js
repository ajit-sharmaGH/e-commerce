import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/landing-page";
import { Navbar } from "./components/navbar/navbar";
import { FilterProductListing } from "./pages/filterProductPage";
import { ProductDetails } from "./components/productCard/productDetails";
import { LoginForm } from "./components/auth/login";
import { SignupForm } from "./components/auth/signup";
import { RequiresAuth } from "./components/auth/requiresAuth";
import { WishlistComponent } from "./components/wishlist/wishlist";
import { MockAPI } from "./components/mockbee/mockman";
import { ProfilePage } from "./pages/profile";
import { CartComponent } from "./components/cart/cart";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<FilterProductListing />} />
        <Route path="/products/:productId" element={<ProductDetails />} />

        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              {" "}
              <WishlistComponent />{" "}
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <CartComponent />
            </RequiresAuth>
          }
        />

        <Route path="/mockman" element={<MockAPI />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <ProfilePage />
            </RequiresAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
