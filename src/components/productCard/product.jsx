import "./product.css";
import { useContext } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
import { AuthContext } from "../../context/authContext";
import { useLocation, useNavigate } from "react-router";
import { WishlistContext } from "../../context/wishlistContext";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { checkLogin } = useContext(AuthContext);
  const { isProductInWishlist, toggleWishlist } = useContext(WishlistContext);
  const { location } = useLocation();
  const authCheckWishlist = (product) => {
    if (checkLogin()) {
      toggleWishlist(product);
    } else {
      navigate("/login", { state: location });
    }
  };
  return (
    <div>
      {product.inStock ? (
        <main key={product._id} className="product-card margin-half">
          <div className="card-image">
            <span onClick={() => authCheckWishlist(product)}>
              {isProductInWishlist(product._id) && checkLogin() ? (
                <AiFillHeart className="heart-icon-color"  />
              ) : (
                <AiOutlineHeart/>
              )}
            </span>
            {product.trending && <small>Trending</small>}
            <div
              className="know-more-about flex-center"
              onClick={() => navigate(`/products/${product._id}`)}
            >
              Click here to Know More
            </div>
            <img
              src={product.productImage}
              className="product-image"
              onClick={() => navigate(`/products/${product._id}`)}
              alt={product.title}
            />
            <label> {product.rating} ⭐ </label>
          </div>
          <h4> {product.title} </h4>
          <div className="card-prices margin-half">
            <span>
              <b>₹/:</b> {product.originalPrice}
            </span>
            <p>
              <small>Discount :</small>₹/
              <strike> {product.discountPrice} </strike>
            </p>
          </div>
          <p className="margin-half">
            {product.ratingSign}
            <small className="small-half-rating">1/2</small>
          </p>
          <button>
            Add To Cart{" "}
            <label>
              {" "}
              <AiOutlineShoppingCart />{" "}
            </label>{" "}
          </button>
        </main>
      ) : (
        <main key={product._id} className="product-card margin-half">
          <div className="card-image">
            <div
              className="out-of-stock flex-center"
              onClick={() => navigate(`/products/${product._id}`)}
            >
              Out Of Stock
            </div>
            <span onClick={() => authCheckWishlist(product)}>
              {isProductInWishlist(product._id) && checkLogin() ? (
                <AiFillHeart className="heart-icon-color"  />
              ) : (
                <AiOutlineHeart/>
              )}
            </span>

            <img
              src={product.productImage}
              className="product-image"
              onClick={() => navigate(`/products/${product._id}`)}
              alt={product.title}
            />
            <label> {product.rating} ⭐ </label>
          </div>
          <h4> {product.title} </h4>
          <div className="card-prices margin-half">
            <span>
              <b>₹/:</b> {product.originalPrice}
            </span>
            <p>
              <small>Discount :</small>₹/
              <strike> {product.discountPrice} </strike>
            </p>
          </div>
          <p className="margin-half">
            {product.ratingSign}
            <small className="small-half-rating">1/2</small>
          </p>
          <button>
            Add To Cart{" "}
            <label>
              {" "}
              <AiOutlineShoppingCart />{" "}
            </label>{" "}
          </button>
        </main>
      )}
    </div>
  );
};
export { ProductCard };
