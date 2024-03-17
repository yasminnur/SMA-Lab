import Navbar from "./components/Navbar";
import Index from "./pages/index";
import TestiPage from "./pages/testiPage";
import SambutanPage from "./pages/sambutanPage";
import BeritaPage from "./pages/beritaPage";
import TentangPage from "./pages/tentangPage";
import Testi from "./components/Komen";
import Sidebar from "./components/Sidebar";
import Copyright from "./components/Copyright";
import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // const location = useLocation();

  // const pathsWithNavbar = ['/'];

  // const pathsWithSidebar = ['/testiPage', '/beritaPage', '/sambutanPage', '/tentangPage'];

  // const shouldShowNavbar = pathsWithNavbar.includes(location.pathname);

  // const shouldShowSidebar = pathsWithSidebar.includes(location.pathname);

  return (
    <>
      <div className="app w-100vw">
        {/* <Navbar /> */}
        {/* <Index /> */}
        <Routes>
          <Route path="/" Component={Index} />
          <Route path="/testiPage" Component={TestiPage} />
          <Route path="/beritaPage" Component={BeritaPage} />
          <Route path="/sambutanPage" Component={SambutanPage} />
          <Route path="/tentangPage" Component={TentangPage} />
          <Route path="#testi" Component={Testi} />
        </Routes>

        <Copyright />
{/* {shouldShowNavbar && <Navbar />}
      {shouldShowSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/testiPage" element={<TestiPage />} />
        <Route path="/beritaPage" element={<BeritaPage />} />
        <Route path="/sambutanPage" element={<SambutanPage />} />
        <Route path="/tentangPage" element={<TentangPage />} />
      </Routes> */}
      </div>
    </>
  );
}

export default App;
