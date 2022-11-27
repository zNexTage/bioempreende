import { Col, Row } from "react-bootstrap";
import AboutUsImg from "../../../assets/images/about-us.svg";
import Knowledge from "../../../assets/icons/knowledge.png";
import Strategy from "../../../assets/icons/strategy.png";
import Results from "../../../assets/icons/results.png";
import style from "./about-us.module.css";

const AboutUs = () => {
    return (
        <section className="px-4 pb-4 p-top" id="about-us">
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
                            <img
                                alt=""
                                src={Knowledge}
                                className={style.BioIcons} />
                            <p className="fs-5 m-0 mt-2">
                                Conhecimento
                            </p>
                        </Col>
                        <Col xl={4} md={4} sm={12} className="text-center mt-4">
                            <img
                                alt=""
                                src={Strategy}
                                className={style.BioIcons} />
                            <p className="fs-5 m-0 mt-2">
                                Estratégia
                            </p>
                        </Col>
                        <Col xl={4} md={4} sm={12} className="text-center mt-4">
                            <img
                                alt=""
                                src={Results}
                                className={style.BioIcons} />
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
    )
}

export default AboutUs;