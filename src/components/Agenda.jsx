import "./css/agenda.css";
import { Row, Col, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import data from "../data/agenda.json";
// import Content from "./carouselContent";
import { Link } from "react-router-dom";

const Agenda = () => {
  const [jsonData, setJsonData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setJsonData(data);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % jsonData.length;
      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [activeIndex, jsonData]);

  // const handleNavClick = (index) => {
  //   setActiveIndex(index);
  // };

  useEffect(() => {
    const initSlider = () => {
      const imageList = document.querySelector(
        ".slider-wrapper-image .image-list"
      );
      const slideButtons = document.querySelectorAll(".slide-button");

      slideButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const nextIndex =
            (activeIndex + direction + jsonData.length) % jsonData.length;
          setActiveIndex(nextIndex);
        });
      });
    };

    initSlider();
  }, [activeIndex]); // Panggil kembali initSlider ketika activeIndex berubah

  return (
    <>
      <div className="agenda">
        <Row className="m-0 p-0">
          <Col className="kiri m-0" xs={12} md={5}>
            <div className="atas">
              <h3 className="mb-3 fw-semibold">Agenda SMA Lab UM</h3>
              <h1 className="mb-4">Berbagai acara sekolah di SMA Lab UM</h1>
            </div>
            <div className="bawah d-flex gap-3 align-items-center">
              <p className="p-0 m-0">Agenda lainnya</p>
              <img
                src="./assets/agenda/more.svg"
                alt=""
                className="bg-warning p-1 rounded-circle"
              />
            </div>
          </Col>

          <Col className="kanan m-0 p-0">
            <div className="slider-desc-wrapper">
              <div className="desc">
                {jsonData.map((item, index) => (
                  <div
                    className={`desc-content mb-4 ${
                      index === activeIndex ? "active" : "visually-hidden"
                    }`}
                    key={index}
                  >
                    <div className="head">
                      <div
                        className={`baris1 ${
                          index === activeIndex ? "active" : ""
                        }`}
                      >
                        <h3 className="text-capitalize fw-bold mb-2 mb-md-3">
                          {item.program}: {""}
                          {item.title}
                        </h3>
                      </div>
                      <div className="baris2 d-flex gap-2 mb-md-2">
                        <p className="m-0">{item.date}</p>
                        <div className="circle rounded-circle"></div>
                        <p className="m-0">{item.time}</p>
                      </div>
                    </div>
                    <div className="place d-flex justify-content-end gap-2 align-items-center">
                      <img src="./assets/agenda/location.svg" alt="" />
                      <p className="place p-0 m-0">{item.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="slider-wrapper-image">
              <div className="image-list gap-4 position-relative">
                {jsonData.map((item, index) => (
                    <div key={index}>
                      <div className="overlay w-100 h-100 d-flex align-items-center">
                      
                        <Button className="d-flex align-items-center rounded-2 text-nowrap mx-auto gap-2 gap-lg-3 fw-semibold border-0">
                        
                          <Link
                            to={`/agendaDetailPage/${index}`}
                            className="agenda-link"
                            onClick={() => console.log("Index yang diklik:", index)}
                          >
                            <img
                              className="m-0 p-0"
                              src="./assets/agenda/eye.svg"
                              alt=""
                            />
                            Lihat detail
                          </Link>
                        </Button>
                      </div>

                      <img
                        id={`img-${index + 1}`}
                        className={`image-item rounded-4 bg-danger ${index === activeIndex ? "active" : "visually-hidden"
                          }`}
                        src={item.image}
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                  
                )
                )}
              </div>

              <div className="indicator-nav">
                {jsonData.map((_, index) => (
                  <button
                    key={index}
                    className={
                      index === activeIndex
                        ? "active"
                        : "no-active rounded-circle"
                    }
                    onClick={() => setActiveIndex(index)}
                  ></button>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Agenda;
