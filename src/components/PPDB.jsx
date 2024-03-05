import "./css/ppdb.css"
const PPDB = () => {
  return (
    <>
      <div
        className="ppdb w-100 rounded-4"
        style={{
          height: "fit-content",
          background: "#861FC1",
          
        }}
      >
        <div className="containernya">
        <div className="content d-flex justify-content-md-between">
          <div className="kiri my-auto w-100 mb-5">
            <p className="text-light p-0 m-0 mb-3 text-center text-md-start"
              // style={{ fontSize: "10px" }}
            >
            PPDB SMA LAB UM
          </p>
          <h3
            className="fw-bold text-light m-0 p-0 mb-3 text-center text-md-start"
            style={{
              lineHeight: "120%",
              letterSpacing: "-0.24px",
              // fontSize: "30px",
            }}
          >
            Yuk masuk SMA <br /> Lab UM Lur 
          </h3>
          <button
            className="rounded-3 mx-auto"
          >
            Daftar Sekarang!
          </button>
                  </div>
            <img className="mx-auto" src="./assets/ekstra/ppdb.svg" alt=""
              // style={{ maxWidth: '600px', maxHeight: '250px' }}
            />
          </div>
          </div>
      </div>
    </>
  );
};

export default PPDB;
