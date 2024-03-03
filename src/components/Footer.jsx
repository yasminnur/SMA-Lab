import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer w-100">
        <div
          className="footer-atas"
          style={{
            padding: "70px 40px 50px 40px",
            height: "fit-content",
            background: "#F8F8F8",
          }}
        >
          <Row className="d-flex" style={{ gap: "80px" }}>
            <Col xs={4} className="">
              <div className="logo d-flex align-items-center gap-3">
                <img src="./assets/footer/logo.svg" alt="logo" />
                <img src="./assets/footer/logo-text.svg" alt="logo" />
              </div>
              <p
                className="m-0 p-0 mt-4"
                style={{
                  lineHeight: "140%",
                  letterSpacing: "-0.24px",
                  fontSize: "15px",
                }}
              >
                Jl. Bromo No.16, Klojen, Kota Malang, Jawa Timur 65119 Indonesia
              </p>
              <h5
                className="m-0 p-0 mt-4"
                style={{
                  lineHeight: "140%",
                  letterSpacing: "-0.24px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Informasi Kontak
              </h5>
              <p
                className="m-0 p-0 mt-4"
                style={{
                  lineHeight: "18px",
                  letterSpacing: "-0.24px",
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
              >
                T: (0341) 368639
              </p>
              <p
                className="m-0 p-0 mt-1"
                style={{
                  lineHeight: "18px",
                  letterSpacing: "-0.24px",
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
              >
                E: smalabum@yahoo.com
              </p>
            </Col>
            <Col className="d-flex p-0">
              <Col
                className="kiri atas w-100"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="d-flex">
                  <Col>
                    <p
                      className="m-0 p-0"
                      style={{
                        lineHeight: "160%",
                        letterSpacing: "-0.24px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Profil Sekolah
                    </p>
                    <p
                      className="m-0 p-0"
                      style={{
                        lineHeight: "160%",
                        letterSpacing: "-0.24px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Informasi
                    </p>
                  </Col>
                  <Col>
                    <p
                      className="m-0 p-0"
                      style={{
                        lineHeight: "160%",
                        letterSpacing: "-0.24px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                      }}
                    >
                      PPDB 2024
                    </p>
                    <p
                      className="m-0 p-0"
                      style={{
                        lineHeight: "160%",
                        letterSpacing: "-0.24px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Link Terkait
                    </p>
                  </Col>
                </div>
                <div className="">
                  <p>OFFICIAL SOCIAL MEDIA</p>
                  <div className="d-flex gap-3">
                    <div
                      className="p-2 m-0 rounded-circle d-flex"
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                        height: "fit-content",
                      }}
                    >
                      <img
                        className="m-0 p-0"
                        style={{ minWidth: "15px", minHeight: "15px" }}
                        src="./assets/footer/facebook.svg"
                        alt=""
                      />
                    </div>
                    <div
                      className="p-2 m-0 rounded-circle d-flex"
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                        height: "fit-content",
                      }}
                    >
                      <img
                        className="m-0 p-0"
                        style={{ minWidth: "15px", minHeight: "15px" }}
                        src="./assets/footer/instagram.svg"
                        alt=""
                      />
                    </div>
                    <div
                      className="p-2 m-0 rounded-circle d-flex"
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                        height: "fit-content",
                      }}
                    >
                      <img
                        className="m-0 p-0"
                        style={{ minWidth: "15px", minHeight: "15px" }}
                        alt=""
                        src="./assets/footer/x.svg"
                      />
                    </div>
                    <div
                      className="p-2 m-0 rounded-circle d-flex"
                      style={{
                        border: "1px solid black",
                        width: "fit-content",
                        height: "fit-content",
                      }}
                    >
                      <img
                        className="m-0 p-0"
                        style={{ minWidth: "15px", minHeight: "15px" }}
                        alt=""
                        src="./assets/footer/youtube.svg"
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="kanan w-100 p-0 m-0">
                <img
                  className="rounded-4"
                  src="./assets/footer/thumbnail.svg"
                  style={{ maxWidth: "500px", objectFit: "cover" }}
                  alt=""
                />
              </Col>
            </Col>
          </Row>
        </div>
        <div
          className="footer-bawah w-100 p-4 bg-dark"
          style={{ height: "fit-content" }}
        >
          <p
            className="text-center text-light m-0"
            style={{ color: "#808080", fontSize: "13px" }}
          >
            Copyright © 2024 | SMA Laboratorium UM
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
