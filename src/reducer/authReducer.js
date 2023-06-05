const userAuthReducer = (prevState, { type, payload }) => {
    switch (type) {
      case "LOGIN_SUCCESS":
        return {
          ...prevState,
          isLoggedIn: true,
          user: payload.foundUser,
          token: payload.encodedToken,
        };
      case "SIGNUP_SUCCESS":
        return {
          ...prevState,
          isLoggedIn: false,
        };
      case "LOGOUT_SUCCESS":
        return { ...prevState, isLoggedIn: false, user: {}, token: "" };
     
      default:
        return prevState;
    }
  };
  export {userAuthReducer}