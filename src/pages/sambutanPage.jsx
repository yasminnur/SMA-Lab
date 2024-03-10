import Copyright from "../components/Copyright"
const sambutanPage = () => {
  return (
      <>
          <div className="sambutanPage bg-warning" >
              <div className="container" style={{height: "100vh", }}>
      <h3 className="fw-bold">Kepala Sekolah SMA Lab UM</h3>
      <p>
              Salam budaya,
              <br />
              Puji syukur ke hadirat Allah swt kami dapat hadir untuk
        turut mencerdaskan kehidupan bangsa. Sebagaimana moto kami MAPRAJNA
        WANGCA APATYA (mencerdaskan anak bangsa), dengan bangga kami bertekad
        memberikan pelayanan pendidikan dengan penuh dedikasi, transparan,
              komunikatif, edukatif dan berkarakter Indonesia.
              <br />
              <br />
              Informasi yang kami
        sajikan dalam web ini merupakan ajang bagi kami untuk mempublikasikan
        hasil karya segenap civitas akademika SMA Laboratorium UM. Selain itu,
        beberapa pengetahuan umum, pembelajaran online, forum interaktif , dan
        informasi kegiatan sekolah dapat dinikmati dalam rubrik-rubrik dan
              kolom-kolom web ini.
              <br />
              <br />
              Semoga dengan layanan ini kualitas pembelajaran dan
        komunikasi dapat berjalan dengan lancar dan mencapai sasaran. Khususnya
        dalam mengaktulisasikan Visi sekolah terwujudnya sekolah yang memiliki
        civitas akademika yang beriman, bertakwa, berakhlak mulia, berprestasi
        akademik dan nonakademik dan berkepedulian sosial.
              </p>

              <div className="nextPage mt-5  py-3 d-flex align-items-center justify-content-between">
                <p className="w-100">Berikutnya</p>
                <img
                  src="./assets/kabar/arrow-biru.svg"
                  alt=""
                  style={{ width: "25px" }}
                />
                  </div>
              </div>
              
              <Copyright />
              </div>
    </>
  );
};

export default sambutanPage;
