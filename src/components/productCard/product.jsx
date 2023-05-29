import {  useNavigate} from "react-router";
import "./product.css";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <main key={product._id} className="product-card-container">
      <h4>{product.title} </h4>
      <img
        src={product.productImage}
        className="product-image"
        onClick={() => navigate(`/products/${product._id}`)}
        alt={product.title}
      />
    </main>
  );
};
export { ProductCard };
