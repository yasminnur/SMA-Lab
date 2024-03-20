import "./css/beritaPage.css";
import Footer from "../components/Footer";
import { Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Index from "../components/Berita/index";
import KabarSekolah from "../components/Berita/KabarSekolah";

const beritaPage = () => {
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

  // useEffect(() => {
  //   localStorage.setItem('selectedItem', selectedItem);
  // }, [selectedItem]);
  return (
    <>
        <div className="beritaPage">
          <div className="navMenu d-flex align-items-center justify-content-between">
            <ul className=" list-unstyled d-flex gap-3">
              <li onClick={() => handleItemClick("Semua")}>Semua</li>
              <li onClick={() => handleItemClick("Kabar Sekolah")}>
                Kabar Sekolah
              </li>
              <li onClick={() => handleItemClick("Prestasi")}>Prestasi</li>
              <li onClick={() => handleItemClick("Artikel")}>Artikel</li>
              {/* <li>Semua</li>
                <li>Kabar Sekolah</li>
                <li>Prestasi</li>
                <li>Artikel</li> */}
            </ul>
            <div className="search-container d-flex align-items-center">
              <img src="./assets/BeritaPage/search.svg" alt="" />
              <input type="text" />
              Temukan berita apa pun di sini
            </div>
          </div>

          {/* Konten yang dipilih akan ditampilkan di sini */}
          <div>
            {selectedItem === "Semua" && <Index />}
            {selectedItem === "Kabar Sekolah" && <KabarSekolah />}
            {/* {selectedItem === 'Prestasi' && <PrestasiContent />} */}
            {/* {selectedItem === 'Artikel' && <ArtikelContent />} */}
          </div>

          {/* ============================= */}
        </div>
        <Footer />
    </>
  );
};

export default beritaPage;
