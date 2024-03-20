import React, { useState, useEffect } from "react";
import Index from "../components/Agenda/index";
import SemuaAcara from "../components/Agenda/semuaAcara";
import Footer from "../components/Footer"
import "./css/agendaPage.css";

const agendaPage = () => {
  const thumbnailSrc = "./assets/footer/thumbnail2.svg";
  const linkUrl = "#";
  const [selectedItem, setSelectedItem] = useState("Acara Mendatang");

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
      <div className="agendaPage">
        <h1 className="fw-bolder">Agenda</h1>
        <h2 className="fw-semibold">
          Kegiatan/<span className="fst-italic">event</span> di SMA Laboratorium
          UM
        </h2>
        <div className="navMenu py-4 mb-5 d-flex align-items-center justify-content-between ">
          <ul className=" list-unstyled d-flex gap-3 p-0 m-0">
            <li className="" onClick={() => handleItemClick("Acara Mendatang")}>
              Acara Mendatang
            </li>
            <li className="" onClick={() => handleItemClick("Semua Acara")}>Semua Acara</li>
            {/* <li>Semua</li>
                <li>Kabar Sekolah</li>
                <li>Prestasi</li>
                <li>Artikel</li> */}
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

        {/* Konten yang dipilih akan ditampilkan di sini */}
        <div>
          {selectedItem === "Acara Mendatang" && <Index />}
          {selectedItem === "Semua Acara" && <SemuaAcara />}
          {/* {selectedItem === 'Prestasi' && <PrestasiContent />} */}
          {/* {selectedItem === 'Artikel' && <ArtikelContent />} */}
        </div>
      </div>
      <Footer  thumbnailSrc={thumbnailSrc}
        linkUrl={linkUrl} />
    </>
  );
};

export default agendaPage;
