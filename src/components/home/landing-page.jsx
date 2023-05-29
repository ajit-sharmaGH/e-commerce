import "./landing-page.css";
import "../../index.css";
import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { useNavigate } from "react-router-dom";
import { services } from "./servicesObj";
import { CartContext } from "../../context/cartContext";
const Home = () => {
  const { categories } = useContext(ProductContext);
  const { addFilterCategory } = useContext(CartContext);
  const navigate = useNavigate();
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const categoryHandler = (category) => {
    addFilterCategory(category);
    navigate("/products");
  };

  const homeBgImg = "https://i.ibb.co/bQHd3Sd/intro-bg-1.jpg";
  return (
    <div>
      <section className="landing-page-container">
        <div>
          <img src={homeBgImg} className="landing-page-BgImg" alt="home-img" />
        </div>
        <div className="landing-page-banner">
          <div className="banner-container">
            <h3 className="mb-1 fw-600">We Sell LIFESTYLE</h3>
            <span>Flat 30% off</span>
            <div className="landing-page-button-container mt-1">
              <button onClick={handleScroll}>Shop Now</button>
              <button>Our Services</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h4 className="category-heading">Choose Category</h4>
        <ul className="category-container">
          {categories.map(
            ({ _id, description, categoryName, categoryImage }) => {
              return (
                <li
                  key={_id}
                  className="category-image-container"
                  onClick={() => categoryHandler(categoryName)}
                >
                  <img
                    src={categoryImage}
                    className="category-img"
                    alt="photo_hai"
                  />
                  <p className="flex-center"
>{description}</p>
                </li>
              );
            }
          )}
        </ul>
        <h4 className="services-heading">Our Services</h4>
        <ul className="services-container">
          {services.map(({ id, serviceName, imgLink }) => {
            return (
              <li key={id} className="services-image-container">
                <h3>{serviceName} </h3>

                <img src={imgLink} className="services-img" alt="photo_hai" />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export { Home };
