import "./kabarSekolah.css";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const KabarSekolah = () => {
  return (
    <>
      <div className="kabarSekolah">
        <Row className="headline mb-4 mx-0 p-0 d-flex align-items-end gap-3">
          <Col xs={8} className="m-0 p-0">
            <h1 className="p-0 fw-bolder">Kabar Sekolah</h1>
          </Col>
          <Col className="m-0 p-0">
            <p className="d-flex p-0 m-0 fw-semibold text-nowrap">
              SMA Laboratorium UM
            </p>
          </Col>
        </Row>

        <Row className="content m-0 p-0 gap-3">
          <Col xs={8} className="kabar-container d-flex flex-column gap-4">
            <div className="card-kabar m-0 p-0">
              <Row className="m-0 p-0 gap-4">
                <Col className="img-container m-0 p-0">
                  <img
                    className="w-100 h-100 rounded-4"
                    src="./assets/BeritaPage/thumbnail1.svg"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </Col>
                <Col xs={7} className="desc-container m-0 p-0  ">
                  <div className="ket p-0 d-flex gap-2">
                    <p className="p-0 m-0">Admin</p>
                    <div className="p-0 circle rounded-circle bg-dark"></div>
                    <p className="p-0 mb-2">05 Mar, 2024</p>
                  </div>
                  <h2 className="fw-bold">
                    Antusiasme Siswa Kelas XII Sambut Ujian Praktik
                  </h2>
                  <p className="fw-light">
                    Pada tanggal 15 Januari sampai 6 Februari 2024, SMA Lab UM
                    menggelar ujian praktik untuk siswa kelas XII. Ujian ini
                    terinteg...
                  </p>

                  <Button className="rounded-3 gap-3 d-flex fw-medium">
                    <Link
                      to="/kabarDetailPage"
                      className="text-decoration-none"
                      style={{ color: "#861fc1" }}
                    >
                      Lanjut Membaca
                    </Link>
                    <i class="bi bi-arrow-right"></i>
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="card-kabar m-0 p-0">
              <Row className="m-0 p-0 gap-4">
                <Col className="img-container m-0 p-0">
                  <img
                    className="w-100 h-100 rounded-4"
                    src="./assets/BeritaPage/thumbnail2.svg"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </Col>
                <Col xs={7} className="desc-container m-0 p-0  ">
                  <div className="ket p-0 d-flex gap-2">
                    <p className="p-0 m-0">Admin</p>
                    <div className="p-0 circle rounded-circle bg-dark"></div>
                    <p className="p-0 mb-2">23 Feb, 2024</p>
                  </div>
                  <h2 className="fw-bold">
                    Peringatan Isra’ Mi’raj Tingkatan Kepribadian
                  </h2>
                  <p className="fw-light">
                    Peristiwa Isra’ Mi’raj memiliki arti penting bagi pembinaan
                    keperibadian manusia, karena dalam peristiwa Isra’
                    Mi’raj tersebut...
                  </p>
                  <Button className="rounded-3 gap-3 d-flex fw-medium">
                    <Link
                      to="/kabarDetailPage"
                      className="text-decoration-none"
                      style={{ color: "#861fc1" }}
                    >
                      Lanjut Membaca
                    </Link>
                    <i class="bi bi-arrow-right"></i>
                  </Button>
                </Col>
              </Row>
            </div>
            
            <div className="page-indicator d-flex align-items-center gap-2 mt-3">
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
          </Col>

          <Col className="arsip-container m-0 p-0">
            <h3 className="fw-bold mb-3">Arsip</h3>
            <div className="arsip-tahun mb-5">
              <ul className="list-unstyled">
                <li className="p-3 ">2023</li>
                <li className="p-3 ">2022</li>
                <li className="p-3 ">2021</li>
                <li className="p-3 ">2020</li>
                <li className="p-3 ">2019</li>
              </ul>
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
        </Row>
      </div>
    </>
  );
};

export default KabarSekolah;
