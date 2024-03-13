import "./css/agenda.css";
import { Row, Col, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import data from "../data/agenda.json";

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

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="agenda">
        <Row className="m-0 p-0">
          <Col className="kiri m-0" xs={12} md={4} >
            <div className="atas ">
              <p>Agenda SMA Lab UM</p>
              <h3 className="">Berbagai acara sekolah di SMA Lab UM</h3>
            </div>
            <div className="bawah d-flex gap-3">
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
                    className={`desc-content mb-3 ${
                      index === activeIndex ? "active" : "visually-hidden"
                    }`}
                    key={index}
                  >
                    <div className="head">
                    <div className={`baris1 ${index === activeIndex ? "active" : ""}`}>
                        <h5 className="text-capitalize fw-bold m-0">
                          {item.program}: {""}
                          {item.title}
                        </h5>
                      </div>
                      {/* <div
                        className={`baris1 ${
                          index === activeIndex ? "active" : ""
                        }`}
                      >
                        <div className="tittle">
                          <h5
                            className={`program bg-warning text-capitalize fw-bold animate-${index} ${
                              index < activeIndex
                                ? "slide-up"
                                : index > activeIndex
                                ? "slide-down"
                                : ""
                            }`}
                          >
                            {item.program} :
                          </h5>
                          <h5 className="bg-primary">{item.title}</h5>
                        </div>
                      </div> */}
                      <div className="baris2 d-flex gap-2">
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
            <div className="slider-image-wrapper p-0 m-0">
              
              <div className="slider">
                <div className="overlay w-100 h-100 d-flex align-items-center">
                  <Button className="d-flex rounded-2 text-nowrap mx-auto gap-3 fw-semibold border-0" style={{ padding: '12px 15px',height: 'fit-content', background: '#ECE9EA', color: '#2E2E2E', lineHeight: '140%'}}>
                    <img className="m-0 p-0" src="./assets/agenda/eye.svg" alt="" />
                   Lihat detail
                 </Button>
              </div>
                {jsonData.map((item, index) => (
                  <img
                    key={index}
                    id={`img-${index + 1}`}
                    className={
                      index === activeIndex ? "active" : "visually-hidden"
                    }
                    src={item.image}
                    alt={`Image ${index + 1}`}
                  />
                ))}
              </div>
              <div className="slider-nav">
                {jsonData.map((_, index) => (
                  <a
                        key={index}
                        className={index === activeIndex ? "nav-active" : "nav-non"}
                    href={`#img-${index + 1}`}
                    onClick={() => handleNavClick(index)}
                  ></a>
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
