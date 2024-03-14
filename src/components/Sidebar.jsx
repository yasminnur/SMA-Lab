import "./css/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidemenu">
        <div className="" style={{ height: "100vh" }}>
          <Link to="/">👈 Kembali ke beranda</Link>

          <ul className="mt-4 list-unstyled">
            <li>
              <Link to="/sambutanPage">Sambutan</Link>
            </li>
            <li>
              <Link to="/tentangPage">Tentang SMA Lab UM</Link>
            </li>
            <li>
              <Link to="#">Struktur Organigram</Link> </li>
            <li>
             <Link to="#">Guru & Karyawan</Link> </li>
            <li>
              <Link to="#">Statistika</Link> </li>
            <li>
              <Link to="#">Logo</Link>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
