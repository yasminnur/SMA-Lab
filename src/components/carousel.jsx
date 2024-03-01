import React, { useEffect } from "react";
import Content from "./carouselContent";

import "./css/carousel.css";

const Carousel = () => {
  useEffect(() => {
    const initSlider = () => {
      const imageList = document.querySelector(".slider-wrapper .image-list");
      const slideButtons = document.querySelectorAll(".slide-button");

      slideButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });
    };

    initSlider(); 
  }, []);

  return (
    <>
      <div className="carousel">
        <div className="slider-wrapper">
          <div className="image-list">
            <Content className="image-item" />
            <Content className="image-item" />
            <Content className="image-item" />
            <Content className="image-item" />
          </div>
        </div>
        <div className="kanan">
        <div className="buttonSet">
          <button
            id="prev-slide"
            className="slide-button material-symbols-rounded"
          >
             <i class="bi bi-chevron-left"></i>
          </button>
          <button
            id="next-slide"
            className="slide-button material-symbols-rounded"
          >
            <i class="bi bi-chevron-right"></i>
          </button>
          </div>

          <div className="pageNum">
            <h2 className="display-6">01</h2>
            <p className="display-6">/</p>
            <h2 className="display-6">03</h2>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Carousel;
