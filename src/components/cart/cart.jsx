import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./cart.css";
import { CartProductCard } from "../productCard/cartProductCard";
const CartComponent = () => {
  const { cart } = useContext(CartContext);
  const mrpCalculatedCost = () => {
    return cart.reduce((sum, currentPrice) => {
      let totalPrice = currentPrice.quantity * currentPrice.originalPrice;
      return (sum = sum + totalPrice);
    }, 0);
  };

  const discountCalculatedCost = () => {
    return cart.reduce((sum, currentValue) => {
      return (sum = sum + currentValue.discountPrice * currentValue.quantity);
    }, 0);
  };
  return (
    <>
      <div className=" mt-5">
        <h2 className="ml-1">My Cart</h2>
        {cart.length === 0 ? (
          <p className="mt-5 fw-600 flex-center">
            You don't have any product inside your Cart
          </p>
        ) : (
          <>
            <h3 className="flex-center fw-600">Cart Items : {cart.length} </h3>
            <div className="flex-row-justify-center">
              <div>
                {cart.map((product) => (
                  <div key={product._id}>
                    {" "}
                    <CartProductCard product={product} />
                  </div>
                ))}
              </div>
              <div className="price-card-container flex-col">
                <h1 className="price-card-heading">Price Card </h1>
                <section className="price-card_product-info">
                  {" "}
                  {cart.map(({ title, quantity, originalPrice }) => (
                    <p className="flex-row">
                      <span className="mr-auto">
                        {" "}
                        {title}{" "} ({quantity}x)
                      </span>
                      <span> {"₹/:"} {" "} {originalPrice * quantity} </span>
                    </p>
                  ))}{" "}
                </section>
                <p className="flex-row">
                  <span className="mr-auto"> MRP : </span>
                  <span className="fw-600"> {"₹/:"}{" "} {`${mrpCalculatedCost()}`} </span>
                </p>

                <p className="flex-row">
                  <span className="mr-auto">Discounted Price : </span>
                  <span> - {"₹/:"} {" "} {`${discountCalculatedCost()}`}</span>{" "}
                </p>
                <p className="flex-row price-card-total-price">
                  <span className="mr-auto"> Total Price :</span>
                 <span>{"₹/:"}{" "} {`${mrpCalculatedCost()}` - `${discountCalculatedCost()}`}</span> 
                </p>
                <button>Place Order</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export { CartComponent };
