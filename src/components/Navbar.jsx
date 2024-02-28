import React, { useEffect, useState } from "react";
import "./css/navbar.css";

const Navbar = () => {
  const [menuText, setMenuText] = useState("Menu");
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [profilMenu, setProfilMenu] = useState(false);
  const [logoSrc, setLogoSrc] = useState("./assets/navbar/logoColor.svg");
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(25px)",
  });

  const profilClick = () => {
    setProfilMenu(!profilMenu);
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
      <div className="navbar w-100" style={navbarStyle}>
        <div className="navbarContent w-100 d-flex align-items-center justify-content-between">
          <div className="d-flex me-auto gap-3">
            <img src={logoSrc} alt="" />
            <img src="./assets/navbar/logoText.svg" alt="" />
          </div>
          <div className="buttonMenu d-flex">
            <img src="./assets/navbar/search.svg" alt="" />
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
            <ul>
              <li onClick={profilClick}>Profil Sekolah</li>
              <li>Informasi</li>
              <li>Organisasi</li>
              <li>Galeri</li>
              <li>Ekstrakurikuller</li>
              <li>Inovasi Menagajar</li>
            </ul>

            {profilMenu && (
              <div className="profilMenu">
                <ul>
                  <li>
                    Sambutan
                    <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    Tentang SMA Lab UM
                    <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    Struktur Organigram
                     <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    Guru & Karyawan
                     <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    Statistika
                     <i class="bi bi-chevron-right"></i>
                  </li>
                  <li>
                    Logo
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
