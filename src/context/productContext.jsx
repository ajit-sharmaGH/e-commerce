import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/reducers";
const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [productData, dispatch] = useReducer(productReducer, {
    categories: [],
    products: [],
  });

  const getDataProduct = async () => {
    try {
      const categoryData = await (await fetch("/api/categories")).json();
      dispatch({ type: "SET_CATEGORY", payload: categoryData.categories });

      const productData = await (await fetch("/api/products")).json();
      dispatch({ type: "SET_PRODUCT", payload: productData.products });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataProduct();
  }, []);

  const productDetails = (productId) => {
    return productData.find(({ _id }) => _id === productId);
  };

  return (
    <ProductContext.Provider
      value={{
        products: productData.products,
        categories: productData.categories,
        productDetails,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, ProductContext };
