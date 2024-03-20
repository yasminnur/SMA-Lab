import { Col, Row, Button } from "react-bootstrap";
import "./css/pengumumanPage.css";
import Footer from "../components/Footer"
const pengumumanPage = () => {
  return (
    <>
          <div className="pengumumanPage">
              <div className="pakai-padding">
        <h1 className="fw-bolder">Pengumuman</h1>
        <h2 className="fw-semibold">
        SMA Laboratorium UM
        </h2>

        <div className="navMenu py-4 mb-5 d-flex align-items-center justify-content-between ">
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
          <Col lg={4} className="mb-5 p-2">
            <div className="ket d-flex gap-2 fw-semibold mb-3">
              <p className="p-0 m-0" style={{ color: "#861FC1" }}>
                13 Maret
              </p>
              <div className="circle rounded-circle bg-dark"></div>
              <p className="p-0 m-0">2024</p>
            </div>
            <h2 className="fw-bold">
              Libur & Cuti Bersama Awal Ramadhan 1445 Hijriyah
            </h2>
          </Col>
          <Col lg={4} className="mb-5 p-2">
            <div className="ket d-flex gap-2 fw-semibold mb-3">
              <p className="p-0 m-0" style={{ color: "#861FC1" }}>
                13 Maret
              </p>
              <div className="circle rounded-circle bg-dark"></div>
              <p className="p-0 m-0">2024</p>
            </div>
            <h2 className="fw-bold">
              Penetapan Hasil Seleksi Administrasi Calon Guru & Karyawan Tata
              Usaha
            </h2>
          </Col>
          <Col lg={4} className="mb-5 p-2">
            <div className="ket d-flex gap-2 fw-semibold mb-3">
              <p className="p-0 m-0" style={{ color: "#861FC1" }}>
                13 Maret
              </p>
              <div className="circle rounded-circle bg-dark"></div>
              <p className="p-0 m-0">2024</p>
            </div>
            <h2 className="fw-bold">
              SMA Laboratorium UM Membuka Penjaringan Guru & Karyawan Tata Usaha
            </h2>
          </Col>
          <Col lg={4} className="mb-5 p-2">
            <div className="ket d-flex gap-2 fw-semibold mb-3">
              <p className="p-0 m-0" style={{ color: "#861FC1" }}>
                13 Maret
              </p>
              <div className="circle rounded-circle bg-dark"></div>
              <p className="p-0 m-0">2024</p>
            </div>
            <h2 className="fw-bold">
              Penetapan Hasil Seleksi Administrasi Calon Guru & Karyawan Tata
              Usaha
            </h2>
          </Col>
          <Col lg={4} className="mb-5 p-2">
            <div className="ket d-flex gap-2 fw-semibold mb-3">
              <p className="p-0 m-0" style={{ color: "#861FC1" }}>
                13 Maret
              </p>
              <div className="circle rounded-circle bg-dark"></div>
              <p className="p-0 m-0">2024</p>
            </div>
            <h2 className="fw-bold">
              SMA Laboratorium UM Membuka Penjaringan Guru & Karyawan Tata Usaha
            </h2>
          </Col>
          <Col lg={4} className="mb-5 p-2">
            <div className="ket d-flex gap-2 fw-semibold mb-3">
              <p className="p-0 m-0" style={{ color: "#861FC1" }}>
                13 Maret
              </p>
              <div className="circle rounded-circle bg-dark"></div>
              <p className="p-0 m-0">2024</p>
            </div>
            <h2 className="fw-bold">
              Libur & Cuti Bersama Awal Ramadhan 1445 Hijriyah
            </h2>
          </Col>
              </Row>

              <div className="page-indicator d-flex align-items-center justify-content-end gap-2 mt-3">
              <div className="prev d-flex align-items-center gap-2">
                <Button className="fw-medium">Previous</Button>
                <div className="page-number rounded-circle d-flex align-items-center justify-content-center">
                  <p className="fw-medium p-0 m-0">1</p>
                </div>
              </div>
              <div className="next d-flex align-items-center gap-2">
                <div className="page-number rounded-circle d-flex align-items-center justify-content-center">
                  <p className="fw-medium p-0 m-0">2</p>
                </div>
                <Button className="fw-medium">Next</Button>
              </div>
                  </div>
                  </div>
              
              <Footer />
      </div>
    </>
  );
};

export default pengumumanPage;
