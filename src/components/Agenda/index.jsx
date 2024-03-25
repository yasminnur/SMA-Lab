import "./index.css";
import { Row, Col, Button } from "react-bootstrap";
import data from "../../data/agenda.json";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const index = () => {
  const [jsonData, setJsonData] = useState([]);
  // const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setJsonData(data);
  }, []);

  //Page Indicator
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  return (
    <>
      <div className="index">
        <Row className="wrap m-0 p-0">
          <Col className="mb-5 m-md-0 kategory p-0">
            <div className="kategori d-flex align-items-center justify-content-between mb-3 mb-lg-5">
              <h3 className="m-0 fw-bold">Kategori</h3>
              <Button className="m-0 gap-2 d-flex">
                Maret, 2024
                <img src="./assets/agenda/calendar.svg" alt="" />
              </Button>
            </div>

            <div className="periode mb-3 mb-md-5">
              <h5 className="py-2">Sedang berlangsung</h5>
              <h5 className="py-2">Pekan ini</h5>
              <h5 className="py-2">Pekan depan</h5>
              <h5 className="py-2">Bulan depan</h5>
            </div>

            <div className="ppdb-card w-100">
              <div
                className="containernya position-relative rounded-4"
                style={{
                  height: "fit-content",
                  background: "#861FC1",
                }}
              >
                <div className="content d-flex">
                  <div className="kiri my-auto w-100">
                    <p className="text-light p-0 m-0 mb-3 text-center">
                      PPDB SMA LAB UM
                    </p>
                    <h3
                      className="fw-bold text-light m-0 p-0 mb-3 text-center"
                      style={{
                        lineHeight: "120%",
                        letterSpacing: "-0.24px",
                      }}
                    >
                      Yuk masuk SMA <br /> Lab UM Lur
                    </h3>
                    <button className="rounded-3 mx-auto fw-semibold">
                      Daftar Sekarang!
                    </button>
                  </div>
                  <img
                    className="mx-auto bottom-0"
                    src="./assets/ekstra/ppdb.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={8} className="m-0 p-0 list-berita-lainnya">
            <h3 className="m-0 fw-bold mb-4 mb-lg-5 text-center text-md-start">
              Acara Mendatang
            </h3>

            {jsonData.map((item, index) => (
              <Link
                // to={`/agendaDetailPage/${index}`}
                to="/agendaDetailPage"
                key={index}
                className="agenda-link "
              >
                <div className="agendaa gap-lg-2 d-flex pb-4 mb-4">
                  <Col xs={6} lg={8}>
                    <h5 className="fw-bold mb-lg-3">
                      {item.date}
                      {/* Hari Ini */}
                    </h5>
                    <h3 className="fw-bold mb-3 text-dark">
                      {item.program} {item.title}
                      {/* Standup Comedy Routine: BOTOLAN (Bocah Tampan Reguler) */}
                    </h3>
                    <div className="ket mb-lg-3 p-0 d-flex gap-2 fw-medium">
                      <p className="p-0 m-0">
                        {item.day}, {item.time} WIB
                        {/* Admin */}
                      </p>
                      <div className="p-0 circle rounded-circle bg-dark"></div>
                      <p className="p-0 mb-2">
                        {item.place}
                        {/* 05 Mar, 2024 */}
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <img
                      className="w-100 h-100 rounded-3"
                      src={item.image}
                      // src="./assets/agenda/event1.svg"
                      alt=""
                    />
                  </Col>
                </div>
              </Link>
            ))}

            {/* <div className="agendaa gap-2 d-flex pb-4 mb-4">
              <Col xs={6} lg={8}>
                <h5 className="fw-bold mb-lg-3">15 Maret 2024</h5>
                <h3 className="fw-bold mb-3">
                Festival Pemilu : Kepoin Parpol, Adu Ide, Main Bareng
                </h3>
                <div className="ket mb-3 p-0 d-flex gap-2 fw-medium">
                  <p className="p-0 m-0">Jum’at, 14:00 WIB</p>
                </div>
              </Col>
              <Col>
                <img
                  className="w-100 h-100 rounded-3"
                  src="./assets/agenda/event2.svg"
                  alt=""
                />
              </Col>
            </div>
            <div className="agendaa gap-2 d-flex pb-4 mb-4">
              <Col xs={6} lg={8}>
                <h5 className="fw-bold mb-lg-3">15 Maret 2024</h5>
                <h3 className="fw-bold mb-3">
                From The River To The Liberty
                </h3>
                <div className="ket mb-3 p-0 d-flex gap-2 fw-medium">
                  <p className="p-0 m-0">Jum’at, 16:00 WIB</p>
                </div>
              </Col>
              <Col>
                <img
                  className="w-100 h-100 rounded-3"
                  src="./assets/agenda/event3.svg"
                  alt=""
                />
              </Col>
            </div> */}

            <div className="page-indicator d-flex align-items-center justify-content-end gap-2 mt-3">
              <div className="prev d-flex align-items-center gap-2">
                <Button className="fw-medium" onClick={handlePrevClick}>
                  Previous
                </Button>
                <div
                  className={`page-number rounded-circle d-flex align-items-center justify-content-center ${
                    currentPage === 1 && "active-number"
                  }`}
                >
                  <p className="fw-medium p-0 m-0">1</p>
                </div>
              </div>
              <div className="next d-flex align-items-center gap-2">
                <div
                  className={`page-number rounded-circle d-flex align-items-center justify-content-center ${
                    currentPage === 2 && "active-number"
                  }`}
                >
                  <p className="fw-medium p-0 m-0">2</p>
                </div>
                <Button className="fw-medium" onClick={handleNextClick}>
                  Next
                </Button>
              </div>
            </div>

            {/* DATA FILTERING TIDAK DITEMUKAN */}
            <div className="data-tidak-ditemukan d-none h-100 d-flex flex-column justify-content-center align-items-center">
              <img src="./assets/agenda/calendar-ungu.svg" alt="" />
              <p>Data tidak ditemukan!</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default index;
