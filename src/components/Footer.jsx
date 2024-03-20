import { Row, Col } from "react-bootstrap";
import Copyright from "./Copyright";
import "./css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer w-100">
        {/* <div className="footer-atas "> */}
          <Row className="d-flex">
            <Col xs={12} md={4} className="kiri p-0">
              <div className="logo d-flex align-items-center gap-3">
                <img
                  className="kiri"
                  src="./assets/footer/logo.svg"
                  alt="logo"
                />
                <img
                  className="kanan"
                  src="./assets/footer/logo-text.svg"
                  alt="logo"
                />
              </div>
              <p className="jalan m-0 p-0 mt-4">
                Jl. Bromo No.16, Klojen, Kota Malang, Jawa Timur 65119 Indonesia
              </p>
              <h5 className="m-0 p-0 mt-4">Informasi Kontak</h5>
              <p className="infor m-0 p-0 mt-4">T: (0341) 368639</p>
              <p className="infor m-0 p-0 mt-1">E: smalabum@yahoo.com</p>
            </Col>
            <Col className="tengah d-flex p-0">
              <Col className="kiri w-100">
                <div className="atas d-flex">
                  <Col>
                    <p className="m-0 p-0">Profil Sekolah</p>
                    <p className="m-0 p-0">Informasi</p>
                  </Col>
                  <Col>
                    <p className="m-0 p-0">PPDB 2024</p>
                    <p className="m-0 p-0">Link Terkait</p>
                  </Col>
                </div>
                <div className="bawah mt-5 mt-md-0 text-center text-md-start">
                  <p>OFFICIAL SOCIAL MEDIA</p>
                  <div className="d-flex gap-3 justify-content-center justify-content-md-start">
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
                    <a
                      href="https://www.instagram.com/smalabum/"
                      target="blank"
                    >
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
                    <a
                      href="https://www.youtube.com/@smalabum7934"
                      target="blank"
                    >
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

              <Col className="kanan p-0">
                <a
                  href="https://youtu.be/AsnN3t7JPHU?si=Q1pYgUwhXAv0xLWY"
                  target="blank"
                >
                  <img
                    className="rounded-4"
                    src="./assets/footer/thumbnail.svg"
                    alt=""
                  />
                </a>
              </Col>
            </Col>
          </Row>
        {/* </div> */}

        {/* <Copyright /> */}
        {/* <div className="footer-bawah w-100 p-4 bg-dark">
          <p className="text-center text-light m-0">
            Copyright © 2024 | SMA Laboratorium UM
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
