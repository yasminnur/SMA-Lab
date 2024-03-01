import "./css/tentang.css";
import { Row, Col } from "react-bootstrap";

const tentangKami = () => {
  return (
    <>
      <div className="tentang">
        <div className="atas ">
          <Row className="about">
            <Col className="col kiri" xs={4}>
              <p>Tentang kami</p>
            </Col>
            <Col className="col kanan">
              <p>
                <span className="fw-bold">SMA Laboratorium</span> merupakan
                salah satu sekolah laboratorium yang berada dalam naungan
                Universitas Negeri Malang (d.h. IKIP Negeri Malang).
              </p>
            </Col>
          </Row>

          <div className="visi">
            <p>
              Visi kami menjadi lembaga pendidikan pencetak lulusan unggul yang;
            </p>
            <Row className="">
              <div class="col">
                <div className="overlay">
                  <h1 className="">Beriman & Bertaqwa</h1>
                </div>
                <img
                  className="bg-danger"
                  src="https://plus.unsplash.com/premium_photo-1677619622407-1e9195e82374?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div class="col col-lg-3">
                <div className="overlay">
                  <h1 className="">Berakhlak Mulia</h1>
                </div>
                <img src="./assets/tentang/akhlak.svg" alt="" />
              </div>
              <div class="col col-lg-3">
                <div className="overlay">
                  <h1 className="">Berprestasi</h1>
                </div>
                <img src="./assets/tentang/prestasi.svg" alt="" />
              </div>
            </Row>
          </div>
        </div>

        <div className="bawah">
          <p>Kerjasama Lembaga :</p>
          <div className="logos">
            <div className="logos-slide">
              <img src="./assets/tentang/sponsor1.svg" alt="" />
              <img src="./assets/tentang/sponsor2.svg" alt="" />
              <img src="./assets/tentang/sponsor3.svg" alt="" />
              <img src="./assets/tentang/sponsor4.svg" alt="" />
            </div>
            <div className="logos-slide">
              <img src="./assets/tentang/sponsor1.svg" alt="" />
              <img src="./assets/tentang/sponsor2.svg" alt="" />
              <img src="./assets/tentang/sponsor3.svg" alt="" />
              <img src="./assets/tentang/sponsor4.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default tentangKami;
