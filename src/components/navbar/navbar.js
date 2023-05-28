import "./navbar.css";

import { AiOutlineHeart,AiOutlineShoppingCart,AiOutlineUserAdd } from "react-icons/ai";
import {FcSearch} from "react-icons/fc"
const Navbar = () => {
  return (
    <div className="navbar-container">
      <h3>Lifestyle Store</h3>
      <span>
        <input type="text" name="search-bar" className="nav-search-bar" />
        <label id="search-bar"><FcSearch/></label>
      </span>
      <ul className="navbar-lists">
        <li><AiOutlineHeart/></li>
        <li><AiOutlineShoppingCart/></li>
        <li><AiOutlineUserAdd/></li>
      </ul>
    </div>
  );
};
export { Navbar };
