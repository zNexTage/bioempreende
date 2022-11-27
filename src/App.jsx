import Header from "./components/header";
import AboutUs from "./components/sections/about-us";
import CountsInfo from "./components/sections/counts-info";
import OurSolutions from "./components/sections/our-solutions";
import Footer from "./components/footer";
import OurCases from "./components/sections/our-cases";


function App() {
  return (
    <main>
      <Header />
      <CountsInfo />
      <AboutUs />
      <OurCases />
      <OurSolutions />
      <Footer />
    </main>
  );
}

export default App;
