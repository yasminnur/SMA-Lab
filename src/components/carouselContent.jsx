import "./css/carouselContent.css";

const carouselContent = () => {
  return (
    <>
      <div className="carouselContent">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="desc">
          <span>Prestasi</span>
          <h2>Global Learning Goes to Japang</h2>

          <button>
            Lihat Detail
            <img src="./assets/hero/right.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default carouselContent;
