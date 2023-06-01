
import { useContext } from "react";
import "./filter.css"
import { CartContext } from "../../context/cartContext";
const FilterComponent = () => {

    const {
        addFilterCategory,
        addFilterRating,
        filter,
        range,
        clearFilter,
        addFilterSortPrice,
        addFilterRange,

    } = useContext(CartContext);
    return (
        <fieldset className="filter-component">
            <legend>Filter</legend>

            <button onClick={(e) => clearFilter(e)}>Clear Filter</button>
            <h3 className="margin-half">Price Range</h3>
            <ul className="mt-1 ml-1">
                
                <li>
                <p> {range} </p>
                    <input type="range" name="range" value={range} min={100} step={100}
                    onChange={(e) => addFilterRange(e)}
                    max={50000} />
                   
                </li>
            </ul>
            <h3 className="mt-1">Filter Category</h3>
            <ul className="filter-category-container margin-1">
           

                <li><input type="checkbox" value="menWear"
                    name="category"
                    onChange={(e) => addFilterCategory(e.target.value)}
                    checked={filter.category.includes("menWear")} />Men</li>
                <li><input type="checkbox" value="womenWear"
                    name="category"
                    onChange={(e) => addFilterCategory(e.target.value)}
                    checked={filter.category.includes("womenWear")} />Women</li>
                <li><input type="checkbox" value="kidsWear"
                    name="category"
                    onChange={(e) => addFilterCategory(e.target.value)}
                    checked={filter.category.includes("kidsWear")} />Kids</li>
                <li><input type="checkbox" value="gadgets"
                    name="category"
                    onChange={(e) => addFilterCategory(e.target.value)}
                    checked={filter.category.includes("gadgets")} />Gadgets</li>
            </ul>
            <h3>Filter Rating</h3>

            <ul className="margin-1 filter-rating-container">
                <li>
                    <input
                        type="radio"
                        value="4"
                        name="rating"
                        onChange={(e) => addFilterRating(e)}
                        checked={filter?.userRating === 4}
                    />
                    4 Stars & above
                </li>
                <li>
                    <input
                        type="radio"
                        value="3"
                        name="rating"
                        onChange={(e) => addFilterRating(e)}
                        checked={filter?.userRating === 3}
                    />
                    3 Stars & above
                </li>
                <li>
                    <input
                        type="radio"
                        value="2"
                        name="rating"
                        onChange={(e) => addFilterRating(e)}
                        checked={filter?.userRating === 2}
                    />
                    2 Stars & above
                </li>
                <li>
                    <input
                        type="radio"
                        value="1"
                        name="rating"
                        onChange={(e) => addFilterRating(e)}
                        checked={filter?.userRating === 1}
                    />
                    1 Stars & above
                </li>
            </ul>
            <h3>Filter Price</h3>

            <ul className="margin-1 filter-price-sort-container">
                <li>
                    <input
                        type="radio"
                        name="sortby"
                        value="LOW_TO_HIGH"
                        onChange={(e) => addFilterSortPrice(e)}
                        checked={filter.sortby === "LOW_TO_HIGH"}
                    />{" "}
                    Price-Low to High
                </li>
                <li>
                    <input
                        type="radio"
                        name="sortby"
                        value="HIGH_TO_LOW"
                        onChange={(e) => addFilterSortPrice(e)}
                        checked={filter.sortby === "HIGH_TO_LOW"}
                    />{" "}
                    Price-High to Low
                </li>
            </ul>
        </fieldset>
    )
}
export { FilterComponent };