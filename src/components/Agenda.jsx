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
      <div className="agenda" style={{padding: "30px 40px 50px 40px"}}>
        <Row>
          <Col className="kiri" xs={5}>
            <div className="atas ">
              <p>Agenda SMA Lab UM</p>
              <h3>Berbagai acara sekolah di SMA Lab UM</h3>
            </div>
            <div className="bawah d-flex gap-3">
              <p className="p-0 m-0">Agenda lainnya</p>
              <img src="./assets/agenda/more.svg" alt=""  className="bg-warning p-1 rounded-circle"/>
            </div>
          </Col>

          <Col className="kanan">
            <div className="slider-desc-wrapper">
              <div className="desc">
                {jsonData.map((item, index) => (
                  <div
                    className={`desc-content ${
                      index === activeIndex ? "active" : "visually-hidden"
                    }`}
                    key={index}
                  >
                    <div className="head">
                      <div className={`baris1 ${index === activeIndex ? "active" : ""}`}>
                        <h5 className="text-capitalize fw-bold">
                          {item.program}
                          <span className="ms-0 me-1">:</span>
                          <span className="">{item.title}</span>
                        </h5>
                      </div>
                      <div className="baris2 d-flex gap-2">
                        <p>{item.date}</p>
                        <div className="circle rounded-circle"></div>
                        <p>{item.time}</p>
                      </div>
                    </div>
                    <p>{item.place}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="slider-image-wrapper">
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
