import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

const Navbar = () => {
  const [menuText, setMenuText] = useState("Menu");
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [logoSrc, setLogoSrc] = useState("./assets/navbar/logoColor.svg");
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(25px)",
    // width: '100%'
  });

  const [activeMenu, setActiveMenu] = useState({
    profil: false,
    informasi: false,
    organisasi: false,
    galeri: false,
    ekstrakurikuler: false,
    inovasi: false,
  });

  const handleClickList = (menu) => {
    const updatedActiveMenu = Object.keys(activeMenu).reduce((acc, key) => {
      acc[key] = key === menu ? !activeMenu[key] : false;
      return acc;
    }, {});
    setActiveMenu(updatedActiveMenu);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setIsActive(!isActive);

    const hamburger = document.querySelector("#hamburger");
    hamburger.classList.toggle("hamburger-active");

    if (isActive) {
      setLogoSrc("./assets/navbar/logoColor.svg");
      setNavbarStyle({
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(25px)",
      });
    } else {
      setLogoSrc("./assets/navbar/logoWhite.svg");
      setNavbarStyle({
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(25px)",
      });
    }

    if (menuText === "Menu") {
      setMenuText("Kembali");
    } else {
      setMenuText("Menu");
    }
  };

  return (
    <>
      <div className="navbar w-100 z-3" style={navbarStyle}>
        <div className="navbarContent w-100 d-flex align-items-center justify-content-between">
          <div className="d-flex me-auto gap-3">
            <img className="logoSMA" src={logoSrc} alt="" />
            <img
              className="text-logo"
              src="./assets/navbar/logoText.svg"
              alt=""
            />
          </div>
          <div className="buttonMenu d-flex">
            <button className="PPDB fw-bold">PPDB</button>
            <button
              className={`Menu ${isActive ? "bg-light text-dark" : ""}`}
              onClick={handleMenuClick}
            >
              {menuText}
              <div
                id="hamburger"
                name="hamburger"
                type="button"
                className={`hamburger ${
                  isActive ? "border-dark hamburger-active" : "notActive"
                }`}
              >
                <span
                  className={`hamburger-line ${isActive ? "bg-dark" : ""}`}
                  style={{
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease-in-out",
                    transformOrigin: "top left",
                    marginBottom: "3px",
                  }}
                ></span>
                <span
                  className={`hamburger-line ${isActive ? "bg-dark" : ""}`}
                  style={{
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease-in-out",
                    marginBottom: "3px",
                  }}
                ></span>
                <span
                  className={`hamburger-line ${isActive ? "bg-dark" : ""}`}
                  style={{
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease-in-out",
                    transformOrigin: "bottom left",
                  }}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="navbarActive">
            <ul className="mainMenu">
              <li
                onClick={() => handleClickList("profil")}
                className={activeMenu.profil ? "listActive" : "listNotActive"}
              >
                Profil Sekolah
              </li>
              <div className="profilContainer">
                {activeMenu.profil && (
                  <div className="profilMenuPhone submenu">
                    <ul>
                      <li>
                        <Link
                          to="/sambutanPage"
                          className="text-decoration-none text-light"
                        >
                          Sambutan
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link
                          to="/tentangPage"
                          className="text-decoration-none text-light"
                        >
                          Tentang SMA Lab UM
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="text-decoration-none text-light"
                        >
                          Struktur Organigram
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="text-decoration-none text-light"
                        >
                          Guru & Karyawan
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="text-decoration-none text-light"
                        >
                          Statistika
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="text-decoration-none text-light"
                        >
                          Logo
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <li
                onClick={() => handleClickList("informasi")}
                className={
                  activeMenu.informasi ? "listActive" : "listNotActive"
                }
              >
                Informasi
              </li>
              <div className="profilContainer">
                {activeMenu.informasi && (
                  <div className="profilMenuPhone submenu">
                    <ul>
                      <li>
                        <Link
                          to="/beritaPage"
                          className="text-decoration-none text-light"
                        >
                          Berita
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="text-decoration-none text-light"
                        >
                          Agenda
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="text-decoration-none text-light"
                        >
                          Pengumuman
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <li
                onClick={() => handleClickList("organisasi")}
                className={
                  activeMenu.organisasi ? "listActive" : "listNotActive"
                }
              >
                Organisasi
              </li>
              <div className="profilContainer">
                {activeMenu.organisasi && (
                  <div className="profilMenuPhone submenu">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          className="text-decoration-none text-light"
                        >
                          OSIS
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="text-decoration-none text-light"
                        >
                          Pramuka
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="text-decoration-none text-light"
                        >
                          PMR
                        </Link>
                        <i class="bi bi-chevron-right"></i>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <li
                onClick={() => handleClickList("galeri")}
                className={activeMenu.galeri ? "listActive" : "listNotActive"}
              >
                Galeri
              </li>
              <li
                onClick={() => handleClickList("ekstrakurikuler")}
                className={
                  activeMenu.ekstrakurikuler ? "listActive" : "listNotActive"
                }
              >
                Ekstrakurikuler
              </li>
              <li
                onClick={() => handleClickList("inovasi")}
                className={activeMenu.inovasi ? "listActive" : "listNotActive"}
              >
                Inovasi Menagajar
              </li>
            </ul>

            {activeMenu.profil && (
              <div className="profilMenuSamping">
                <ul>
                  <li>
                    <Link
                      to="/sambutanPage"
                      className="text-decoration-none text-light"
                    >
                      Sambutan
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    <Link
                      to="/tentangPage"
                      className="text-decoration-none text-light"
                    >
                      Tentang SMA Lab UM
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    <Link to="#" className="text-decoration-none text-light">
                      Struktur Organigram
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    <Link to="#" className="text-decoration-none text-light">
                      Guru & Karyawan
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    <Link to="#" className="text-decoration-none text-light">
                      Statistika
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    <Link to="#" className="text-decoration-none text-light">
                      Logo
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                </ul>
              </div>
            )}

            {activeMenu.informasi && (
              <div className="profilMenuSamping">
                <ul>
                  <li>
                    <Link to="/beritaPage" className="text-decoration-none text-light">
                      Berita
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    <Link to="#" className="text-decoration-none text-light">
                      Agenda
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    <Link to="#" className="text-decoration-none text-light">
                      Pengumuman
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                </ul>
              </div>
            )}

            {activeMenu.organisasi && (
              <div className="profilMenuSamping">
                <ul>
                  <li>
                    <Link to="#" className="text-decoration-none text-light">
                      OSIS
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    <Link to="#" className="text-decoration-none text-light">
                      Pramuka
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    <Link to="#" className="text-decoration-none text-light">
                      PMR
                    </Link>
                    <i class="bi bi-chevron-right"></i>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
