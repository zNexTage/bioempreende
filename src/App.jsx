import Header from "./components/header";
import AboutUs from "./components/sections/about-us";
import CountsInfo from "./components/sections/counts-info";
import OurSolutions from "./components/sections/our-solutions";
import Footer from "./components/footer";
import OurCases from "./components/sections/our-cases";
import CircleButton from "./components/buttons/circle-button";
import WhatsappImg from "./assets/icons/whatsapp.png";
import style from "./App.module.css";
import { WHATSAPP_URL } from "./utils/consts";


function App() {
  return (
    <main className="position-relative bg-light">
      <Header />
      <CountsInfo />
      <AboutUs />
      <OurCases />
      <OurSolutions />
      <Footer />
      <CircleButton
        href={WHATSAPP_URL}
        target="__blank"
        Tag='a'
        title="WhatsApp"
        className={`position-fixed ${style.AppWhatsButton}`}>

        <img
          src={WhatsappImg}
          alt="Ícone WhatsApp" />

      </CircleButton>
    </main>
  );
}

export default App;
