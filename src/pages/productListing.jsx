import { FilterComponent } from "../components/filter/filter";
import { ProductCard } from "../components/productCard/product";
import { CartContext } from "../context/cartContext";
import { ProductContext } from "../context/productContext";
import "./productListing.css";
import { useContext } from "react";
const ProductListingPage = () => {
  const { filter } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const applyFilter = () => {
    const { category, userRating, searchQuery,sortby,price } = filter;

    const sortOrder = (order) => {
        if (order === "LOW_TO_HIGH")
          return (a, b) => a.originalPrice - b.originalPrice;
        else return (a, b) => b.originalPrice - a.originalPrice;
      };

    let filteredCategory = products;
    if (category.length !== 0) {
      filteredCategory = products.filter(({ categoryName }) =>
        category.includes(categoryName)
      );
    }
    let filteredRating = filteredCategory;
    if (userRating) {
      filteredRating = filteredCategory.filter(
        ({ rating }) => rating >= userRating
      );
    }
    let filteredSearch = filteredRating.filter(({ title }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    let filteredPrice = filteredSearch.filter(
        ({ originalPrice }) => originalPrice <= price
      );
  
      let filteredSorted = filteredPrice;
      if (sortby) {
        filteredSorted = filteredPrice.sort(sortOrder(sortby));
      }
         return filteredSorted;
  };
  const displayProduct = applyFilter();
  return (
    <div>
      <FilterComponent />
      {products.length === 0 ? (
        <div>
          We are fixing our Database till then look at FlipKart or Amazon
        </div>
      ) : (
        <div>
          {displayProduct.length === 0 ? (
            <div>
              {" "}
              We are fixing our Database till then look at FlipKart or Amazon
            </div>
          ) : (
            <ul className="product-card-container">
              {displayProduct.map((product) => {
                return (
                  <li key={product._id}>
                    <ProductCard product={product} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
export { ProductListingPage };
