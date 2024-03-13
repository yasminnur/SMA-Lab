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
        <Row className="d-flex m-0 p-0 gap-2 w-100">
        {jsonData.map((item, index) => (
  <Col className="p-0" key={index} style={{ width: "100px" }}>
  <div className="card-container p-0 m-">
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
   {/* <Col className="p-0">
     <div className="bg-danger card-container w-100" style={{ height: "100%" }}>
       <p className="m-0 ">Konten Kartu 2</p>
     </div>
   </Col>
   <Col className="p-0">
     <div className="bg-danger card-container w-100" style={{ height: "100%" }}>
       <p className="m-0 ">Konten Kartu 3</p>
     </div>
   </Col>
   <Col className="p-0">
     <div className="bg-danger card-container w-100" style={{ height: "100%" }}>
       <p className="m-0 ">Konten Kartu 4</p>
     </div>
   </Col> */}
</Row>

        {/* <div className="card-wrapper d-flex p-0 mt-2 bg-info gap-2">
          {jsonData.map((item, index) => (
            <Col xs={6} md={3} className="p-0" key={index}>
              <div className="card-container p-0 m-0 bg-danger">
                <img
                  className="d-flex rounded-3 p-0"
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
        </div> */}

        <div className="lainnya d-flex align-items-center w-100 gap-2 mt-4">
          <p className="p-0 m-0">Lainnya</p>
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
