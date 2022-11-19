import Header from "./components/header";
import Container from 'react-bootstrap/Container';
import Lottie from "lottie-react";
import DnaBio from "./assets/lottiefiles/research.json";
import { Button, Col, Row } from "react-bootstrap";
import { WHATSAPP_URL } from "./utils/consts";
import AboutUs from "./components/sections/about-us";
import CountsInfo from "./components/sections/counts-info";
import OurSolutions from "./components/sections/our-solutions";


function App() {
  return (
    <>
      <Header />
      <section className="py-5 px-sm-2 px-md-3 px-lg-5">
        <Container fluid>
          <Row>
            <Col md={12} xl={6} className="align-self-center">
              <h1>
                BioEmpreende
              </h1>
              <p class="lead text-justify">
                Somos uma consultoria estratégica que nasceu para fazer a sua empresa prosperar. Entregamos os mais avançados conhecimentos sobre vendas e desenvolvimento de negócios no mercado 4.0 de forma objetiva e aplicável.
              </p>
              <Button as="a"
                href={WHATSAPP_URL}
                size="lg"
                target="__blank"
                style={{
                  backgroundColor: "var(--bio-yellow)",
                  border: "var(--bio-yellow)"
                }}>
                Fale conosco
              </Button>
            </Col>
            <Col md={12} xl={6}>
              <Lottie
                animationData={DnaBio}
                loop={true}
                style={{
                  height: 500
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <CountsInfo />

      <AboutUs />

      <OurSolutions />
    </>
  );
}

export default App;
