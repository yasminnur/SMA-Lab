import "./css/sidebar.css";
import React, { useState } from "react";

const Sidebar = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleSidebar = () => {
    setIsExpanded(!isExpanded);
    };
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    // =======================================
    const [dropdownStates, setDropdownStates] = useState({});
    const toggleDropdown = (index) => {
      setDropdownStates((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    };
  
    const mainStyle = {
      marginLeft: isOpen ? "230px" : "69px",
      // transition: "all 0.5s",
      height: "100vh", 
    };
  return (
    <>
      {/* <div className="sidebarContainer"> */}
      <div className="wrapper">
              {/* <aside id="sidebar" className={isExpanded ? "expand" : ""}> */}
              <aside id="sidebar" className={`position-relative ${isExpanded ? "expand" : ""}`}>

                  <div className=" d-flex ">
                    
                      <button className="gridd position-absolute" id="toggle-btn" type="button" onClick={handleToggleSidebar}>
                          {/* <b></b>
                          <b></b> */}
              <i class="lni lni-grid-alt"></i>
                      </button>
                      <div className="bulet1 position-absolute text-black"></div>
                      <div className="bulet2 position-absolute text-black"></div>
            <div className="sidebar-logo">
              <a href="#">👈 Kembali ke beranda</a>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                {/* <i class="lni lni-protection"></i> */}
                <span>Sambutan</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                {/* <i class="lni lni-agenda"></i> */}
                <span>Tentang SMA Lab UM</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                {/* <i class="lni lni-agenda"></i> */}
                <span>Struktur Organigram</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                {/* <i class="lni lni-agenda"></i> */}
                <span>Guru & Karyawan</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                {/* <i class="lni lni-agenda"></i> */}
                <span>Statistika</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                {/* <i class="lni lni-agenda"></i> */}
                <span>Logo</span>
              </a>
            </li>
          </ul>
        </aside>

        <main style={mainStyle}>{children}</main>
        {/* <div className="main p-3">
          <div className="text-center">
            <h1>Sidebar Bootstrap 5</h1>
          </div>
        </div> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default Sidebar;
