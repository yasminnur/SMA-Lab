import { Row, Col } from "react-bootstrap";
import "./css/sosmed.css";

const SocialMedia = () => {
  return (
    <>
      <div className="sosmed">
        <h5>Social Media</h5>
        {/* =========== ATAS =============== */}
        <div className="atas gap-3 mt-4 gap-md-4 p-0 m-0 d-flex w-100">
          <div className="col col-md-8 col-mode-phone gap-3 gap-md-4">
            <Col className="">
              <div className="card-post w-100">
                <img
                  src="./assets/sosmed/sosmed1.svg"
                  className="instagram-post rounded-3 w-100"
                  alt="instagram post"
                />
                <div className="desc-instagram">
                <p
                  className="p-0 m-0 mt-2 mt-md-3"
                >
                  🚧EFFORT🚧 Tuntas Sudah💜 Selamat Melanjutkan ke Pendidikan
                  yang Lebih Tinggi Mawa...
                  <span className="text-decoration-underline" style={{color: '#2F80ED'}}>
                    Lihat selengkapnya
                  </span>
                </p>
                <div className="account d-flex align-items-center gap-2 mt-3">
                  <img src="./assets/sosmed/instagram.svg" alt="instagram" />
                  <a
                    className="p-0 m-0 text-decoration-none text-dark"
                    href="https://www.instagram.com/smalabum/"
                    target="blank"
                  >
                    smalabum
                  </a>
                  </div>
                  </div>
              </div>
            </Col>
            <Col className="">
              <div className="card-post w-100">
                <img
                  src="./assets/sosmed/sosmed2.svg"
                  className="instagram-post rounded-3 w-100 "
                  alt="instagram post"
                />
                <div className="desc-instagram">
                  <p
                    className="p-0 m-0 mt-2 mt-md-3"
                  >
                    Happy Birthday SMALABUM🎁 17 Juni 1994 - 17 Juni 2021. Sudah
                    27 tahun SMALABUM berdiri...
                    <span className="text-decoration-underline" style={{color: '#2F80ED'}}>
                      Lihat selengkapnya
                    </span>
                  </p>
                  <div className="account d-flex align-items-center gap-2 mt-3">
                    <img src="./assets/sosmed/instagram.svg" alt="instagram" />
                    <a
                      className="p-0 m-0 text-decoration-none text-dark"
                      href="https://www.instagram.com/smalabum/"
                      target="blank"
                    >
                      smalabum
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </div>
          <Col className="wa-container">
            <Row className="m-0 p-0" style={{ height: "50%" }}>
              <div className="card-wa w-100 h-100 rounded-3">
                <p className="p-0 m-0 mt-3">
                  Peringatan HUT 75 RI tetap kami lakukan ditengah suasana
                  pandemi covid-19 dengan khidmat...{" "}
                  <span className="text-decoration-underline" style={{color: '#2F80ED'}}>
                    Lihat selengkapnya
                  </span>
                </p>
                <div className="account d-flex gap-2 mt-2">
                  <img src="./assets/sosmed/whatsapp.svg" alt="whatsapp" />
                  <a
                    className="p-0 m-0 text-decoration-none text-dark"
                    href="https://www.instagram.com/smalabum/"
                    target="blank"
                  >
                    smalabum
                  </a>
                </div>
              </div>
            </Row>
            <Row className="m-0 p-0 h-50">
              <div className="card-wa w-100 h-100 rounded-3">
                <p className="p-0 m-0 mt-3">
                  Kamu bagian dari warga SMA LAB termasuk alumni, yukk
                  seru-seruan dengan twibbon di...{" "}
                  <span className="text-decoration-underline" style={{color: '#2F80ED'}}>
                    Lihat selengkapnya
                  </span>
                </p>
                <div className="account d-flex gap-2 mt-2">
                  <img src="./assets/sosmed/whatsapp.svg" alt="whatsapp" />
                  <a
                    className="p-0 m-0 text-decoration-none text-dark"
                    href="https://www.instagram.com/smalabum/"
                    target="blank"
                  >
                    smalabum
                  </a>
                </div>
              </div>
            </Row>
          </Col>
        </div>

        {/* =========== BAWAH ============== */}
        <div className="bawah mt-4 mt-md-5">
          <Row className="gap-3 gap-md-4 p-0 m-0">
            <Col xs={12} md={7} lg={8} className="youtube-container p-0">
              <img
                src="./assets/sosmed/purna.svg"
                className="youtube-post rounded-3 w-100 "
                alt="image"
              />
              <div className="desc">
                <h4 className="p-0 m-0 mt-3 fw-bold">
                  Purnawiyata Bakti ke 24 SMA Lab UM
                </h4>
                <div className="account d-flex align-items-center gap-2 mt-3">
                  <img src="./assets/sosmed/youtube.svg" alt="youtube" />
                  <a
                    className="p-0 m-0 text-decoration-none text-dark"
                    href="https://www.youtube.com/@smalabum7934"
                    target="blank"
                  >
                    smalabum
                  </a>
                </div>
              </div>
            </Col>
            <Col className="facebook-container mt-2 mt-md-0 p-0">
              <img
                src="./assets/sosmed/tiktok.svg"
                className="facebook-post rounded-3 w-100 "
                alt="facebook post"
              />
              <div className="desc">
                <p className="p-0 m-0 mt-3">
                  Guru senior di sekolah kami nih... Pengen kenal lebih dekat?
                  Yukk gabung bersama kami. only di SMA LAB UM Malang Info...{" "}
                  <span className="text-decoration-underline" style={{color: '#2F80ED'}}>
                    Lihat selengkapnya
                  </span>
                </p>
                <div className="account d-flex align-items-center gap-2 mt-3">
                  <img src="./assets/sosmed/facebook.svg" alt="facebook" />
                  <a
                    className="p-0 m-0 text-decoration-none text-dark"
                    href="https://www.facebook.com/smalabum?mibextid=ZbWKwL"
                    target="blank"
                  >
                    smalabum
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* =========== PANAH ============== */}
        <div className="panah d-flex align-items-center w-100 gap-2 mt-4">
          <p className="p-0 m-0">Lainnya</p>
          <img src="./assets/kabar/arrow-biru.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
