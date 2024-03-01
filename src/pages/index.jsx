import Hero from "../components/Hero"
import Tentang from "../components/tentangKami"
import Agenda from "../components/Agenda"
import Kabar from "../components/KabarKami"
import Jurnalistik from "../components/Jurnalistik"
import Ekstra from "../components/Ekstra"
import "../index.css"

const index = () => {
  return (
    <>
      <section className="hero">
        <Hero />
      </section>
      <section className="tentang-kami">
        <Tentang />
      </section>
      <section className="agenda">
        <Agenda />
      </section>
      <section className="kabar-terbaru" style={{background: '#FAFAFA'}}>
      <Kabar />
      <Jurnalistik />
      </section>
      <section className="hero">
        <Ekstra />
      </section>
      <section className="hero"></section>
      <section className="hero"></section>
      <section className="hero"></section>
      <section className="hero"></section>
    </>
  );
};

export default index;
