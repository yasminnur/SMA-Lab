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
        className="ekstra"
        style={{ background: "white", width: "100vw", height: "100vh" }}
      >
        <h5
          className="w-100 fw-bold"
          style={{
            lineHeight: "120%",
            letterSpacing: "-0.24px",
            fontSize: "30px",
            padding: "30px 40px 50px 40px",
          }}
        >
          Ekstrakurikuler
        </h5>
        <div className="card-wrapper w-100 mb-4">
          <div className="card-ekstra ekstra1 d-flex gap-4">
            {jsonData
              .slice(0, Math.ceil(jsonData.length / 2))
              .map((item, index) => (
                <>
                  <div className="position-relative">
                    <div
                      className="position-absolute w-100 h-100 top-0 left-0"
                      style={{
                        background:
                          "linear-gradient(to top,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))",
                        borderRadius: "10px",
                      }}
                    >
                      <h1
                        className="text-light bottom-0 position-absolute fw-semibold"
                        style={{
                          padding: "10px 20px",
                          lineHeight: "110%",
                          letterSpacing: "-0.24px",
                          fontSize: "20px",
                        }}
                      >
                        {item.title}
                      </h1>
                    </div>
                    <img
                      key={index}
                      className="rounded-3"
                      src={item.image}
                      style={{
                        maxHeight: "200px",
                        minHeight: "200px",
                        minWidth: "250px",
                        maxWidth: "250px",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                      alt=""
                    />
                  </div>
                </>
              ))}
            {jsonData
              .slice(0, Math.ceil(jsonData.length / 2))
              .map((item, index) => (
                <>
                <div className="position-relative">
                  <div
                    className="position-absolute w-100 h-100 top-0 left-0"
                    style={{
                      background:
                        "linear-gradient(to top,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))",
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      className="text-light bottom-0 position-absolute fw-semibold"
                      style={{
                        padding: "10px 20px",
                        lineHeight: "110%",
                        letterSpacing: "-0.24px",
                        fontSize: "20px",
                      }}
                    >
                      {item.title}
                    </h1>
                  </div>
                  <img
                    key={index}
                    className="rounded-3"
                    src={item.image}
                    style={{
                      maxHeight: "200px",
                      minHeight: "200px",
                      minWidth: "250px",
                      maxWidth: "250px",
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    alt=""
                  />
                </div>
              </>
              ))}
          </div>
        </div>
        <div className="card-wrapper ekstra2 w-100 ">
          <div className="card-ekstra d-flex gap-4">
            {jsonData
              .slice(Math.ceil(jsonData.length / 2))
              .map((item, index) => (
                <>
                  <div className="position-relative">
                    <div
                      className="position-absolute w-100 h-100 top-0 left-0"
                      style={{
                        background:
                          "linear-gradient(to top,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))",
                        borderRadius: "10px",
                      }}
                    >
                      <h1
                        className="text-light bottom-0 position-absolute fw-semibold"
                        style={{
                          padding: "10px 20px",
                          lineHeight: "110%",
                          letterSpacing: "-0.24px",
                          fontSize: "20px",
                        }}
                      >
                        {item.title}
                      </h1>
                    </div>
                    <img
                      key={index}
                      className="rounded-3"
                      src={item.image}
                      style={{
                        maxHeight: "200px",
                        minHeight: "200px",
                        minWidth: "250px",
                        maxWidth: "250px",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                      alt=""
                    />
                  </div>
                </>
              ))}
            {jsonData
              .slice(Math.ceil(jsonData.length / 2))
              .map((item, index) => (
                <>
                  <div className="position-relative">
                    <div
                      className="position-absolute w-100 h-100 top-0 left-0"
                      style={{
                        background:
                          "linear-gradient(to top,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))",
                        borderRadius: "10px",
                      }}
                    >
                      <h1
                        className="text-light bottom-0 position-absolute fw-semibold"
                        style={{
                          padding: "10px 20px",
                          lineHeight: "110%",
                          letterSpacing: "-0.24px",
                          fontSize: "20px",
                        }}
                      >
                        {item.title}
                      </h1>
                    </div>
                    <img
                      key={index}
                      className="rounded-3"
                      src={item.image}
                      style={{
                        maxHeight: "200px",
                        minHeight: "200px",
                        minWidth: "250px",
                        maxWidth: "250px",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
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
