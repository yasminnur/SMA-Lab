import { Row, Col } from "react-bootstrap";
import React, {useState, useEffect} from "react";
import data from '../data/ekstra.json';
import "./css/ekstra.css"

const ekstra = () => {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
      setJsonData(data);
    }, []);
  return (
    <>
      <div
        className="ekstra"
        style={{ background: "white", width: "100vw", height: "100vh" }}
      >
        {/* <h5
          className="w-100 fw-bold"
          style={{
            lineHeight: "120%",
            letterSpacing: "-0.24px",
            fontSize: "30px",
            padding: "30px 40px 50px 40px",
          }}
        >
          Ekstrakurikuler
        </h5>
        <div className="card-wrapper w-100 mb-4 overflow-x-auto">
        <div className="card-ekstra d-flex gap-4">
          {jsonData.slice(0, Math.ceil(jsonData.length / 2)).map((item, index) => (
            <img
              key={index}
              className="rounded-3"
              src={item.image}
              style={{
                maxHeight: "200px",
                minHeight: "200px",
                minWidth: "250px",
                maxWidth: "250px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="card-wrapper w-100 overflow-x-auto">
        <div className="card-ekstra d-flex gap-4">
          {jsonData.slice(Math.ceil(jsonData.length / 2)).map((item, index) => (
            <img
              key={index}
              className="rounded-3"
              src={item.image}
              style={{
                maxHeight: "200px",
                minHeight: "200px",
                minWidth: "250px",
                maxWidth: "250px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              alt=""
            />
          ))}
        </div>
        </div> */}
        

        {/* =================================== */}

        <div className="scroll">
          <div className="">
            <span>Html</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Angular</span>
          </div>
          <div className="">
            <span>Html</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Angular</span>
          </div>
        </div>
        {/* =========================== */}
        <div className="scroll">
          <div className="">
            <span>Html</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Angular</span>
          </div>
          <div className="">
            <span>Html</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Angular</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ekstra;
