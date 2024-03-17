import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Tentang from "../components/tentangKami";
import Agenda from "../components/Agenda";
import Kabar from "../components/KabarKami";
import Jurnalistik from "../components/Jurnalistik";
import Ekstra from "../components/Ekstra";
import Komen from "../components/Komen";
import PPDB from "../components/PPDB";
import Sosmed from "../components/SocialMedia";
import Footer from "../components/Footer";
import "../index.css";

const index = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="">
        <Hero />
      </section>

      {/* Tentang Section */}
      <section className="">
        <Tentang />
      </section>

      {/* Agenda Section */}
      <section className="">
        <Agenda />
      </section>

      {/* Kabar Section */}
      <section className="kabar-terbaru" style={{ background: "#FAFAFA" }}>
        <Kabar />
        {/* <Jurnalistik /> */}
      </section>

      {/* Estra Section */}
      <section className="">
        <Ekstra />
      </section>

      {/* Testi Section */}
      <section className="" id="testi">
        <Komen />
      </section>

      {/* PPDB Section */}
      <section className="mb-5">
        <PPDB />
      </section>

      {/* Sosmed Section */}
      <section className="social-media">
        <Sosmed />
      </section>

      {/* Footer Section */}
      <section className="footer">
        <Footer />
      </section>
    </>
  );
};

export default index;
