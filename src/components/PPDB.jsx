const PPDB = () => {
  return (
    <>
      <div
        className="ppdb w-100 rounded-4"
        style={{
          height: "fit-content",
          background: "#861FC1",
          padding: "0 50px",
        }}
      >
        <div className="d-flex justify-content-between">
          <div className=" my-auto">
          <p className="text-light p-0 m-0 mb-3" style={{ fontSize: "10px" }}>
            PPDB SMA LAB UM
          </p>
          <h3
            className="fw-bold text-light m-0 p-0 mb-3"
            style={{
              lineHeight: "120%",
              letterSpacing: "-0.24px",
              fontSize: "30px",
            }}
          >
            Yuk masuk SMA <br /> Lab UM Lur 
          </h3>
          <button
            className="rounded-3 m-0"
            style={{
              border: "none",
              outline: "none",
              letterSpacing: "140%",
              fontSize: "15px",
              background: "#FEB700",
              fontWeight: "semibold",
              padding: "10px 15px",
            }}
          >
            Daftar Sekarang!
          </button>
                  </div>
                  <img src="./assets/ekstra/ppdb.svg" alt="" style={{maxWidth: '600px', maxHeight: '250px'}}/>
        </div>
      </div>
    </>
  );
};

export default PPDB;
