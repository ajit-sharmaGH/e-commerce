// import { FilterComponent } from "../components/filter/filter";
import { ProductCard } from "../components/productCard/product";
import {  FilterContext } from "../context/filterContext";
import { ProductContext } from "../context/productContext";
import "./productListing.css";
import { useContext } from "react";
const ProductListingPage = () => {
    const { filter } = useContext(FilterContext);
    const { products } = useContext(ProductContext);
    const applyFilter = () => {
        const { category, userRating, searchQuery, sortby, price } = filter;

        const sortOrder = (order) => {
            if (order === "LOW_TO_HIGH")
                return (a, b) => a.originalPrice - b.originalPrice;
            else 
                return (a, b) => b.originalPrice - a.originalPrice;
            
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
    const displayAllProducts = applyFilter();
    return (
        <div>

            {displayAllProducts.length === 0 ? (
                <div className="flex-col-center fw-600 mt-5">
                   No matching product found
                </div>
            ) : (
                <ul className="product-card-container">
                    {displayAllProducts.map((product) => {
                        return (
                            <li key={product._id}>
                                <ProductCard product={product} />
                            </li>
                        );
                    })}

                </ul>
            )}
        </div>
    );
};
export { ProductListingPage };

