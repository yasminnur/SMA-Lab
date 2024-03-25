import Navbar from "./components/Navbar";
import Index from "./pages/index";
import TestiPage from "./pages/testiPage";
import SambutanPage from "./pages/sambutanPage";
import BeritaPage from "./pages/beritaPage";
import PengumumanPage from "./pages/pengumumanPage";
import PengumumanDetailPage from "./pages/pengumumanDetailPage";
import AgendaPage from "./pages/agendaPage";
import AgendaDetail from "./components/Agenda/agendaDetail";
import TentangPage from "./pages/tentangPage";
import Testi from "./components/Komen";
import Sidebar from "./components/Sidebar";
import Copyright from "./components/Copyright";
import KabarDetail from "./components/Berita/KabarDetail";
import IndexBerita from "./components/Berita/index";
import KabarBerita from "./components/Berita/KabarSekolah";
import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [navbarBackground, setNavbarBackground] = useState("");

  // Fungsi untuk menentukan warna background Navbar berdasarkan lokasi saat ini
  const getNavbarBackground = () => {
    switch (location.pathname) {
      case "/":
        setNavbarBackground("rgba(0, 0, 0, 0.15)");
        break;
      case "/beritaPage":
        setNavbarBackground("black");
        break;
      case "/kabarDetailPage":
        setNavbarBackground("black");
        break;
      case "/agendaPage":
        setNavbarBackground("black");
        break;
      case "/pengumumanPage":
        setNavbarBackground("black");
        break;
      default:
        setNavbarBackground(""); // Warna default
        break;
    }
  };

  useEffect(() => {
    getNavbarBackground();
  }, [location.pathname]);

  // Fungsi untuk menentukan apakah Navbar harus ditampilkan berdasarkan lokasi saat ini
  const shouldShowNavbar = () => {
    // Daftar halaman di mana Navbar harus ditampilkan
    const pagesWithNavbar = [
      "/",
      "/beritaPage",
      "/kabarDetailPage",
      "/agendaPage",
      "/pengumumanPage",
    ];
    return pagesWithNavbar.includes(location.pathname);
  };
  return (
    <>
    <div className="app w-100vw">
        {shouldShowNavbar() && <Navbar background={navbarBackground} />}
        <Routes>
          <Route path="/" Component={Index} />
          <Route path="/testiPage" Component={TestiPage} />
          <Route path="/beritaPage" Component={BeritaPage} />
          <Route path="/agendaPage" Component={AgendaPage} />
          <Route path="/agendaDetailPage" Component={AgendaDetail} />
          <Route path="/sambutanPage" Component={SambutanPage} />
          <Route path="/tentangPage" Component={TentangPage} />
          <Route path="/pengumumanPage" Component={PengumumanPage} />
          <Route
            path="/pengumumanDetailPage"
            Component={PengumumanDetailPage}
          />
          <Route path="/kabarDetailPage" Component={KabarDetail} />
          <Route path="#testi" Component={Testi} />
        </Routes>
        <Copyright />
      </div>
    </>
  );
}

export default App;
