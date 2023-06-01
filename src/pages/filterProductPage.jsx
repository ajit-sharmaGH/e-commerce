import { FilterComponent } from "../components/filter/filter"
import { ProductListingPage } from "./productListing"
import "./productListing.css";
const FilterProductListing = () => {
    return (
        <div className="flex">
            <div className="filter-component-second">< FilterComponent /></div>
            <div  className="productListing-component">< ProductListingPage /></div>
        </div>

    )
}
export {FilterProductListing}