import Sidemenu from "../components/Sidebar";
import "./css/sambutanPage.css";
import { Link } from 'react-router-dom';

const sambutanPage = () => {
  return (
    <>
      <div className="sambutanPage d-flex gap-5">
        <div className="col-3">
          <Sidemenu />
        </div>
        <div className="col container" style={{ height: "100vh" }}>
          <h3 className=" fw-bolder mb-4">Kepala Sekolah SMA Lab UM</h3>
          <p className=" fw-normal">
            Salam budaya,
            <br />
            Puji syukur ke hadirat Allah swt kami dapat hadir untuk turut
            mencerdaskan kehidupan bangsa. Sebagaimana moto kami MAPRAJNA WANGCA
            APATYA (mencerdaskan anak bangsa), dengan bangga kami bertekad
            memberikan pelayanan pendidikan dengan penuh dedikasi, transparan,
            komunikatif, edukatif dan berkarakter Indonesia.
            <br />
            <br />
            Informasi yang kami sajikan dalam web ini merupakan ajang bagi kami
            untuk mempublikasikan hasil karya segenap civitas akademika SMA
            Laboratorium UM. Selain itu, beberapa pengetahuan umum, pembelajaran
            online, forum interaktif , dan informasi kegiatan sekolah dapat
            dinikmati dalam rubrik-rubrik dan kolom-kolom web ini.
            <br />
            <br />
            Semoga dengan layanan ini kualitas pembelajaran dan komunikasi dapat
            berjalan dengan lancar dan mencapai sasaran. Khususnya dalam
            mengaktulisasikan Visi sekolah terwujudnya sekolah yang memiliki
            civitas akademika yang beriman, bertakwa, berakhlak mulia,
            berprestasi akademik dan nonakademik dan berkepedulian sosial.
          </p>

          <div className="nextPage mt-5 d-flex align-items-center gap-2">
            <Link className="m-0 fw-medium text-decoration-none" to="/tentangPage">Berikutnya</Link>
            <img
              src="./assets/kabar/arrow-biru.svg"
              alt=""
              style={{ width: "20px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default sambutanPage;
