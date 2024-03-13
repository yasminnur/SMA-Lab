import "./css/beritaPage.css";
import Footer from "../components/Footer"
import { Row, Col } from "react-bootstrap";

const beritaPage = () => {
    return (
        <>
            <div>
          <div className="beritaPage">
            
        <div className="navMenu"></div>

        <div className="headline">
          <div className="d-flex align-items-end mb-3">
            <Col xs={8} className="m-0 p-0 d-flex justify-content-start">
              <h1 className="p-0 m-0 fw-bolder">Berita.</h1>
            </Col>
            <Col className="m-0 p-0 d-flex justify-content-end">
              <p className="d-flex p-0 m-0 fw-semibold text-nowrap">
                SMA Laboratorium UM
              </p>
            </Col>
          </div>
          <div className="position-relative">
            <img
              src="./assets/BeritaPage/headline.svg"
              className="w-100 rounded-4"
              alt=""
            />
            <div className="float-card position-absolute bg-light rounded-3 p-3">
              <h5 className="w-100 d-inline-block mb-3">KABAR SEKOLAH</h5>
              <h3 className="fw-bold mb-3">
                Antusiasme Siswa Kelas XII Sambut Ujian Praktik
              </h3>
              <div className="ket d-flex gap-1 m-0 mb-1 mb-md-2 ">
                <p className="p-0 m-0">Admin</p>
                <div
                  className="circle rounded-circle bg-dark"
                  style={{
                    width: "4px",
                    height: "4px",
                    marginTop: "8px",
                  }}
                ></div>
                <p className="p-0 m-0">05 Mar, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* INFO TERKINI */}
        <div className="info-terkini mt-5 pt-4 pb-5 border-top border-bottom border-dark">
          <h4 className="mb-4">Info terkini</h4>
          <div className="d-flex gap-4">
            <Col md={7}>
              <img
                src="./assets/BeritaPage/thumbnail1.svg"
                alt=""
                className="w-100 rounded-3 mb-3"
              />
              <h5 className="w-100 d-inline-block mb-3">KABAR SEKOLAH</h5>
              <h3 className="fw-bold">
                Antusiasme Siswa Kelas XII Sambut Ujian Praktik
              </h3>
              <p className=" fw-light">
                Pada tanggal 15 Januari sampai 6 Februari 2024, SMA Lab UM
                menggelar ujian praktik untuk siswa kelas XII. Ujian ini
                terintegrasi dalam serangkaian ujian sekolah yang bertujuan
                untuk mengevaluasi kemampuan siswa dalam menerapkan pengetahuan
                secara langsung dalam suatu mata pelajaran melalui praktik.
                Ujian praktik dilakukan pada jam reguler untuk mata pelajaran
                Agama serta Pendidi...
              </p>
              <div className="ket d-flex gap-1">
                <p className="p-0 m-0">Admin</p>
                <div
                  className="circle rounded-circle bg-dark"
                  style={{
                    width: "4px",
                    height: "4px",
                    marginTop: "8px",
                  }}
                ></div>
                <p className="p-0 m-0">05 Mar, 2024</p>
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <img
                  src="./assets/BeritaPage/thumbnail2.svg"
                  alt=""
                  className="w-100 rounded-3 mb-3"
                />
                <h5 className="w-100 d-inline-block mb-2">KABAR SEKOLAH</h5>
                <h3 className="fw-bold title-kanan">
                  Peringatan Isra’ Mi’raj Tingkatkan Kepribadian
                </h3>
                <p className=" fw-light">
                  Peristiwa Isra’ Mi’raj memiliki arti penting bagi pembinaan
                  keperibadian manusia, karena dalam peristiwa Isra’
                  Mi’raj tersebut Nabi menerima perintah shalat lima waktu dalam
                  sehari. Shalat inilah yang merupakan...
                </p>
                <div className="ket d-flex gap-1">
                  <p className="p-0 m-0">Admin</p>
                  <div
                    className="circle rounded-circle bg-dark"
                    style={{
                      width: "4px",
                      height: "4px",
                      marginTop: "8px",
                    }}
                  ></div>
                  <p className="p-0 m-0">05 Mar, 2024</p>
                </div>
              </div>

              <div className="unconnect d-flex gap-3">
                <Col className="image position-relative rounded-2 d-flex justify-content-center align-items-center">
                  <div className="float position-absolute">
                    <img src="./assets/BeritaPage/nothing.svg" alt="" />
                  </div>
                </Col>

                <Col>
                  <h5 className="w-100 d-inline-block mb-3">ARTIKEL</h5>
                  <h3 className="fw-bold title-kanan">
                    Ramadhan bulan penuh berkah
                  </h3>
                  <div className="ket d-flex gap-1">
                    <p className="p-0 m-0">Admin</p>
                    <div
                      className="circle rounded-circle bg-dark"
                      style={{
                        width: "4px",
                        height: "4px",
                        marginTop: "8px",
                      }}
                    ></div>
                    <p className="p-0 m-0">05 Mar, 2024</p>
                  </div>
                </Col>
              </div>
            </Col>
          </div>
        </div>

        {/* BERITA LAINNYA */}
        <div className="berita-lainnya pt-4 pb-5 border-top border-bottom border-dark">
          <h4 className="mb-4">Info terkini</h4>
          <div className="d-flex gap-3">
            <Col>
              <img
                src="./assets/BeritaPage/berita1.svg"
                alt=""
                className="w-100 rounded-3 mb-3"
              />
              <h5 className="w-100 d-inline-block mb-3">KABAR SEKOLAH</h5>
              <h3 className="fw-bold title-kanan mb-3">
                Jumat Bersih, Bentuk Tanggung Jawab terhadap Lingkungan Sekitar
              </h3>
              <div className="ket d-flex gap-1">
                <p className="p-0 m-0">Itsnaini Ningtiyas</p>
                <div
                  className="circle rounded-circle bg-dark"
                  style={{
                    width: "4px",
                    height: "4px",
                    marginTop: "8px",
                  }}
                ></div>
                <p className="p-0 m-0">19 Feb, 2024</p>
              </div>
            </Col>
            <Col>
              <img
                src="./assets/BeritaPage/berita2.svg"
                alt=""
                className="w-100 rounded-3 mb-3"
              />
              <h5 className="w-100 d-inline-block mb-3">KABAR SEKOLAH</h5>
              <h3 className="fw-bold title-kanan mb-3">
                Outdoor Learning Tumbuhkan Semangat Wirausaha
              </h3>
              <div className="ket d-flex gap-1">
                <p className="p-0 m-0">Dewi H.S</p>
                <div
                  className="circle rounded-circle bg-dark"
                  style={{
                    width: "4px",
                    height: "4px",
                    marginTop: "8px",
                  }}
                ></div>
                <p className="p-0 m-0">19 Feb, 2024</p>
              </div>
            </Col>
            <Col>
              <img
                src="./assets/BeritaPage/berita3.svg"
                alt=""
                className="w-100 rounded-3 mb-3"
              />
              <h5 className="w-100 d-inline-block mb-3">KABAR SEKOLAH</h5>
              <h3 className="fw-bold title-kanan mb-3">
                Program Roots, Mencegah dan Mengurangi Perundungan di Lingkungan
                Sekolah
              </h3>
              <div className="ket d-flex gap-1">
                <p className="p-0 m-0">Admin</p>
                <div
                  className="circle rounded-circle bg-dark"
                  style={{
                    width: "4px",
                    height: "4px",
                    marginTop: "8px",
                  }}
                ></div>
                <p className="p-0 m-0">19 Feb, 2024</p>
              </div>
            </Col>
            <Col>
              <img
                src="./assets/BeritaPage/berita4.svg"
                alt=""
                className="w-100 rounded-3 mb-3"
              />
              <h5 className="w-100 d-inline-block mb-3">KABAR SEKOLAH</h5>
              <h3 className="fw-bold title-kanan mb-3">
                Siswa Milenial dengan Kreatifitas Tanpa Batas
              </h3>
              <div className="ket d-flex gap-1">
                <p className="p-0 m-0">Dewi H.S</p>
                <div
                  className="circle rounded-circle bg-dark"
                  style={{
                    width: "4px",
                    height: "4px",
                    marginTop: "8px",
                  }}
                ></div>
                <p className="p-0 m-0">19 Feb, 2024</p>
              </div>
            </Col>
          </div>
        </div>

        {/* WHATSAPP CHANNEL */}
        <div className="whatsapp-channel pt-4 pb-5 border-bottom border-dark">
          <h4 className="mb-4">Whatsapp Channel</h4>
          <div className="d-flex gap-3">
            <Col>
              <div className="card-postt w-100">
                <div className="position-relative" style={{ height: "350px" }}>
                  <img
                    src="./assets/sosmed/sosmed1.svg"
                    className="instagram-post w-100 h-100 rounded-3"
                    style={{ objectFit: "cover" }}
                    alt="instagram post"
                  />
                  <div className="overlay position-absolute d-flex gap-2 bottom-0 left-0 py-1 px-2">
                    <img src="./assets/sosmed/videoIcon.svg" alt="" />
                    <p className="m-0 text-light">0:29</p>
                  </div>
                </div>
                <div className="desc-instagram">
                  <p className="p-0 m-0 mt-2 mt-md-3 fw-bold">
                    {"Mau Tau gag kenapa nama sekolah Kami SMA Laboratorium?🤔".substring(
                      0,
                      55
                    )}
                    ...
                    <span
                      className="text-decoration-underline fw-medium"
                      style={{ color: "#2F80ED" }}
                    >
                      Lihat selengkapnya
                    </span>
                  </p>
                  <div className="account d-flex align-items-center gap-2 mt-3">
                    <img src="./assets/sosmed/whatsapp.svg" alt="instagram" />
                    <a
                      className="p-0 m-0 text-decoration-none text-dark"
                      href="https://www.instagram.com/smalabum/"
                      target="blank"
                    >
                      SMA LABORATORIUM UM OFFICIAL
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card-post w-100">
                <div className="position-relative" style={{ height: "350px" }}>
                  <img
                    src="./assets/sosmed/sosmed2.svg"
                    className="instagram-post w-100 h-100 rounded-3"
                    style={{ objectFit: "cover" }}
                    alt="instagram post"
                  />
                  <div className="overlay position-absolute d-flex gap-2 bottom-0 left-0 py-1 px-2">
                    <img src="./assets/sosmed/videoIcon.svg" alt="" />
                    <p className="m-0 text-light">0:29</p>
                  </div>
                </div>
                <div className="desc-instagram">
                  <p className="p-0 m-0 mt-2 mt-md-3 fw-bold">
                    {"Jum’at Bersih SMA Laboratorium UM 23 Februari 2024".substring(
                      0,
                      55
                    )}
                    ...
                    <span
                      className="text-decoration-underline fw-medium"
                      style={{ color: "#2F80ED" }}
                    >
                      Lihat selengkapnya
                    </span>
                  </p>
                  <div className="account d-flex align-items-center gap-2 mt-3">
                    <img src="./assets/sosmed/whatsapp.svg" alt="instagram" />
                    <a
                      className="p-0 m-0 text-decoration-none text-dark"
                      href="https://www.instagram.com/smalabum/"
                      target="blank"
                    >
                      SMA LABORATORIUM UM OFFICIAL
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card-post w-100">
                <div className="position-relative" style={{ height: "350px" }}>
                  <img
                    src="./assets/sosmed/sosmed3.svg"
                    className="instagram-post w-100 h-100 rounded-3"
                    style={{ objectFit: "cover" }}
                    alt="instagram post"
                  />
                  <div className="overlay position-absolute d-flex gap-2 bottom-0 left-0 py-1 px-2">
                    <img src="./assets/sosmed/videoIcon.svg" alt="" />
                    <p className="m-0 text-light">0:29</p>
                  </div>
                </div>
                <div className="desc-instagram">
                  <p className="p-0 m-0 mt-2 mt-md-3 fw-bold">
                    {"“Recharge Energy To Be Stronge Kegiatan Kakak Kelas XII setelah".substring(
                      0,
                      55
                    )}
                    ...
                    <span
                      className="text-decoration-underline fw-medium"
                      style={{ color: "#2F80ED" }}
                    >
                      Lihat selengkapnya
                    </span>
                  </p>
                  <div className="account d-flex align-items-center gap-2 mt-3">
                    <img src="./assets/sosmed/whatsapp.svg" alt="instagram" />
                    <a
                      className="p-0 m-0 text-decoration-none text-dark"
                      href="https://www.instagram.com/smalabum/"
                      target="blank"
                    >
                      SMA LABORATORIUM UM OFFICIAL
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card-post w-100">
                <div className="position-relative" style={{ height: "350px" }}>
                  <img
                    src="./assets/sosmed/sosmed4.svg"
                    className="instagram-post w-100 h-100 rounded-3"
                    style={{ objectFit: "cover" }}
                    alt="instagram post"
                  />
                  <div className="overlay position-absolute d-flex gap-2 bottom-0 left-0 py-1 px-2">
                    <img src="./assets/sosmed/videoIcon.svg" alt="" />
                    <p className="m-0 text-light">0:29</p>
                  </div>
                </div>
                <div className="desc-instagram">
                  <p className="p-0 m-0 mt-2 mt-md-3 fw-bold">
                    {"✅Mau Tau Cara Bikin Batik di Giriloyo?✅Mau Belajar Asyik".substring(
                      0,
                      55
                    )}
                    ...
                    <span
                      className="text-decoration-underline fw-medium"
                      style={{ color: "#2F80ED" }}
                    >
                      Lihat selengkapnya
                    </span>
                  </p>
                  <div className="account d-flex align-items-center gap-2 mt-3">
                    <img src="./assets/sosmed/whatsapp.svg" alt="instagram" />
                    <a
                      className="p-0 m-0 text-decoration-none text-dark"
                      href="https://www.instagram.com/smalabum/"
                      target="blank"
                    >
                      SMA LABORATORIUM UM OFFICIAL
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </div>
              </div>
              
                </div>
              <Footer />
                </div>
    </>
  );
};

export default beritaPage;
