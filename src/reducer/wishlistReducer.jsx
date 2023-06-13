const wishlistReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISHLIST":
      return {
        ...prevState,
        wishlistCounter: prevState.wishlistCounter + 1,
        wishlist: [...prevState.wishlist, payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...prevState,
        wishlistCounter: prevState.wishlistCounter - 1,
        wishlist: prevState.wishlist.filter(({ _id }) => payload._id !== _id),
      };

    default:
      return prevState;
  }
};
export { wishlistReducer };
