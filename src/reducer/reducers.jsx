const productReducer = (prevState, { type, payload }) => {
    switch (type) {
        case "SET_CATEGORY":
            return { ...prevState, categories: [...payload] };
        case "SET_PRODUCT":
            return { ...prevState, products: payload };
        default:
            return { ...prevState };
    }
};

const cartReducer = (prevState, { type, payload }) => {
    switch (type) {

        case "FILTER_CATEGORY":
            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    category: prevState.filter.category.find((name) => name === payload)
                        ? prevState.filter.category.filter((name) => name !== payload)
                        : [...prevState.filter.category, payload],
                }
            }
        case "FILTER_RATING":
            return {
                ...prevState,
                filter: { ...prevState.filter, userRating: payload },
            };

        case "FILTER_SEARCH_QUERY":
            return {
                ...prevState,
                filter: { ...prevState.filter, searchQuery: payload },
            };
        case "FILTER_SORT_PRICE":
            return { ...prevState, filter: { ...prevState.filter, sortby: payload } };
        case "FILTER_PRICE":
            return { ...prevState, filter: { ...prevState.filter, price: payload } };
            case "CLEAR_FILTER":
                return {
                  ...prevState,
                  filter: {
                    ...prevState.filter,
                    category: [],
                    userRating: null,
                    sortby: null,
                    price: 50000,
                  },
                };

        default:
            return prevState;
    }
}




export { productReducer, cartReducer }

