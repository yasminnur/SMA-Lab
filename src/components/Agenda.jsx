import "./css/agenda.css";
import { Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import data from "../data/agenda.json";

const Agenda = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
    
    // =========================================
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
      <div className="agenda">
        <Row>
          <Col className="kiri" xs={5}>
            <div className="atas ">
              <p>Agenda SMA Lab UM</p>
              <h3>Berbagai acara sekolah di SMA Lab UM</h3>
            </div>
            <div className="bawah">
              <p>Agenda lainnya</p>
            </div>
          </Col>

          {jsonData.map((item, index) => (
            <Col className="kanan" key={index}>
              <div className="desc">
                <div className="head">
                  <div className="baris1">
                    <h5 className="text-capitalize fw-bold">
                      {item.program}
                      <span className="ms-0 me-1">:</span>
                      <span className="text-uppercase">{item.title}</span>
                    </h5>
                  </div>
                  <div className="baris2 d-flex gap-2">
                    <p>{item.date} </p>
                   <div className="circle rounded-circle"></div>
                    <p>{item.time}</p>
                  </div>
                </div>
                <p>
                  <img src="" alt="" />
                  {item.place}
                </p>
                  </div>
                  <div className="slider-wrapper">
                      <div className="slider">
                          <img id="img-1" src="./assets/agenda/event1.svg" alt="" />
                          <img id="img-2" src="./assets/agenda/event1.svg" alt="" />
                          <img id="img-3" src="./assets/agenda/event1.svg" alt="" />
                          <img id="img-4" src="./assets/agenda/event1.svg" alt="" />
                      </div>
                  </div>
                  <div className="slider-nav">
                      <a href="#img-1"></a>
                      <a href="#img-2"></a>
                      <a href="#img-3"></a>
                      <a href="#img-4"></a>
                  </div>
                  
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Agenda;
