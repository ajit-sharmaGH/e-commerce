
import { useContext } from "react";

import { CartContext } from "../../context/cartContext";
const FilterComponent = () => {

    const {
        addFilterCategory,
        addFilterRating,
        filter,
        addFilterSortPrice,
      } = useContext(CartContext);
    return ( 
        <main>
            <section className="filter-category-container">
            <label><input type="checkbox"  value="menWear"
            name="category"
            onChange={(e) => addFilterCategory(e.target.value)}
            checked={filter.category.includes("menWear")}/>Men</label>
            <label><input type="checkbox"  value="womenWear"
            name="category"
            onChange={(e) => addFilterCategory(e.target.value)}
            checked={filter.category.includes("womenWear")}/>Women</label>
            <label><input type="checkbox"  value="kidsWear"
            name="category"
            onChange={(e) => addFilterCategory(e.target.value)}
            checked={filter.category.includes("kidsWear")}/>Kids</label>
            <label><input type="checkbox"  value="gadgets"
            name="category"
            onChange={(e) => addFilterCategory(e.target.value)}
            checked={filter.category.includes("gadgets")}/>Gadgets</label>
      </section>
      <section>
      <label>
          <input
            type="radio"
            value="4"
            name="rating"
            onChange={(e) => addFilterRating(e)}
            checked={filter?.userRating === 4}
          />
          4 Stars & above
        </label>
        <label>
          <input
            type="radio"
            value="3"
            name="rating"
            onChange={(e) => addFilterRating(e)}
            checked={filter?.userRating === 3}
          />
          3 Stars & above
        </label>
        <label>
          <input
            type="radio"
            value="2"
            name="rating"
            onChange={(e) => addFilterRating(e)}
            checked={filter?.userRating === 2}
          />
          2 Stars & above
        </label>
        <label>
          <input
            type="radio"
            value="1"
            name="rating"
            onChange={(e) => addFilterRating(e)}
            checked={filter?.userRating === 1}
          />
          1 Stars & above
        </label>
      </section>
      <section>
      <label>
          <input
            type="radio"
            name="sortby"
            value="LOW_TO_HIGH"
            onChange={(e) => addFilterSortPrice(e)}
            checked={filter.sortby === "LOW_TO_HIGH"}
          />{" "}
          Price-Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sortby"
            value="HIGH_TO_LOW"
            onChange={(e) => addFilterSortPrice(e)}
            checked={filter.sortby === "HIGH_TO_LOW"}
          />{" "}
          Price-High to Low
        </label>
      </section>
        </main>
    )
}
export { FilterComponent };