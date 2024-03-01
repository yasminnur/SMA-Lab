import "./css/kabar.css";
import { Row, Col } from "react-bootstrap";
import data from "../data/kabar.json";
import React, { useState, useEffect } from "react";

const KabarKami = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <div className="kabar">
        <h5>Kabar terbaru kami</h5>
        <div className="nav-container">
          <div className="menu">
            <ul>
              <li>Kabar SMALAB</li>
              <li>Prestasi</li>
              <li>Pengumuman</li>
              <li>Artikel</li>
            </ul>
          </div>
          <div className="lainnya d-flex align-items-center gap-3">
            <p className="p-0 m-0">Informasi Lainnya</p>
            <img
              className="bg-warning p-1 rounded-circle"
              src="./assets/agenda/more.svg"
              alt="panah"
            />
          </div>
        </div>

        <Row className="content m-0 gap-4 d-flex">
          <Col xs={7} className=" p-0">
            <img
              className="w-100 rounded-4"
              src="./assets/kabar/kabar1.svg"
              alt=""
            />
            <div className="ket d-flex gap-2 mt-3">
              <p className="p-0" style={{fontSize: "12px", fontWeight: 'normal'}}>Kabar SMALAB</p>
              <div
                className="circle rounded-circle bg-dark"
                style={{ width: "5px", height: "5px", marginTop: "7px" }}
              ></div>
              <p className="p-0" style={{fontSize: "12px", fontWeight: 'normal'}}>19 Feb, 2024</p>
            </div>
            <h2 className="fw-bold" style={{fontSize: "25px"}}>
              Eratkan Persahabatan, Duta PPK SMA LAB UM Kunjungi Putra-Putri
              Mitreka Satata
            </h2>
          </Col>

          <Col className="p-0">
            {jsonData.map((item, index) => (
              <Row key={index} className="card-kabar p-0 m-0 mb-4 gap-3">
                <Col xs={4} className="p-0 m-0">
                  {" "}
                  <img className="rounded-3 w-100" src={item.image} alt="" />
                </Col>
                <Col className="p-0 m-0">
                  <div className="desc w-100">
                    <div className="ket d-flex gap-1 ">
                      <p
                        className="p-0 m-0"
                        style={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {item.program}
                      </p>
                      <div
                        className="circle rounded-circle bg-dark"
                        style={{
                          width: "4px",
                          height: "4px",
                          marginTop: "5px",
                        }}
                      ></div>
                      <p
                        className="p-0 m-0"
                        style={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {item.date}
                      </p>
                    </div>
                    <h4 className="fw-bold" style={{ fontSize: "15px" }}>
                      {item.title}
                    </h4>
                  </div>
                </Col>
              </Row>
            ))}
          </Col>
              </Row>
              
      </div>
    </>
  );
};

export default KabarKami;
