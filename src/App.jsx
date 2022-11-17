import Header from "./components/header";
import Container from 'react-bootstrap/Container';
import Lottie from "lottie-react";
import DnaBio from "./assets/lottiefiles/research.json";
import { Button, Col, Row } from "react-bootstrap";
import { WHATSAPP_URL } from "./utils/consts";
import AboutUsImg from "./assets/images/about-us.svg";
import Knowledge from "./assets/icons/knowledge.png";
import Strategy from "./assets/icons/strategy.png";
import Results from "./assets/icons/results.png";
import style from "./App.module.css";


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

      <section className="bg-bio-gray p-4 text-white text-center">
        <Container fluid>
          <Row>
            <Col sm={12} xl={4} className="text-center">
              <p className="p-3 m-0">
                <span className="h1">
                  1246
                </span>
                <br />
                <span className="text-uppercase">
                  <b>pessoas atingidas</b>
                </span>
              </p>
            </Col>
            <Col sm={12} xl={4} className="text-center">
              <p className="p-3 m-0">
                <span className="h1">
                  56
                </span>
                <br />
                <span className="text-uppercase">
                  <b>palestras e cursos</b>
                </span>
              </p>
            </Col>
            <Col sm={12} xl={4} className="text-center">
              <p className="p-3 m-0">
                <span className="h1">
                  8
                </span>
                <br />
                <span className="text-uppercase">
                  <b>países</b>
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="p-4">
        <Row>
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 6, order: 1 }}
            xl={{ span: 6, order: 1 }}
          >
            <h2 className="text-uppercase mb-4">
              Sobre <span className="text-bio-yellow">nós</span>
            </h2>
            <p className="text-justify fs-5">
              Somos uma consultoria estratégica que nasceu para fazer a sua empresa prosperar. Entregamos os mais avançados conhecimentos sobre vendas e desenvolvimento de negócios no mercado 4.0 de forma objetiva e aplicável.
            </p>
            <p className="text-justify fs-5">
              A BioEmpreende nasceu para ser sua parceira e apoiar o crescimento da sua empresa. Oferecemos cursos, palestras e consultoria para aliar Ciências da Vida e modelos de negócios disruptivos.
            </p>

            <Row className="mt-5">
              <Col xl={4} md={4} sm={12} className="text-center mt-4">
                <img src={Knowledge} className={style.BioIcons} />
                <p className="fs-5 m-0 mt-2">
                  Conhecimento
                </p>
              </Col>
              <Col xl={4} md={4} sm={12} className="text-center mt-4">
                <img src={Strategy} className={style.BioIcons} />
                <p className="fs-5 m-0 mt-2">
                  Estratégia
                </p>
              </Col>
              <Col xl={4} md={4} sm={12} className="text-center mt-4">
                <img src={Results} className={style.BioIcons} />
                <p className="fs-5 m-0 mt-2">
                  Resultados
                </p>
              </Col>
            </Row>

          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            xl={{ span: 6, order: 2 }}
            className="d-flex justify-content-center align-items-center">
            <img src={AboutUsImg} className={`w-100 my-5 ${style.AboutUsImage}`} />
          </Col>
        </Row>
      </section>
    </>
  );
}

export default App;
