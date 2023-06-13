import { useContext } from "react";
import { ProductCard } from "../productCard/product";
import "./wishlist.css";
import { WishlistContext } from "../../context/wishlistContext";
const WishlistComponent = () => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <>
      <div className="wishlist-container mt-5">
        <h2 className="ml-1">My Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="flex-center mt-5 fw-600">
            You don't have any product inside your wishlist
          </p>
        ) : (
          <ul className="wishlist-product-listing">
            {wishlist.map((product) => (
              <li>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export { WishlistComponent };
