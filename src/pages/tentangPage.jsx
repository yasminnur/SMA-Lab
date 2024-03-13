import Sidemenu from "../components/Sidebar";
import "./css/tentangPage.css";
const TentangPage = () => {
  return (
    <>
      <div className="tentangPage d-flex gap-5">
        <div className="col-3">
          <Sidemenu />
        </div>
        <div className="col container ">
          <h3 className=" fw-bolder mb-3">Sejarah SMA Lab UM</h3>
          <img className="mb-4 ms-0 p-0" src="./assets/tentang/sponsor4.svg" alt="" />
          <p className="m-0">
            SMA Laboratorium adalah merupakan salah satu sekolah laboratorium
            yang berada dalam naungan Universitas Negeri Malang (d.h. IKIP
            Negeri Malang). Adapun selain sekolah-sekolah laboratorium meliputi;
            TK Laboratorium, SD Laboratorium, SD Berkebutuhan khusus, SMP
            Laboratorium dan SMA Laboratorium UM. Sekolah-sekolah Laboratorium
            tersebut bertanggung jawab terhadap Rektor Universitas Negeri Malang
            melalui UPT P2LP (Pusat Pengembangan Laboratorium Pendidikan).SMA
            Laboratorium UM berdiri dan mulai beroperasi pada tahun 1994 dengan
            nama SMA IKIP Negeri Malang.
            <br />
            <br />
            Sejak awal berdiri hingga sekarang SMA Laboratorium UM sudah
            dipimpin oleh 6 orang Kepala Sekolah:
            <br />
            <br />
          </p>
          <ul className="list-unstyled fw-semibold">
            <li>Bapak Drs. H.A. Rosyid Al Atok, M.Pd, M.H Tahun 1994 {"–"} 1997</li>
            <li>Bapak Drs. Muhardjito, M.S. Tahun 1997 {"–"} 2003</li>
            <li>Bapak Drs. H. Ridwan Joharmawan, M.Si. Tahun 2003 {"–"} 2012</li>
            <li>Ibu DR. Hj. Muslihati, S.Ag, M.Pd. Tahun 2012 {"–"} 2013</li>
            <li>Bapak DR. Tri Kuncoro, S.T, M.Pd. Tahun 2013 {"–"} 2015</li>
            <li>Ibu Rosdiana Amini, M.Pd. Tahun 2015 {"–"} Sekarang.</li>
          </ul>

          <div className="visimisi">
            <h3 className="fw-bolder">Visi & Misi</h3>
            <h5 className="fw-bold m-0">Visi</h5>
            <p className="m-0">
              Sebagai Sekolah Unggul Pencetak Lulusan yang Beriman, Bertaqwa,
              Berakhlaq Mulia & Berprestasi
            </p>

            <h5 className="fw-bold mt-3 mb-0">Misi</h5>
            <ul className="ps-4">
              <li style={{listStyleType :"decimal"}}>Menumbuhkan penghayatan terhadap ajaran agama dan budaya bangsa;</li>
              <li style={{listStyleType :"decimal"}}>Menumbuhkan pengamalan ajaran agama pada kehidupan nyata;</li>
              <li style={{listStyleType :"decimal"}}>Menumbuhkan pribadi yang bertanggung jawab terhadap tugas;</li>
              <li style={{listStyleType :"decimal"}}>Menumbuhkan budaya membaca, menulis dan menghasilkan karya;</li>
              <li style={{listStyleType :"decimal"}}>Mengembangkan keterampilan berkomunikasi yang baik dengan menggunakan bahasa Indonesia yang benar dan santun dan atau bahasa Inggris;</li>
              <li style={{listStyleType :"decimal"}}>Mengembangkan keterampilan penerapan teknologi informasi dan komunikasi dalam proses pembelajaran dan pengelolaan sekolah;</li>
              <li style={{listStyleType :"decimal"}}>Menumbuhkan semangat juara dan kemandirian belajar;</li>
              <li style={{listStyleType :"decimal"}}>Menumbuhkan semangat juara pada bidang seni dan olahraga;</li>
              <li style={{listStyleType :"decimal"}}>Menumbuhkan pribadi yang memiliki kepedulian terhadap lingkungan sosial;</li>
              <li style={{listStyleType :"decimal"}}>Menumbuhkan semangat berempati terhadap permasalahan lingkungan sosial;</li>
              <li style={{listStyleType :"decimal"}}>Menumbuhkan pribadi yang memiliki kepedulian terhadap perkembangan, kemajuan dan keberlangsungan sekolah Mewujudkan manajemen sekolah yang bersih dan akuntabel</li>
            </ul>
            <p className="m-0"></p>
          </div>

          <div className="pageControl mt-5 d-flex justify-content-between align-items-center">
            <div className="prevPage d-flex align-items-center gap-2">
              <img
                src="./assets/kabar/arrow-biru.svg"
                alt=""
                style={{ width: "20px", transform: "rotate(180deg)" }}
              />
              <p className="m-0">Sebelumya</p>
            </div>
            <div className="nextPage d-flex align-items-center gap-2">
              <p className="m-0">Berikutnya</p>
              <img
                src="./assets/kabar/arrow-biru.svg"
                alt=""
                style={{ width: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TentangPage;
