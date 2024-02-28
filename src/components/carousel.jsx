// import React, { useState, useEffect } from 'react';
import React, { useEffect } from "react";
import Content from "./carouselContent"

import "./css/carousel.css";

const Carousel = () => {
    useEffect(() => {
        const initSlider = () => {
          const imageList = document.querySelector(".slider-wrapper .image-list");
          const slideButtons = document.querySelectorAll(
            ".slider-wrapper .slide-button"
          );
          const sliderScrollbar = document.querySelector(
            ".container .slider-scrollbar"
          );
          const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
          const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
      
          slideButtons.forEach((button) => {
            button.addEventListener("click", () => {
              const direction = button.id === "prev-slide" ? -1 : 1;
              const scrollAmount = imageList.clientWidth * direction;
              imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
          });
      
          const handleSliderButtons = () => {
            slideButtons[0].style.display =
              imageList.scrollLeft <= 0 ? "none" : "block";
            slideButtons[1].style.display =
              imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
          };
      
          // update scrollbar thumb position based on image scroll
          const updateScrollThumbPosition = () => {
            const scrollPosition = imageList.scrollLeft;
            const thumbPosition =
              (scrollPosition / maxScrollLeft) *
              (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
            scrollbarThumb.style.left = `${thumbPosition}px`;
          };
      
          imageList.addEventListener("scroll", () => {
            handleSliderButtons();
            updateScrollThumbPosition();
          });
      
          handleSliderButtons(); // Panggil fungsi handleSliderButtons() agar tombol slider ditampilkan atau disembunyikan sesuai posisi scroll.
        };
      
        initSlider(); // Panggil fungsi initSlider() saat komponen dimuat.
      }, []); // Gunakan array kosong sebagai dependencies agar useEffect hanya dijalankan sekali setelah komponen dimuat.
      
  return (
    <>
        <div className="container">
          <div className="slider-wrapper">
            <div className="image-list">
              <Content className="image-item"/>
              <Content className="image-item"/>
              <Content className="image-item"/>
              <Content className="image-item"/>
          </div>
          <div className="buttonSet">
            <button
              id="prev-slide"
              className="slide-button material-symbols-rounded"
            >
              L
            </button>
            <button
              id="next-slide"
              className="slide-button material-symbols-rounded"
            >
              R
          </button>
          </div>
          </div>

          <div className="slider-scrollbar">
            <div className="scrollbar-track">
              <div className="scrollbar-thumb"></div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Carousel;
