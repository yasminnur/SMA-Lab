import { Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import data from "../data/ekstra.json";
import "./css/ekstra.css";

const ekstra = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <div
        className="ekstra w-100 h-100 bg-light"
        style={{ width: "100vw", height: "100vh" }}
      >
        <h5
          className="w-100 fw-bold m-0 mb-3 mb-md-4"
        >
          Ekstrakurikuler
        </h5>
        <div className="card-wrapper w-100 mb-3 mb-md-4">
          <div className="card-ekstra ekstra1 d-flex gap-3 gap-md-4">
            {jsonData
              .slice(0, Math.ceil(jsonData.length / 2))
              .map((item, index) => (
                <>
                  <div className="card-container position-relative">
                    <div
                      className="overlay position-absolute w-100 h-100 top-0 left-0"
                    >
                      <h1
                        className="text-light bottom-0 position-absolute fw-semibold"
                      >
                        {item.title}
                      </h1>
                    </div>
                    <img
                      key={index}
                      className="rounded-3"
                      src={item.image}
                      alt=""
                    />
                  </div>
                </>
              ))}
            {jsonData
              .slice(0, Math.ceil(jsonData.length / 2))
              .map((item, index) => (
                 <>
                  <div className="card-container position-relative">
                    <div
                      className="overlay position-absolute w-100 h-100 top-0 left-0"
                    >
                      <h1
                        className="text-light bottom-0 position-absolute fw-semibold"
                      >
                        {item.title}
                      </h1>
                    </div>
                    <img
                      key={index}
                      className="rounded-3"
                      src={item.image}
                      alt=""
                    />
                  </div>
                </>
              ))}
          </div>
        </div>
        <div className="card-wrapper w-100">
          <div className="card-ekstra ekstra2 d-flex gap-3 gap-md-4">
            {jsonData
              .slice(Math.ceil(jsonData.length / 2))
              .map((item, index) => (
                <>
                <div className="card-container position-relative">
                  <div
                    className="overlay position-absolute w-100 h-100 top-0 left-0"
                  >
                    <h1
                      className="text-light bottom-0 position-absolute fw-semibold"
                    >
                      {item.title}
                    </h1>
                  </div>
                  <img
                    key={index}
                    className="rounded-3"
                    src={item.image}
                    alt=""
                  />
                </div>
              </>
              ))}
            {jsonData
              .slice(Math.ceil(jsonData.length / 2))
              .map((item, index) => (
                <>
                <div className="card-container position-relative">
                  <div
                    className="overlay position-absolute w-100 h-100 top-0 left-0"
                  >
                    <h1
                      className="text-light bottom-0 position-absolute fw-semibold"
                    >
                      {item.title}
                    </h1>
                  </div>
                  <img
                    key={index}
                    className="rounded-3"
                    src={item.image}
                    alt=""
                  />
                </div>
              </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ekstra;
