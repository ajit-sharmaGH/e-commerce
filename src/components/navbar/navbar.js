import "./navbar.css";
import { useContext } from "react";
import { CartContext } from "../../context/mainContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
const Navbar = () => {
  const { checkLogin } = useContext(AuthContext);
  const { addFilterQuery } = useContext(CartContext);
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
          <li onClick={() => navigate("/products")} className="cursor fw-500">Shop</li>
        ) : (
          <li onClick={() => navigate("/login")} className="cursor fw-500">Login</li>
        )}
        <li>
          <AiOutlineHeart onClick={() => navigate("/wishlist")} />
        </li>
        <li>
          <AiOutlineShoppingCart />
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
