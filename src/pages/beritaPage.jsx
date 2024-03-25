import "./css/beritaPage.css";
import Footer from "../components/Footer";
import { Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Index from "../components/Berita/index";
import KabarSekolah from "../components/Berita/KabarSekolah";
import { useLocation } from "react-router-dom";

const beritaPage = () => {
  const thumbnailSrc = "./assets/footer/thumbnail.svg";
  const linkUrl = "https://youtu.be/AsnN3t7JPHU?si=Q1pYgUwhXAv0xLWY";
  const [selectedItem, setSelectedItem] = useState("Semua");

  // Fungsi untuk menangani klik item menu
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // ini versi kalau di refresh tetap di halaman yg di klik
  // const [selectedItem, setSelectedItem] = useState(localStorage.getItem('selectedItem') || 'Semua');

  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  // };

  useEffect(() => {
    localStorage.setItem('selectedItem', selectedItem);
  }, [selectedItem]);
  return (
    <>
      <div className="beritaPage">
        <div className="navMenu mb-4 mb-md-3 d-flex flex-column-reverse flex-md-row align-items-center justify-content-between">
          <ul className=" list-unstyled d-flex flex-wrap gap-2 m-0">
          <li
              className={selectedItem === "Semua" ? "fw-semibold active" : ""}
              onClick={() => handleItemClick("Semua")}
            >
              Semua
            </li>
            <li
              className={selectedItem === "Kabar Sekolah" ? "fw-semibold active" : ""}
              onClick={() => handleItemClick("Kabar Sekolah")}
            >
              Kabar Sekolah
            </li>
            <li
              className={selectedItem === "Prestasi" ? "fw-semibold active" : ""}
              onClick={() => handleItemClick("Prestasi")}
            >
              Prestasi
            </li>
            <li
              className={selectedItem === "Artikel" ? "fw-semibold active" : ""}
              onClick={() => handleItemClick("Artikel")}
            >
              Artikel
            </li>
            {/* <li onClick={() => handleItemClick("Semua")}>Semua</li>
              <li onClick={() => handleItemClick("Kabar Sekolah")}>
                Kabar Sekolah
              </li>
              <li onClick={() => handleItemClick("Prestasi")}>Prestasi</li>
              <li onClick={() => handleItemClick("Artikel")}>Artikel</li> */}
          </ul>
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

        <div>
          {selectedItem === "Semua" && <Index />}
          {selectedItem === "Kabar Sekolah" && <KabarSekolah />}
        </div>
      </div>
      <Footer thumbnailSrc={thumbnailSrc} linkUrl={linkUrl} />
    </>
  );
};

export default beritaPage;
