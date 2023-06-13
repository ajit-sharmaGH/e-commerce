import "./navbar.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import { WishlistContext } from "../../context/wishlistContext";
import { FilterContext } from "../../context/filterContext";
import { CartContext } from "../../context/cartContext";
const Navbar = () => {
  const { checkLogin } = useContext(AuthContext);
  const { addFilterQuery } = useContext(FilterContext);
  const { wishlistCounter, wishlist } = useContext(WishlistContext);
  const { cart, cartCounter } = useContext(CartContext);
  const navigate = useNavigate();
  const searchHandler = (e) => {
    navigate("/products");
    addFilterQuery(e);
  };
  return (
    <div className="navbar-container">
      <h3 onClick={() => navigate("/")} className="cursor">
        Lifestyle Store
      </h3>
      <span>
        <input
          type="text"
          name="search-bar"
          className="nav-search-bar"
          placeholder="Search Products..."
          onChange={(e) => searchHandler(e)}
        />
        <label id="search-bar">
          <FcSearch />
        </label>
      </span>
      <ul className="navbar-lists">
        {checkLogin() ? (
          <li onClick={() => navigate("/products")} className="cursor fw-500">
            Shop
          </li>
        ) : (
          <li onClick={() => navigate("/login")} className="cursor fw-500">
            Login
          </li>
        )}
        <li
          className="navbar-wishlist-icon cursor"
          onClick={() => navigate("/wishlist")}
        >
          <AiOutlineHeart />
          {wishlist.length !== 0 && checkLogin() && (
            <small> {wishlistCounter}</small>
          )}
        </li>
        <li
          onClick={() => navigate("/cart")}
          className="navbar-cart-icon cursor"
        >
          <AiOutlineShoppingCart />
          {cart.length !== 0 && checkLogin() && <small> {cartCounter} </small>}
        </li>
        <li>
          <AiOutlineUserAdd
            onClick={() => navigate("/profile")}
            className="cursor"
          />
        </li>
      </ul>
    </div>
  );
};
export { Navbar };
