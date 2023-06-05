import { createContext, useReducer } from "react";
import { cartReducer } from "../reducer/mainReducersFile";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartData, dispatch] = useReducer(cartReducer, {
        wishlist: [],
        filter: {
            category: [],
            userRating: null,
            searchQuery: "",
            sortby: null,
            price: 50000,
        },
    });
    //   const getCartData = async () => {
    //     try {
    //       const token = localStorage.getItem("token");
    //       const auth = {
    //         authorization: token,
    //       };

    //       const responseWishlist = await (
    //         await fetch("/api/user/wishlist", {
    //           method: "GET",
    //           headers: auth,
    //         })
    //       ).json();

    //       if (responseWishlist.status === 200) {
    //         dispatch({
    //           type: "ADD_TO_WISHLIST",
    //           payload: responseWishlist.wishlist,
    //         });
    //       }
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   };

    const addToWishList = async(userProduct) => {
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

    const removeFromWishlist = async(userProduct) => {
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
                dispatch({ type: "ADD_TO_WISHLIST", payload: userProduct });
            }
        } catch (err) {
            console.error(err);
        }
    };
    const isProductInWishlist = (productId) => {
        return cartData.wishlist.find(({ _id }) => _id === productId);
    };

    const toggleWishlist = (userProduct) => {
        isProductInWishlist(userProduct._id) ?
            removeFromWishlist(userProduct) :
            addToWishList(userProduct);
    };


    const addFilterCategory = (category) => {
        dispatch({ type: "FILTER_CATEGORY", payload: category });
    };
    const addFilterRating = (e) => {
        if (e.target.checked) {
            dispatch({ type: "FILTER_RATING", payload: Number(e.target.value) });
        }
    };
    const addFilterQuery = (e) => {
        dispatch({ type: "FILTER_SEARCH_QUERY", payload: e.target.value });
    };
    const addFilterSortPrice = (e) => {
        if (e.target.checked) {
            dispatch({ type: "FILTER_SORT_PRICE", payload: e.target.value });
        }

    };
    const addFilterRange = (e) => {
        dispatch({ type: "FILTER_PRICE", payload: Number(e.target.value) });
    };
    const clearFilter = (e) => {
        dispatch({ type: "CLEAR_FILTER", payload: {} });
        e.preventDefault();
    };
    return ( <
        CartContext.Provider value = {
            {
                addFilterCategory,
                addFilterRating,
                addFilterQuery,
                addFilterSortPrice,
                addFilterRange,
                clearFilter,
                addToWishList,
                removeFromWishlist,
                toggleWishlist,
                isProductInWishlist,
                range: cartData.filter.price,
                filter: cartData.filter,
                wishlist: cartData.wishlist
            }
        } >
        { children } <
        /CartContext.Provider>
    );
};
export { CartContext, CartContextProvider };