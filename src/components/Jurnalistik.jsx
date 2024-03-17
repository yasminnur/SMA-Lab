import data from "../data/jurnalis.json";
import React, { useState, useEffect } from "react";
import "./css/jurnalis.css";
import { Row, Col } from "react-bootstrap";

const Jurnalistik = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <div className="jurnalistik w-100">
        <h3 className="w-100 block fw-semibold">Jurnalistik</h3>
        <Row className="d-flex flex-wrap m-0 p-0">
          {jsonData.map((item, index) => (
            <Col className="p-2" key={index} xs={6} md={3}>
              <div className="card-container p-0">
                <img
                  className="d-flex rounded-3 p-0 w-100"
                  src={item.image}
                  alt=""
                />
                <div className="date-container">
                  <p className="p-0 date">{item.date}</p>
                  <h5 className="title p-0 m-0 fw-bold">{item.title}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="lainnya d-flex align-items-center w-100 gap-2 mt-4">
          <p className="p-0 m-0">Lainnya</p>
          <img src="./assets/kabar/arrow-biru.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Jurnalistik;
