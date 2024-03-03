import { Row, Col } from "react-bootstrap";

const SocialMedia = () => {
  return (
    <>
      <div className="sosmed" style={{ padding: "30px 40px 50px 40px" }}>
        <h5>Social Media</h5>
        {/* =========== ATAS =============== */}
        <div className="atas gap-3 p-0 m-0 d-flex w-100">
          <Col className="">
            <div
              className="card-post w-100"
              style={{ padding: "20px", overflow: "hidden" }}
            >
              <img
                src="./assets/sosmed/sosmed1.svg"
                className="rounded-3 w-100"
                style={{
                  objectFit: "cover",
                  maxHeight: "250px",
                  minHeight: "250px",
                  minWidth: "250px",
                }}
                alt="instagram post"
              />
              <p
                className="p-0 m-0 mt-3"
                style={{ lineHeight: "20px", fontSize: "13px" }}
              >
                🚧EFFORT🚧 Tuntas Sudah💜 Selamat Melanjutkan ke Pendidikan yang
                Lebih Tinggi Mawa...
                <span
                  className="text-decoration-underline"
                  style={{ color: "#2F80ED", cursor: "pointer" }}
                >
                  Lihat selengkapnya
                </span>
              </p>
              <div className="d-flex align-items-center gap-2 mt-3">
                <img
                  src="./assets/sosmed/instagram.svg"
                  style={{ width: "13px", height: "13px" }}
                  alt="instagram"
                />
                <a
                  className="p-0 m-0 text-decoration-none text-dark"
                  style={{ fontSize: "13px", cursor: "pointer" }}
                  href="https://www.instagram.com/smalabum/"
                  target="blank"
                >
                  smalabum
                </a>
              </div>
            </div>
          </Col>
          <Col className="">
            <div
              className="card-post w-100"
              style={{ padding: "20px", overflow: "hidden" }}
            >
              <img
                src="./assets/sosmed/sosmed2.svg"
                className="rounded-3 w-100 "
                style={{
                  objectFit: "cover",
                  maxHeight: "250px",
                  minHeight: "250px",
                  minWidth: "250px",
                }}
                alt="instagram post"
              />
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p
                  className="p-0 m-0 mt-3"
                  style={{ lineHeight: "20px", fontSize: "13px" }}
                >
                  Happy Birthday SMALABUM🎁 17 Juni 1994 - 17 Juni 2021. Sudah
                  27 tahun SMALABUM berdiri...
                  <span
                    className="text-decoration-underline"
                    style={{ color: "#2F80ED", cursor: "pointer" }}
                  >
                    Lihat selengkapnya
                  </span>
                </p>
                <div className="d-flex align-items-center gap-2 mt-3">
                  <img
                    src="./assets/sosmed/instagram.svg"
                    style={{ width: "13px", height: "13px" }}
                    alt="instagram"
                  />
                  <a
                    className="p-0 m-0 text-decoration-none text-dark"
                    style={{ fontSize: "13px", cursor: "pointer" }}
                    href="https://www.instagram.com/smalabum/"
                    target="blank"
                  >
                    smalabum
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col
            className=""
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Row className="m-0 p-0" style={{ height: "50%" }}>
              <div
                className="card-wa w-100 h-100 rounded-3"
                style={{
                  padding: "10px 15px",
                  background: "#FAFAFA",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p
                  className="p-0 m-0 mt-3"
                  style={{ lineHeight: "20px", fontSize: "13px" }}
                >
                  Peringatan HUT 75 RI tetap kami lakukan ditengah suasana
                  pandemi covid-19 dengan khidmat...{" "}
                  <span
                    className="text-decoration-underline"
                    style={{ color: "#2F80ED", cursor: "pointer" }}
                  >
                    Lihat selengkapnya
                  </span>
                </p>
                <div className="d-flex gap-2">
                  <img
                    src="./assets/sosmed/whatsapp.svg"
                    style={{ width: "13px", height: "13px" }}
                    alt="whatsapp"
                  />
                  <a
                    className="p-0 m-0 text-decoration-none text-dark"
                    style={{ fontSize: "13px", cursor: "pointer" }}
                    href="https://www.instagram.com/smalabum/"
                    target="blank"
                  >
                    smalabum
                  </a>
                </div>
              </div>
            </Row>
            <Row className="m-0 p-0 h-50">
              <div
                className="card-wa w-100 h-100 rounded-3"
                style={{
                  padding: "10px 15px",
                  background: "#FAFAFA",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p
                  className="p-0 m-0 mt-3"
                  style={{ lineHeight: "20px", fontSize: "13px" }}
                >
                  Kamu bagian dari warga SMA LAB termasuk alumni, yukk
                  seru-seruan dengan twibbon di...{" "}
                  <span
                    className="text-decoration-underline"
                    style={{ color: "#2F80ED", cursor: "pointer" }}
                  >
                    Lihat selengkapnya
                  </span>
                </p>
                <div className="d-flex gap-2">
                  <img
                    src="./assets/sosmed/whatsapp.svg"
                    style={{ width: "13px", height: "13px" }}
                    alt="whatsapp"
                  />
                  <a
                    className="p-0 m-0 text-decoration-none text-dark"
                    style={{ fontSize: "13px", cursor: "pointer" }}
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
        <div className="bawah">
          <Row className="gap-3 p-0 m-0">
            <Col xs={8} className="" style={{ padding: "20px" }}>
              <img
                src="./assets/sosmed/purna.svg"
                className="rounded-3 w-100 "
                style={{
                  objectFit: "cover",
                  maxHeight: "300px",
                  minHeight: "300px",
                }}
                alt="image"
              />
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h4
                  className="p-0 m-0 mt-3 fw-bold"
                  style={{ fontSize: "20px" }}
                >
                  Purnawiyata Bakti ke 24 SMA Lab UM
                </h4>
                <div className="d-flex align-items-center gap-2 mt-3">
                  <img
                    src="./assets/sosmed/youtube.svg"
                    style={{ width: "13px", height: "13px" }}
                    alt="youtube"
                  />
                  <a
                    className="p-0 m-0 text-decoration-none text-dark"
                    style={{ fontSize: "13px", cursor: "pointer" }}
                    href="https://www.youtube.com/@smalabum7934"
                    target="blank"
                  >
                    smalabum
                  </a>
                </div>
              </div>
            </Col>
            <Col className="" style={{ padding: "20px" }}>
              <img
                src="./assets/sosmed/tiktok.svg"
                className="rounded-3 w-100 "
                style={{
                  objectFit: "cover",
                  maxHeight: "300px",
                  minHeight: "300px",
                }}
                alt="facebook post"
              />
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p
                  className="p-0 m-0 mt-3"
                  style={{ lineHeight: "20px", fontSize: "13px" }}
                >
                  Guru senior di sekolah kami nih... Pengen kenal lebih dekat?
                  Yukk gabung bersama kami. only di SMA LAB UM Malang Info...{" "}
                  <span
                    className="text-decoration-underline"
                    style={{ color: "#2F80ED", cursor: "pointer" }}
                  >
                    Lihat selengkapnya
                  </span>
                </p>
                <div className="d-flex align-items-center gap-2 mt-3">
                  <img
                    src="./assets/sosmed/facebook.svg"
                    style={{ width: "13px", height: "13px" }}
                    alt="facebook"
                  />
                  <a
                    className="p-0 m-0 text-decoration-none text-dark"
                    style={{
                      fontSize: "13px",
                      cursor: "pointer",
                      color: "#0066FF",
                    }}
                    href="https://www.instagram.com/smalabum/"
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
        <div className="d-flex align-items-center w-100 gap-2 mt-4">
          <p className="p-0 m-0" style={{ color: "#091E6F", fontSize: "18px" }}>
            Lainnya
          </p>
          <img
            src="./assets/kabar/arrow-biru.svg"
            alt=""
            style={{ width: "15px" }}
          />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
