import "./css/testi.css";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";

const testiPage = () => {
  const thumbnailSrc = "./assets/footer/thumbnail.svg";
  const linkUrl = "https://youtu.be/AsnN3t7JPHU?si=Q1pYgUwhXAv0xLWY";
    // const location = useLocation();
    // const testi = location.state ? location.state.testi : null;
    
    // if (!testi) {
    //   return <p>Tidak ada komentar yang tersedia.</p>;
    // }
  return (
    <>
      <div className="testiPage">
        <div className="header position-relative">
          <img
            src="./assets/hero/bg-3.svg"
            alt=""
            className="position-relative"
          />
          <div className="overlay position-absolute top-0 left-0 w-100 h-100"></div>
          <h1 className="position-absolute fw-bolder text-light">TESTIMONI</h1>
        </div>

        <div className="container mt-4">
          <div className="navTesti">
            <div className="back d-inline-block w-100">
              <a href="/" className="m-0">
                👈 Kembali ke beranda
              </a>
            </div>

            <div className="pageNum mb-5 align-items-center d-flex justify-content-between">
              <p className="w-100 m-0">Cerita mereka tentang SMA Lab UM</p>
              <div className="num d-flex gap-1 m-0">
                <p className="m-0 p-0">01</p>
                <p className="m-0 p-0">/</p>
                <p className="m-0 p-0">03</p>
              </div>
            </div>

            <div className="testi">
                {/* <p>{testi.comment}</p> */}
              <p>
                Kami memilih menyekolahkan anak kami Shabrina Witjaksono di SMA
                Laboratorium UM Malang setelah mendapat referensi dari kakak
                kami yang anaknya juga alumni sekolah ini. Selama anak kami
                menempuh pendidikan di sekolah ini, yang kami rasakan adalah
                semakin meningkatnya kepercayaan diri, kemandirian dan tanggung
                jawabnya. Jajaran guru dan staf SMA Laboratorium memberikan
                perhatian secara intensif dan komunikatif kepada siswa dan wali
                siswa. Selain itu, sarana dan prasarana sekolah juga tersedia
                sesuai kebutuhan dan membuat suasana pembelajaran semakin
                nyaman. Besar harapan kami, SMA Laboratorium UM Malang semakin
                berkembang dan sukses mendidik anak-anak yang berakhlak mulia,
                berkarakter dan bertanggung jawab pada masa depannya dan masa
                depan negara ini.
              </p>

              <div className="sender d-flex align-items-center gap-3 mt-4 mt-md-5">
                <img
                  className="rounded-circle"
                  src="./assets/komen/person1.svg"
                  alt=""
                />
                <div className="nameContainer">
                  <p className="name w-100 m-0 p-0 fw-semibold">
                    Tanto Witjaksono
                  </p>
                  <p className="prof w-100 m-0 p-0">
                    Wali dari Shabrina Witjaksono / XII MIPA-3
                  </p>
                </div>
              </div>

              <div className="nextPage mt-5 border-1 border-top border-black py-3 d-flex align-items-center justify-content-between">
                <p className="w-100">Selanjutnya</p>
                <img
                  src="./assets/kabar/arrow-biru.svg"
                  alt=""
                  style={{ width: "25px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer  thumbnailSrc={thumbnailSrc}
        linkUrl={linkUrl} />
    </>
  );
};

export default testiPage;
