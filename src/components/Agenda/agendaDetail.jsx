import React from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import "./agendaDetail.css";
import Footer from "../Footer";
import data from "../../data/agenda.json"
import Calendar from "./Calendar"

const agendaDetail = () => {

  const { id } = useParams();

  const agenda = data[id];
  return (
    <>
      <div className="agenda-detail">
        <div
          className="back d-inline-block w-100"
          style={{ background: "#F8F8F8" }}
        >
          <Link to="/agendaPage" className="text-decoration-none">
            👈 Kembali
          </Link>
        </div>

        <Row className="m-0 headline" style={{ background: "#F8F8F8" }}>
          <Col md={6}>
            <div className="agendaa h-100 gap-2 mb-4 d-flex flex-column justify-content-between">
              <div>
                <h5 className="fw-bold mb-2">AGENDA</h5>
                <h3 className="fw-bold mb-2">
                  {agenda.program} {agenda.title}
                  {/* From The River To The Liberty */}
                </h3>
              </div>
              <div className="desc-bawah">
                <div className="ket mb-1 p-0 d-flex gap-2 fw-semibold">
                  <p className="p-0 m-0">
                    {agenda.day}
                    {/* Selasa */}
                  </p>
                  <div className="p-0 circle rounded-circle bg-dark"></div>
                  <p className="p-0 m-0">
                    {agenda.date}
                    {/* 05 Maret, 2024 */}
                  </p>
                </div>
                <p className="fw-semibold mb-3">Pukul {""}
                  {agenda.time} - {agenda.timeOut}
                  {/* 16:00 - 20:00 */}
                  WIB
                </p>
                <p className="fw-normal m-0">
                  {agenda.place}
                  {/* Aula SMA Laboratorium UM */}
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <img
              className="w-100 h-100 rounded-3"
              src={agenda.image}
              // src="./assets/agenda/event3.svg"
              alt=""
            />
          </Col>
        </Row>

        <Row className="content m-0">
          <Col></Col>
          <Col md={8}>
            <div className="mb-5">
              <p className="fw-semibold m-0">
                - Tiket Wahana Seni + "NgARTbuburit" AYCE ALL IN (Rp. 120.000)
              </p>
              <ul className="fw-normal mb-4">
                <li>
                  FREE Wahana Seni "FROM THE RIVER TO THE LIBERTY" beli sekali
                  masuk sepuasnya s/d 30 Juni 2024
                </li>
                <li>FREE All You Can Eat at TEMU TAMU Resto & Cafe</li>
                <li>FREE Fun Art Workshop with Unicorn Creative Space</li>
                <li>
                  FREE Gallery Tour with Unicorn Young Collectors Club (UYCC)
                </li>
                <li>FREE Photobox</li>
                <li>
                  FREE Art Merchandise from Unicorn Young Collectors Club (UYCC)
                </li>
              </ul>
              <p className="fw-semibold m-0">
                - Tiket Wahana Seni + "NgARTbuburit" AYCE ALL IN (Rp. 120.000)
              </p>
              <ul className="fw-normal mb-4">
                <li>
                  FREE Wahana Seni "FROM THE RIVER TO THE LIBERTY" Experience
                  Art For Human Rights, beli sekali masuk sepuasnya s/d 30 Juni
                  2024
                </li>
              </ul>
              <p className="perhatian fw-semibold mb-4">
                PERHATIAN: Mohon konfirmasi dua hari sebelum datang (H-2) by
                Whatsapp untuk pembelian "ngARTbuburit" Bundle ke nomor berikut
                085236479844 atau 082329514738 dan tunjukkan e-ticket anda.
                Terima kasih
              </p>
              <p className="fw-semibold m-0">Syarat & Ketentuan</p>
              <p className="fw-normal m-0">
                Peraturan Pengunjung | Visitors Regulation:
              </p>
              <ul className="fw-normal">
                <li>Jaga Ketenangan | Please keep quiet</li>
                <li>Dilarang Duduk | Do not sit down</li>
                <li>Dilarang Membawa Kamera | No camera please</li>
                <li>Dilarang Menggunakan Flash | No flash please</li>
                <li>
                  Dilarang Membawa tongsis/tripod | Do not bring selfie stick
                </li>
                <li>
                  Foto dan video komersil wajib seizin pihak UYCC | Taking
                  commercial photo & video is not allowed without prior
                  permission
                </li>
                <li>Dilarang Menyentuh Karya | Do not touch the artwork</li>
                <li>
                  Dilarang membawa & mengonsumsi makanan & minuman | Do not
                  bring and consumse food & drink
                </li>
                <li>Dilarang Merokok | No smoking</li>
                <li>Dilarang Membuang Sampah | Do not litter</li>
                <li>Dilarang Membawa Backpack | Do not bring backpack</li>
                <li>
                  Dibawah usia 12 tahun dilarang masuk | No entry for kids under
                  12 years oldec
                </li>
              </ul>
            </div>

            <div className="social-media">
              <h3 className="mb-3">Bagikan ini</h3>

              <div className="d-flex gap-3 justify-content-start">
                <a
                  href="https://www.facebook.com/smalabum?mibextid=ZbWKwL"
                  target="blank"
                >
                  <div className="sosmed-akun mx-auto p-2 m-md-0 rounded-circle d-flex">
                    <img
                      className="m-0 p-0"
                      src="./assets/footer/facebook.svg"
                      alt=""
                    />
                  </div>
                </a>
                <a href="https://www.instagram.com/smalabum/" target="blank">
                  <div className="sosmed-akun mx-auto p-2 m-md-0 rounded-circle d-flex">
                    <img
                      className="m-0 p-0"
                      src="./assets/footer/instagram.svg"
                      alt=""
                    />
                  </div>
                </a>
                <a href="">
                  <div className="sosmed-akun mx-auto p-2 m-md-0 rounded-circle d-flex">
                    <img
                      className="m-0 p-0"
                      alt=""
                      src="./assets/footer/x.svg"
                    />
                  </div>
                </a>
                <a href="https://www.youtube.com/@smalabum7934" target="blank">
                  <div className="sosmed-akun mx-auto p-2 m-md-0 rounded-circle d-flex">
                    <img
                      className="m-0 p-0"
                      alt=""
                      src="./assets/footer/youtube.svg"
                    />
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="agenda-lainnya m-0 ">
          <div className="page-indicator mt-5 py-4 d-flex align-items-center justify-content-between">
            <h3 className="fw-bold p-0 m-0">Baca berita lainnya</h3>
            <div className="d-flex gap-3 align-items-center">
              <i className="bi bi-arrow-left"></i>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          <div className="agenda-list px-0 pt-4 pb-5">
            <div className="d-flex gap-3 flex-column flex-md-row">
              <Col md={6}>
                <img
                  src="./assets/agenda/event1.svg"
                  alt=""
                  className="w-100 rounded-3 mb-3"
                />
                <h5 className="w-100 d-inline-block mb-3 fw-bold">Hari Ini</h5>
                <h3 className="fw-bold title-kanan mb-3">
                Standup Comedy Routine: BOTOLAN (Bocah Tampan Reguler)
                </h3>
                <div className="ket d-flex gap-1 fw-medium">
                  <p className="p-0 m-0">Rabu, 16:00 WIB</p>
                  <div
                    className="circle rounded-circle bg-dark"
                    style={{
                      width: "4px",
                      height: "4px",
                      marginTop: "8px",
                    }}
                  ></div>
                  <p className="p-0 m-0">Auditorium SMA Laboratorium UM</p>
                </div>
              </Col>
              <Col md={6}>
                <img
                  src="./assets/agenda/event2.svg"
                  alt=""
                  className="w-100 rounded-3 mb-3"
                />
                <h5 className="w-100 d-inline-block mb-3 fw-bold">15 Maret 2024</h5>
                <h3 className="fw-bold title-kanan mb-3">
                Festival Pemilu : Kepoin Parpol, Adu Ide, Main Bareng
                </h3>
                <div className="ket d-flex gap-1 fw-medium">
                  <p className="p-0 m-0">Jum’at, 14:00 WIB</p>
                  {/* <div
                    className="circle rounded-circle bg-dark"
                    style={{
                      width: "4px",
                      height: "4px",
                      marginTop: "8px",
                    }}
                  ></div>
                  <p className="p-0 m-0">Auditorium SMA Laboratorium UM</p> */}
                </div>
              </Col>
            </div>
          </div>
{/* hai bro
          <Calendar /> */}
        </Row>
        <Footer />
      </div>
    </>
  );
};

export default agendaDetail;
