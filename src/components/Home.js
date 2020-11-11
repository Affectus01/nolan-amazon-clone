import React from "react";
import "../css/Home.css";
import Product from "./Product";
import musicSlide from "../images/musicSlide.jpg";
import supportBusiness from "../images/supportBusiness.jpg";
import primeDay from "../images/primeDay.jpg";

function Home() {
  return (
    <div className="home d-flex justify-content-center mx-auto flex-column">
      <div className="home__container">
        <div
          id="carouselExampleIndicators"
          className="home__image carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="5000">
              <img
                src={musicSlide}
                className="d-block w-100"
                alt="Music Promo Slide"
              />
            </div>
            <div className="carousel-item" data-interval="5000">
              <img
                src={supportBusiness}
                className="d-block w-100"
                alt="Support Business Promo Slide"
              />
            </div>
            <div className="carousel-item" data-interval="5000">
              <img
                src={primeDay}
                className="d-block w-100"
                alt="Amazon Prime Day Promo Slide"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home__row row d-flex mx-2 mb-3">
        <div className="col-12 col-md-6 mb-1 d-flex">
          <Product id={1} />
        </div>
        <div className="col-12 col-md-6 mb-1 d-flex">
          <Product id={2} />
        </div>
      </div>

      <div className="home__row row d-flex mx-2 mb-3">
        <div className="col-12 col-md-4 mb-1 d-flex">
          <Product id={3} />
        </div>
        <div className="col-12 col-md-4 mb-1 d-flex">
          <Product id={4} />
        </div>
        <div className="col-12 col-md-4 mb-1 d-flex">
          <Product id={5} />
        </div>
      </div>

      <div className="home__row row d-flex mx-2 mb-3">
        <div className="col-12 mb-1 d-flex">
          <Product id={6} />
        </div>
      </div>
    </div>
  );
}

export default Home;
