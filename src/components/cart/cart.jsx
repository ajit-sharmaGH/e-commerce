import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./cart.css"
import { CartProductCard } from "../productCard/cartProductCard";
const CartComponent = () => {
    const { cart } = useContext(CartContext);

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

                                    <div key={product._id}> <CartProductCard product={product} /></div>

                                ))}
                            </div>
                            <div>
                                <h3>{""}  </h3>
                                <button>{""} </button>
                            </div>
                        </div>
                    </>)}
            </div>
        </>
    );
};
export { CartComponent };