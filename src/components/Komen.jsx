import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./css/komen.css";
import data from "../data/komen.json";
import { Link } from "react-router-dom";

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
      <div className="komen w-100" id="testi">
        <div className="nav d-flex justify-content-between align-items-center mb-4 mb-md-5 w-100">
          <h3 className="p-0 m-0 fw-semibold">
            Cerita mereka tentang SMA Lab UM
          </h3>
          <div className="nav-slider gap-3 d-none d-md-flex">
            <div
              className="arrow p-2 d-flex rounded-circle"
              onClick={() =>
                handleNavClick(
                  (activeIndex - 1 + jsonData.length) % jsonData.length
                )
              }
            >
              <i class="bi bi-chevron-left m-auto"></i>
            </div>
            <div
              className="arrow p-2 d-flex rounded-circle"
              onClick={() =>
                handleNavClick((activeIndex + 1) % jsonData.length)
              }
            >
              <i class="bi bi-chevron-right m-auto"></i>
            </div>
          </div>
        </div>

        <div
          className="slider-comment-wrapper h-100"
          style={{ height: "fit-content" }}
        >
          {jsonData.map((item, index) => (
            <div
              className={`comment ${
                index === activeIndex ? "" : "visually-hidden"
              }`}
              key={index}
            >
              <div className="komenContainer">
                <p className="p-0 m-0 mb-2 mb-md-3 fw-semibold">
                  {item.comment.substring(0, 248)}...
                </p>
                <Link to={`/testiPage/${index}`}>Lihat selengkapnya</Link>

                {/* <Link className="text-dark" to={{ pathname: "/testiPage", state: { testi: item } }}>
                  Lihat selengkapnya
                </Link> */}

                {/* <a href="/testiPage" className="text-dark p-0 m-0">
                  Lihat selengkapnya
                </a> */}
                <div className="sender d-flex align-items-center gap-3 mt-4 mt-md-5">
                  <img
                    className="rounded-circle"
                    src={item.sender.photo}
                    alt=""
                  />
                  <div className="nameContainer d-flex flex-column align-items-center">
                    <p className="name w-100 m-0 p-0 fw-semibold">
                      {item.sender.name}
                    </p>
                    <p className="wali m-0">
                      wali dari{" "}
                      <span className="fw-semibold">{item.sender.wali}</span> /{" "}
                      {item.sender.kelas}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="nav-slider-phone mt-5 d-flex d-md-none">
          <div
            className="arrow p-2 d-flex rounded-circle"
            onClick={() =>
              handleNavClick(
                (activeIndex - 1 + jsonData.length) % jsonData.length
              )
            }
          >
            <i class="bi bi-chevron-left m-auto"></i>
          </div>
          <div
            className=" arrow p-2 d-flex rounded-circle"
            onClick={() => handleNavClick((activeIndex + 1) % jsonData.length)}
          >
            <i class="bi bi-chevron-right m-auto"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Komen;
