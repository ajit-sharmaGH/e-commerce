import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./cartProductCard.css";
import { AuthContext } from "../../context/authContext";
import { WishlistContext } from "../../context/wishlistContext";
import { useNavigate } from "react-router-dom";
const CartProductCard = ({ product }) => {
  const { checkLogin } = useContext(AuthContext);
  const { toggleWishlist, wishlist } = useContext(WishlistContext);
  const { removeFromCart, dispatch, cart } = useContext(CartContext);
  const navigate = useNavigate();
  const {
    _id,
    title,
    rating,
    productImage,
    originalPrice,
    discountPrice,
    quantity,
  } = product;
  const moveToWishlist = (product) => {
    if (checkLogin()) {
      toggleWishlist(product);
    } else {
      navigate("/login");
    }
  };

  const decreaseQuantity = (item) => {
    const product = cart.find((data) => data._id === item);
    if (product.quantity > 1) {
      dispatch({
        type: "DECREASE_QUANTITY",
        payload: { value: item },
      });
    }
  };

  const increaseQuantity = (item) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: { value: item },
    });
  };

  return (
    <div key={_id} className="flex-center cart-body">
      <div className="flex cart-container margin-half">
        <div>
          <img src={productImage} className="product-cart-image" alt="image_" />
        </div>

        <ul className="ml-1 product-features-list">
          <li> {title} </li>
          <li>Rs :/ {originalPrice} </li>
          <li>
            Rs :/<strike> {discountPrice} </strike>
          </li>
          <li> {rating} ⭐ </li>
          <li>
            <button onClick={() => decreaseQuantity(_id)}>-</button>
            <small className="quantity-update fw-600">{quantity}</small>
            <button onClick={() => increaseQuantity(_id)}>+</button>
          </li>
          <li>
            <button onClick={() => removeFromCart(product)}>
              Remove From Cart
            </button>
          </li>
          <li>
            <button onClick={() => moveToWishlist(product)}>
              {" "}
              {wishlist.find((item) => item._id === _id)
                ? "Remove From Wishlist"
                : "Move to Wishlist"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export { CartProductCard };
