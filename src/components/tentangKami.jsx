import "./css/tentang.css";
import { Row, Col } from "react-bootstrap";

const tentangKami = () => {
  return (
    <>
      <div className="tentang">
        <div className="atas ">
          <Row className="about p-0">
            <Col className="col kiri p-0" xs={4}>
              <p className="text-nowrap">Tentang kami</p>
            </Col>
            <Col className="col kanan p-0">
              <p>
                <span className="fw-bold">SMA Laboratorium</span> merupakan
                salah satu sekolah laboratorium yang berada dalam naungan
                Universitas Negeri Malang (d.h. IKIP Negeri Malang).
              </p>
            </Col>
          </Row>

          <div className="visi">
            <p className="">
              Visi kami menjadi lembaga pendidikan pencetak lulusan unggul yang;
            </p>
            <Row className="p-0 m-0 w-100">
              <div class="col col-12 col-md-auto">
                <div className="overlay">
                  <h1 className="">Beriman & Bertaqwa</h1>
                </div>
                <img
                  className="bg-danger w-100"
                  src="./assets/tentang/beriman.svg"
                  alt=""
                />
              </div>
              <div class="col col-12 col-md-3">
                <div className="overlay">
                  <h1 className="">Berakhlak Mulia</h1>
                </div>
                <img className="w-100" src="./assets/tentang/akhlak.svg" alt="" />
              </div>
              <div class="col col-12 col-md-3">
                <div className="overlay">
                  <h1 className="">Berprestasi</h1>
                </div>
                <img className="w-100" src="./assets/tentang/prestasi.svg" alt="" />
              </div>
            </Row>
          </div>
        </div>

        <div className="bawah">
          <p className="m-0 mb-3">Kerjasama Lembaga :</p>
          <div className="logos w-100">
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
