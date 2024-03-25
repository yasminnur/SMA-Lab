import { Col, Row, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./css/pengumumanPage.css";
import Footer from "../components/Footer";
import data from "../data/pengumuman.json";
const pengumumanPage = () => {
  const [jsonData, setJsonData] = useState([]);
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
      <div className="pengumumanPage">
        <div className="pakai-padding">
          <h1 className="fw-bolder">Pengumuman</h1>
          <h2 className="fw-semibold">SMA Laboratorium UM</h2>

          <div className="navMenu py-4 mb-5 d-flex flex-column-reverse flex-md-row align-items-center justify-content-between ">
            <div className="kategori d-flex align-items-center gap-3">
              <h3 className="m-0 fw-bold">Periode</h3>
              <Button className="m-0 gap-2 d-flex">
                Maret, 2024
                <img src="./assets/agenda/calendar.svg" alt="" />
              </Button>
            </div>
            <div
              className="search-container rounded-3 d-flex gap-2 align-items-center"
              style={{ background: "#F9F9F9" }}
            >
              <img src="./assets/BeritaPage/search.svg" alt="" />
              <input
                className="d-flex w-100"
                type="text"
                placeholder="Temukan berita apa pun di sini"
              />
            </div>
          </div>

          <Row className="agenda-jadwal m-0 flex-wrap">
            {jsonData.map((item, index) => (
              <Col md={4} lg={4} className="mb-5 p-2" key={index}>
                <div className="ket d-flex gap-2 fw-semibold mb-1 mb-lg-3">
                  <p className="p-0 m-0" style={{ color: "#861FC1" }}>
                    {item.tanggal} {item.bulan}
                  </p>
                  <div className="circle rounded-circle bg-dark"></div>
                  <p className="p-0 m-0">{item.tahun}</p>
                </div>
                <h2 className="fw-bold">{item.judul}</h2>
                <div className="edit mt-3 mt-lg-4 d-flex align-items-center gap-2 gap-lg-3">
                  <Button className="download d-flex m-0 gap-2 fw-semibold">
                    Unduh Dokumen
                    <img src="./assets/pengumuman/import.svg" alt="" />
                  </Button>
                  <Button className="share d-flex align-items-center">
                    <img src="./assets/pengumuman/share.svg" alt="" />
                  </Button>
                </div>
              </Col>
            ))}
          </Row>

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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default pengumumanPage;
