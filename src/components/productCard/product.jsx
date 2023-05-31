import { useNavigate } from "react-router";
import "./product.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (
        <>
            {product.inStock ? (
            <main key={product._id} className="product-card margin-half">
                <div className="card-image">
               
                    <span>
                        <AiOutlineHeart />
                    </span>
                    {product.trending && (<small>Trending</small>)}
                    <div className="know-more-about flex-center" 
                     onClick={() => navigate(`/products/${product._id}`)}
                    >Click here to Know More</div>
                    <img
                        src={product.productImage}
                        className="product-image"
                        onClick={() => navigate(`/products/${product._id}`)}
                        alt={product.title}
                    />
                    <label> {product.rating} ⭐ </label>
                </div>
                <h4> {product.title} </h4>
                <div className="card-prices margin-half">
                    <span>
                        <b>₹/:</b> {product.originalPrice}
                    </span>
                    <p>
                        <small>Discount :</small>₹/<strike> {product.discountPrice} </strike>
                    </p>
                </div>
                <p className="margin-half">
                    {product.ratingSign}
                    <small className="small-half-rating">1/2</small>
                </p>
                <button>
                    Add To Cart{" "}
                    <label>
                        {" "}
                        <AiOutlineShoppingCart />{" "}
                    </label>{" "}
                </button>
            </main>) :
                (
                <main key={product._id} className="product-card  margin-1"> 
               <div className="card-image">
                <div className="out-of-stock flex-center">Out Of Stock</div>
                    <span>
                        <AiOutlineHeart />
                    </span>
                   
                    <img
                        src={product.productImage}
                        className="product-image"
                        onClick={() => navigate(`/products/${product._id}`)}
                        alt={product.title}
                    />
                    <label> {product.rating} ⭐ </label>
                    
                </div>
                <h4> {product.title} </h4>
                <div className="card-prices margin-half">
                    <span>
                        <b>₹/:</b> {product.originalPrice}
                    </span>
                    <p>
                        <small>Discount :</small>₹/<strike> {product.discountPrice} </strike>
                    </p>
                </div>
                <p className="margin-half">
                    {product.ratingSign}
                    <small className="small-half-rating">1/2</small>
                </p>
                <button>
                    Add To Cart{" "}
                    <label>
                        {" "}
                        <AiOutlineShoppingCart />{" "}
                    </label>{" "}
                </button>
                </main>
                )}

        </>);
};
export { ProductCard };
