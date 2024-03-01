import Hero from "../components/Hero"
import Tentang from "../components/tentangKami"
import Agenda from "../components/Agenda"

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
      <section className="kabar-terbaru"></section>
      <section className="hero"></section>
      <section className="hero"></section>
      <section className="hero"></section>
      <section className="hero"></section>
      <section className="hero"></section>
    </>
  );
};

export default index;
