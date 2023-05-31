import "./navbar.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
const Navbar = () => {
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
        <li>
          <AiOutlineHeart />
        </li>
        <li>
          <AiOutlineShoppingCart />
        </li>
        <li>
          <AiOutlineUserAdd />
        </li>
      </ul>
    </div>
  );
};
export { Navbar };
