const cartReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...prevState,
        cartCounter: prevState.cartCounter + 1,
        cart: [...prevState.cart, {...payload,   quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...prevState,
        cart: prevState.cart.filter(({ _id }) => payload._id !== _id),
        cartCounter: prevState.cartCounter - 1,
      };

    case "DECREASE_QUANTITY":
      return {
        ...prevState,
        cart: prevState.cart.map((data) =>
          data._id === payload.value
            ? {
                ...data,
                quantity: data.quantity - 1,
              }
            : data
        ),
      };
    case "INCREASE_QUANTITY":
      return {
        ...prevState,
        cart: prevState.cart.map((data) =>
          data._id === payload.value
            ? {
                ...data,
                quantity: data.quantity + 1,
              }
            : data
        ),
      };

    default:
      return prevState;
  }
};
export { cartReducer };
