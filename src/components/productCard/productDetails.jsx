import "./product.css";
import { useParams } from "react-router";
import { ProductContext } from "../../context/productContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../../context/wishlistContext";
const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { productDetails } = useContext(ProductContext);
  const { toggleWishlist, wishlist } = useContext(WishlistContext);
  const { checkLogin } = useContext(AuthContext);
  const product = productDetails(productId);
  const {
    _id,
    title,
    originalPrice,
    productDescription,
    discountPrice,
    productImage,
    rating,
    inStock,
    trending,
  } = product;

  const moveToWishlist = (product) => {
    if (checkLogin()) {
      toggleWishlist(product);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div key={_id} className="product-details-container">
        <div className="product-details-img-logo">
          {trending && <p className="trending-true"> Trending </p>}

          <img
            src={productImage}
            className="product-details-image"
            alt="image_tag"
          />
        </div>
        <div className="product-details-feature">
          <h3> {title} </h3>

          <p> {productDescription} </p>
          <p className="flex-col">
            {" "}
            <small>Rating : {rating}/5 ⭐</small>
          </p>
          <p className="flex-col">
            <span>Original Price : RS/: {originalPrice} </span>
            <small className="mt-1 mb-1">
              {" "}
              Discount: Rs/:<strike>&nbsp;{discountPrice} </strike>
            </small>{" "}
          </p>
          {inStock ? (
            <p className="inStock-true">Available in Stock</p>
          ) : (
            <p className="inStock-false">Out Of Stock</p>
          )}
          <button onClick={() => moveToWishlist(product)}>
            {" "}
            {wishlist.find((item)=>item._id===_id) 
              ? "Remove From Wishlist"
              : "Add to Wishlist"}{" "}
          </button>
          <button> Add to Cart </button>
        </div>
      </div>
    </>
  );
};
export { ProductDetails };
