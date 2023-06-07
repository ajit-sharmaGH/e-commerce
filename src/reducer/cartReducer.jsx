const cartReducer = (prevState, {type, payload})=>{
    switch (type) {
        case "ADD_TO_CART":
            return {
                ...prevState,
                cart: [...prevState.cart, payload],
                cartCounter: prevState.cartCounter + 1,
            };

            case "REMOVE_FROM_CART":
                return {
                    ...prevState,
                    cart: prevState.cart.filter(
                        ({_id}) => payload._id !== _id
                    ),
                    cartCounter: prevState.cartCounter - 1,
                };
    
            
            default:
                return prevState;
    }
}
export {cartReducer}