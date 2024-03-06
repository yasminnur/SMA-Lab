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
        <h5 className="w-100 block">Jurnalistik</h5>
        <div className="card-wrapper d-flex p-0 mt-4">
  {jsonData.map((item, index) => (
    <Col xs={6} md={3} className="p-2" key={index}>
      <div className="card-container">
        <img
          className="d-flex rounded-3 p-0 w-100"
          src={item.image}
          alt=""
        />
        <div className="">
          <p className="p-0 date">{item.date}</p>
          <p className="title p-0 m-0 fw-bold">{item.title}</p>
        </div>
      </div>
    </Col>
  ))}
</div>


        <div className="lainnya d-flex align-items-center w-100 gap-2 mt-4">
          <p
            className="p-0 m-0"
          >
            Lainnya
          </p>
          <img
            src="./assets/kabar/arrow-biru.svg"
            alt=""
            style={{ width: "15px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Jurnalistik;
