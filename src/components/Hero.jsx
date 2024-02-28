import "./css/hero.css";
import React from "react";
import Carousel from "./carousel"

const Hero = () => {
  return (
    <>
      <section
        className="hero w-100vw h-100vh"
        style={{
          backgroundImage:
            "linear-gradient(to top right, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <h1 className="fw-bold text-light">
            Pendidikan Bermutu SMA Laboratorium UM Profesional
          </h1>

          <div className="carouselContainer">
          <Carousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
