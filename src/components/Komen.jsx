import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./css/komen.css";
import data from "../data/komen.json";

const Komen = () => {
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
      <div className="komen w-100" style={{ padding: "30px 40px 50px 40px" }}>
        <div className="nav d-flex justify-content-between mb-4">
          <p className="p-0 m-0">Cerita mereka tentang SMA Lab UM</p>
          <div className="d-flex gap-3">
            <div
              className="p-2 d-flex rounded-circle"
              onClick={() =>
                handleNavClick(
                  (activeIndex - 1 + jsonData.length) % jsonData.length
                )
              }
              style={{ background: "#D8D8D8" }}
            >
              <img
                style={{ width: "15px", height: "15px" }}
                src="./assets/komen/white-arrow.svg"
                alt=""
              />
            </div>
            <div
              className="p-2 d-flex rounded-circle"
              onClick={() =>
                handleNavClick((activeIndex + 1) % jsonData.length)
              }
              style={{ background: "#FEB700" }}
            >
              <img
                style={{ width: "15px", height: "15px" }}
                src="./assets/komen/black-arrow.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className="slider-desc-wrapper h-100"
          style={{ height: "fit-content" }}
        >
          <div className="desc">
            {jsonData.map((item, index) => (
              <div
                className={`desc-content ${
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
                    <div className="komenContainer">
                      <h3
                        className="p-0 m-0 mb-3 fw-semibold"
                        style={{ maxHeight: "150px", minHeight: "150px" }}
                      >
                        {item.comment}
                      </h3>
                      <a href="" className="text-dark p-0 m-0">
                        Lihat selengkapnya
                      </a>
                      <div className="sender d-flex align-items-center gap-3 mt-5">
                        <img
                          className="rounded-circle"
                          style={{ width: "50px", height: "50px" }}
                          src={item.sender.photo}
                          alt=""
                        />
                        <div className="name">
                          <p className="w-100 m-0 p-0 fw-semibold">
                            {item.sender.name}
                          </p>
                          <p className="w-100 m-0 p-0">{item.sender.profesi}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Komen;
