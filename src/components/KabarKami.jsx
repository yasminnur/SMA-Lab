import "./css/kabar.css";
import { Row, Col } from "react-bootstrap";
import data from "../data/kabar.json";
import Jurnalistik from "./Jurnalistik"
import React, { useState, useEffect, useRef } from "react";
// import { useMediaQuery } from 'react-responsive';

const KabarKami = () => {
  const [jsonData, setJsonData] = useState([]);
  const [hotNewsHeight, setHotNewsHeight] = useState(0);
  const refHotNews = useRef(null);
  const refCardKabarContainer = useRef(null);
  // const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    setJsonData(data);
  }, []);

  // const [maxHeight, setMaxHeight] = useState("auto");
  useEffect(() => {
    // Mengukur tinggi hotNews saat komponen dimuat
    setHotNewsHeight(refHotNews.current.clientHeight);
  }, []);
  return (
    <>
      <div className="kabar">
        <h3 className="mb-2 p-0 fw-semibold">Kabar terbaru kami</h3>
        <div className="nav-container ">
          <div className="menu mb-2 mb-md-0">
            <ul className="m-0">
              <li className="">Kabar SMALAB</li>
              <li className="">Prestasi</li>
              <li className="">Pengumuman</li>
              <li className="">Artikel</li>
            </ul>
          </div>
          <div className="lainnya d-flex align-items-start gap-md-3">
            <p className="p-0 m-0">Informasi Lainnya</p>
            <img
              className="bg-warning p-1 rounded-circle"
              src="./assets/agenda/more.svg"
              alt="panah"
            />
          </div>
        </div>

        <Row className="content m-0 gap-4 d-flex">
          <Col xs={12} md={7} className="hotNews p-0" ref={refHotNews}>
            <div className="img-container w-100">
              <img
                className="w-100 h-100 rounded-4"
                src="./assets/kabar/kabar1.svg"
                alt=""
              />
            </div>
            <div className="ket p-0 d-flex gap-2 mt-md-3">
              <p
                className="p-0 m-0"
              >
                Kabar SMALAB
              </p>
              <div
                className="p-0 circle rounded-circle bg-dark"
                // style={{ width: "5px", height: "5px", marginTop: "7px" }}
              ></div>
              <p
                className="p-0 mb-2"
                // style={{ fontSize: "12px", fontWeight: "normal" }}
              >
                19 Feb, 2024
              </p>
            </div>
            <h1 className="fw-bold m-0"
            >
              Eratkan Persahabatan, Duta PPK SMA LAB UM Kunjungi Putra-Putri
              Mitreka Satata
            </h1>
          </Col>

          <Col
            className="card-kabar-container p-0"
            style={{ overflowY: "auto", height: hotNewsHeight }}
            ref={refCardKabarContainer}
          >
            {jsonData.map((item, index) => (
              <Row key={index} className="card-kabar p-0 m-0 mb-3 mb-md-3 gap-3 gap-md-3">
                <Col xs={4} md={5} className="image p-0 m-0">
                  <div className="overlay rounded-3 p-1 p-lg-2 w-100 h-100 d-flex justify-content-end align-items-start">
                    <img
                      className=""
                      src="./assets/kabar/arrow-up.svg"
                      alt=""
                    />
                  </div>
                  <img className="rounded-3 w-100" src={item.image} alt="" />
                </Col>
                <Col className="desc-container p-0 m-0">
                  <div className="desc w-100">
                    <div className="ket d-flex gap-1 m-0 mb-1 mb-md-2 ">
                      <p
                        className="p-0 m-0"
                      >
                        {item.program}
                      </p>
                      <div
                        className="circle rounded-circle bg-dark"
                        // style={{
                        //   width: "4px",
                        //   height: "4px",
                        //   marginTop: "5px",
                        // }}
                      ></div>
                      <p
                        className="p-0 m-0"
                      >
                        {item.date}
                      </p>
                    </div>
                    <h4 className="title fw-bold m-0">
                      {item.title}
                    </h4>
                  </div>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>

        <div className="mt-5">
          <Jurnalistik />
          </div>
      </div>
    </>
  );
};

export default KabarKami;
