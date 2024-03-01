import data from "../data/jurnalis.json";
import React, { useState, useEffect } from "react";
const Jurnalistik = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <div
        className="jurnalistik w-100"
        style={{ padding: "30px 40px 50px 40px" }}
      >
        <h5
          className="w-100 block"
          style={{ lineHeight: "36px", letterSpacing: "-0.24px" }}
        >
          Jurnalistik
        </h5>
        <div className="card-wrapper d-flex p-0 mt-4" style={{gap: '15px'}}>
          {jsonData.map((item, index) => (
            <div className="card-container w-100" style={{padding: '0 10px'}}>
              <img 
        className="d-flex rounded-3 p-0 h-100 w-100" 
        style={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: '170px', marginBottom: '10px' }} 
        src={item.image} 
        alt="" 
    />
              <p className="p-0 w-100" style={{marginBottom: '10px', fontSize: '12px', lineHeight:'16px', letterSpacing: "-0.24px"}}>{item.date}</p>
              <p className="p-0 w-100 m-0 fw-bold" syle={{fontSize: '13px', lineHeight: '120%', letterSpacing: "-0.24px" }}>{item.title}</p>
            </div>
          ))}
              </div>
              <div className="d-flex align-items-center w-100 gap-2 mt-4">
                  <p className="p-0 m-0" style={{color: '#091E6F', fontSize: '18px'}} >Lainnya</p>
                  <img src="./assets/kabar/arrow-biru.svg" alt="" style={{width: '15px'}} />
                  </div>
      </div>
    </>
  );
};

export default Jurnalistik;
