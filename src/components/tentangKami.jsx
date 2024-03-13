import "./css/tentang.css";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";

const tentangKami = () => {
  useEffect(() => {
    const lastChecked = localStorage.getItem("lastChecked");
    if (lastChecked) {
      document.getElementById(lastChecked).checked = true;
    } else {
      document.getElementById("c1").checked = true; // Set default to c1
    }
  }, []);

  const handleChange = (id) => {
    localStorage.setItem("lastChecked", id);
  };

  return (
    <>
      <div className="tentang">
        <div className="atas">
          <Row className="about p-0 m-0">
            <Col className="col kiri p-0 m-0" xs={4}>
              <p className="text-nowrap m-0">Tentang kami</p>
            </Col>
            <Col className="col kanan p-0 m-0">
              <p>
                <span className="fw-bold">SMA Laboratorium</span> merupakan
                salah satu sekolah laboratorium yang berada dalam naungan
                Universitas Negeri Malang (d.h. IKIP Negeri Malang).
              </p>
            </Col>
          </Row>

          <div className="visi">
            <p className="m-0 p-0 mb-3 visikami">
              Visi kami menjadi lembaga pendidikan pencetak lulusan unggul yang;
            </p>

            <div className="wrapper-visi m-0 p-0">
              <div className="container-visi m-0 p-0 gap-4 w-100">
                <input
                  type="radio"
                  name="slide"
                  id="c1"
                  onChange={() => handleChange("c1")}
                  checked
                />
                <label for="c1" className="card-visi p-0 m-0 position-relative">
                  <div class="row">
                    <div className="overlay">
                      <h1 className="fw-semibold">
                        Beriman & <br /> Bertaqwa
                      </h1>
                    </div>
                  </div>
                </label>
                <input type="radio" name="slide" id="c2" checked />
                <label for="c2" className="card-visi p-0 m-0 position-relative">
                  <div class="row">
                    <div className="overlay">
                      <h1 className="fw-semibold">
                        Berakhlak <br /> Mulia
                      </h1>
                    </div>
                  </div>
                </label>
                <input type="radio" name="slide" id="c3" checked />
                <label for="c3" className="card-visi p-0 m-0 position-relative">
                  <div class="row">
                    <div className="overlay">
                      <h1 className="fw-semibold">Berprestasi</h1>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="bawah mt-5">
          <p className="m-0 mb-3 fw-semibold">Kerjasama Lembaga :</p>
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
