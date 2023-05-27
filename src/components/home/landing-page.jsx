import "./landing-page.css";
import "../../index.css";
const LandingPage = () => {
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
              <button>Shop Now</button>
              <button>Our Services</button>
            </div>
          </div>
        </div>
        
      </section>

      
    </div>
  );
};
export { LandingPage };
