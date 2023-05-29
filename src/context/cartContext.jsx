import { createContext, useReducer } from "react";
import { cartReducer } from "../reducer/reducers";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartData, dispatch] = useReducer(cartReducer, {
    filter: {
      category: [],
      userRating: null,
      searchQuery: "",
    },
  });

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

  return (
    <CartContext.Provider
      value={{
        addFilterCategory,
        addFilterRating,
        addFilterQuery,
        filter: cartData.filter,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, CartContextProvider };
