import { createContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [filterData, dispatch] = useReducer(filterReducer, {
    filter: {
      category: [],
      userRating: null,
      searchQuery: "",
      sortby: null,
      price: 50000,
    },
  });

  const addFilterCategory = (category) => {
    dispatch({
      type: "FILTER_CATEGORY",
      payload: category,
    });
  };
  const addFilterRating = (e) => {
    if (e.target.checked) {
      dispatch({
        type: "FILTER_RATING",
        payload: Number(e.target.value),
      });
    }
  };
  const addFilterQuery = (e) => {
    dispatch({
      type: "FILTER_SEARCH_QUERY",
      payload: e.target.value,
    });
  };
  const addFilterSortPrice = (e) => {
    if (e.target.checked) {
      dispatch({
        type: "FILTER_SORT_PRICE",
        payload: e.target.value,
      });
    }
  };
  const addFilterRange = (e) => {
    dispatch({
      type: "FILTER_PRICE",
      payload: Number(e.target.value),
    });
  };
  const clearFilter = (e) => {
    dispatch({
      type: "CLEAR_FILTER",
      payload: {},
    });
    e.preventDefault();
  };
  return (
    <FilterContext.Provider
      value={{
        addFilterCategory,
        addFilterRating,
        addFilterQuery,
        addFilterSortPrice,
        addFilterRange,
        clearFilter,

        range: filterData.filter.price,
        filter: filterData.filter,
      }}
    >
      {" "}
      {children}{" "}
    </FilterContext.Provider>
  );
};
export { FilterContext, FilterContextProvider };
