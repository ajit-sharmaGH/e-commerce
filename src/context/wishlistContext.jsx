
import { createContext, useReducer } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";



const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
    const [wishlistState, dispatch] = useReducer(wishlistReducer,{
            wishlistCounter: 0,
            wishlist: [],
        }
    );

    const addToWishList = async (userProduct) => {
        try {
          const token = localStorage.getItem("token");
          const auth = {
            authorization: token,
          };
          const requestBody = JSON.stringify({ product: userProduct });
          const response = await fetch("/api/user/wishlist", {
            method: "POST",
            headers: auth,
            body: requestBody,
          });
          if (response.status === 201) {
            dispatch({ type: "ADD_TO_WISHLIST", payload: userProduct });
          }
        } catch (err) {
          console.error(err);
        }
      };
    
      const removeFromWishlist = async (userProduct) => {
        try {
          const token = localStorage.getItem("token");
          const auth = {
            authorization: token,
          };
          const response = await fetch(`/api/user/wishlist/${userProduct._id}`, {
            method: "DELETE",
            headers: auth,
          });
    
          if (response.status === 200) {
            dispatch({ type: "REMOVE_FROM_WISHLIST", payload: userProduct });
          }
        } catch (err) {
          console.error(err);
        }
      };
      const isProductInWishlist = (productId) => {
        return wishlistState.wishlist.find(({ _id }) => _id === productId);
      };
    
      const toggleWishlist = (userProduct) => {
        isProductInWishlist(userProduct._id)
          ? removeFromWishlist(userProduct)
          : addToWishList(userProduct);
      };
    
    return (
        <WishlistContext.Provider value={{ 
            addToWishList,
            removeFromWishlist,
            toggleWishlist,
            isProductInWishlist, 
            wishlist: wishlistState.wishlist,
            wishlistCounter: wishlistState.wishlistCounter,}}>
            {" "}
            {children}{" "}
        </WishlistContext.Provider>
    );
};
export { WishlistContextProvider, WishlistContext };