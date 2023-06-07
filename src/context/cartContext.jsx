import { createContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, {
        cartCounter: 0,
        cart: [],
    });

    const addToCart = async (userProduct) => {
        try {
            const token = localStorage.getItem("token");
            const auth = {
                authorization: token,
            };
            const requestBody = JSON.stringify({ product: userProduct });
            const response = await fetch("/api/user/cart", {
                method: "POST",
                headers: auth,
                body: requestBody,
            });
            if (response.status === 201) {
                dispatch({ type: "ADD_TO_CART", payload: userProduct });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const removeFromCart = async (userProduct) => {
        try {
            const token = localStorage.getItem("token");
            const auth = {
                authorization: token,
            };
            const response = await fetch(`/api/user/cart/${userProduct._id}`, {
                method: "DELETE",
                headers: auth,
            });

            if (response.status === 200) {
                dispatch({ type: "REMOVE_FROM_CART", payload: userProduct });
            }
        } catch (err) {
            console.error(err);
        }
    };
    
    const isProductInCart = (productId) => {
        return cartState.cart.find(({ _id }) => _id === productId);
    };


    return (
        <CartContext.Provider
            value={{
                addToCart,
                removeFromCart,
                isProductInCart,
              
                cart: cartState.cart,
                cartCounter: cartState.cartCounter
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
export { CartContext, CartContextProvider };
