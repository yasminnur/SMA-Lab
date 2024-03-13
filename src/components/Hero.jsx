import "./css/hero.css";
// import React from "react";
import CarouselCard from "./carousel";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <div className="hero position-relative">
        <div className="container position-absolute z-2 bottom-0 pb-4">
          {/* <h1 className="fw-bold text-light">
            Pendidikan Bermutu SMA Laboratorium UM Profesional
          </h1> */}

          <div className="carouselContainer p-0 m-0">
            <CarouselCard />
          </div>
        </div>

        <Carousel fade className="position-relative bg-warning" style={{height: "100vh"}}>
          <Carousel.Item className="bg-danger" style={{height: "100vh"}}>
            <div className="overlay position-absolute top-0 left-0 w-100" style={{height: "100vh"}}></div>
            <img
              src="./assets/hero/bg-1.svg"
              alt=""
              className="w-100"
              style={{
                objectFit: "cover",
                height: "100%"
              }}
            />
          </Carousel.Item>
          <Carousel.Item className=""  style={{height: "100vh"}}>
            <div className="overlay position-absolute top-0 left-0 w-100 "></div>
            <img
              src="./assets/hero/bg-2.svg"
              alt=""
              className="w-100"
              style={{
                objectFit: "cover",
                height: "100%"
              }}
            />
          </Carousel.Item>
          <Carousel.Item className="" style={{height: "100vh"}}>
            <div className="overlay position-absolute top-0 left-0 w-100 h-100"></div>
            <img
              src="./assets/hero/bg-3.svg"
              alt=""
              className="w-100 h-100"
              style={{
                objectFit: "cover",
                height: "100%"
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};


export default Hero;
