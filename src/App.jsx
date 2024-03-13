import Navbar from "./components/Navbar";
import Index from "./pages/index"
import TestiPage from "./pages/testiPage"
import SambutanPage from "./pages/sambutanPage"
import BeritaPage from "./pages/beritaPage"
import TentangPage from "./pages/tentangPage"
import Testi from "./components/Komen"
// import Sidebar from "./components/Sidebar"
import Copyright from "./components/Copyright"
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {

  return (
    <>
      <div className="app w-100vw">
        
        
        {/* <Index /> */}
        <Navbar />
        <Routes>
        <Route path="/" Component={Index} />
        <Route path="/testiPage" Component={TestiPage} />
        <Route path="/beritaPage" Component={BeritaPage} />
        {/* <Route path="/sidebar" Component={Sidebar} /> */}
        <Route path="/sambutanPage" Component={SambutanPage} />
        <Route path="/tentangPage" Component={TentangPage} />
          <Route path="#testi" Component={Testi} />
         
        </Routes>

        <Copyright />
        {/* <div>
        <Sidebar>
          <Routes>
          <Route path="/sambutanPage" Component={SambutanPage} />
          </Routes>
          </Sidebar>
          <Copyright />
        </div> */}
        
        
        </div>
    </>
  )
}

export default App
