import Hero from "../components/Hero";
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
      <section className="">
        <Hero />
      </section>
      <section className="tentang-kami">
        <Tentang />
      </section>
      <section className="agenda">
        <Agenda />
      </section>
      <section className="kabar-terbaru" style={{ background: "#FAFAFA" }}>
        <Kabar />
        <Jurnalistik />
      </section>
      <section className="ekstra">
        <Ekstra />
      </section>
      <section className="komen w-100 h-100">
        <Komen />
      </section>
      <section
        className="ppdb"
        style={{ padding: "30px 40px 50px 40px", height: "fit-content" }}
      >
        <PPDB />
      </section>
      <section className="social-media">
        <Sosmed />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
};

export default index;
