import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./cartProductCard.css";
import { AuthContext } from "../../context/authContext";
import { WishlistContext } from "../../context/wishlistContext";
import { useNavigate } from "react-router-dom";
const CartProductCard = ({ product }) => {
    const { checkLogin } = useContext(AuthContext);
    const { toggleWishlist, wishlist } = useContext(WishlistContext);
    const { removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();
    const { _id, title, rating, productImage, originalPrice, discountPrice, quantity } =
        product;
    const moveToWishlist = (product) => {
        if (checkLogin()) {
            toggleWishlist(product);
        } else {
            navigate("/login");
        }
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

                        <button>
                            -
                        </button>
                        <small>
                            
                            {quantity}

                        </small>
                        <button>
                            +
                        </button>
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
