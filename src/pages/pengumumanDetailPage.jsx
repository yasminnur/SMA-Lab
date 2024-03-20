import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import "./css/pengumumanDetailPage.css";
const pengumumanDetail = () => {
  return (
    <>
      <div className="pengumumanDetailPage">
        <div
          className="back d-inline-block w-100"
          style={{ background: "#F8F8F8" }}
        >
          <Link to="/agendaPage" className="text-decoration-none">
            👈 Kembali
          </Link>
          <div className="content">
            <div className="mb-4">
            <h1 className="mb-4">
              Penetapan Hasil Seleksi Administrasi Calon Guru & Karyawan Tata
              Usaha SMA Laboratorium UM
            </h1>
            <p >
              NOMOR: BA-002/UN2.SAU/HKP.02.04.00/2024 Pada hari ini, Rabu,
              tanggal Tiga Belas, bulan Maret, tahun Dua Ribu Dua Puluh Empat
              (Rabu, 13 Maret 2024) bertempat di Ruang Rapat Lantai 2 SMA
              Laboratorium UM telah dilaksanakan rapat untuk menetapkan Hasil
              Seleksi Administrasi Calon Guru & Karyawan Tata Usaha.
            </p>
            <p className="m-0">Berdasarkan:</p>
            <ul className="mb-4">
              <li style={{listStyleType :"decimal"}}>
                Keputusan Kepala Yayasan SMA Laboratorium UM No. 9 Tahun 2024
                tentang Pengangkatan Tenaga Guru & Karyawan Tata Usaha;
              </li>
              <li style={{listStyleType :"decimal"}}>
                Surat Keputusan Kepalas Sekolah Nomor 03 Tahun 2024 tentang
                Prasyarat Administrasi kriteria Calon Guru & Karyawan Tata Usaha
                SMA Laboratorium UM;
              </li>
              <li style={{listStyleType :"decimal"}}>
                Hasil telaah yang dilakukan oleh Panitia Khusus Pengangkatan
                Tenaga Guru & Karyawan Tata Usaha SMA Laboratorium UM.
              </li>
            </ul>
            <p>
              Pimpinan SMA Laboratorium UM menetapkan nama-nama dalam lampiran
              dokumen berikut adalah calon Guru & Karyawan Tatat Usaha yang
              Lolos Tahap Administrasi
            </p>
            </div>
            <div>
              <Button className="gap-2 d-flex">
                <img src="./assets/pengumuman/download.svg" alt="" />
                Download dokumen
              </Button>
            </div>
          </div>

          <div className="pengumuman-lain">
          <div className="page-indicator mt-5 py-4 d-flex align-items-center justify-content-between">
            <h3 className="fw-bold p-0 m-0">Pengumuman lainnya</h3>
            <div className="d-flex gap-3 align-items-center">
              <i className="bi bi-arrow-left"></i>
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
          
          <Row className="list-pengumuman-lain m-0 flex-wrap px-0 pt-4 pb-5">
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
            </Row>
            </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default pengumumanDetail;
