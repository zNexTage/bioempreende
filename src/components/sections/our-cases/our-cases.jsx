import { Col, Container, Row } from "react-bootstrap";
import LsiTecImg from "../../../assets/icons/lsitec.png";
import IncloudeImg from "../../../assets/icons/incloude.png";
import style from "./our-cases.module.css";

const OurCases = () => {
    return (
        <section className="bg-bio-dark-blue p-4 text-white my-4">
            <Container fluid>
                <h2 className="text-uppercase mb-4">
                    Nossos <span className="text-bio-yellow">cases</span>
                </h2>
                <Row>
                    <Col xl={12}>
                        <p className="lead text-justify">
                            Nossa consultoria possui cases nacionais e internacionais com empresas, startups e instituições de pesquisa.
                        </p>
                    </Col>
                    <Col xl={12} className="mt-5">
                        <Row>
                            <Col
                                className="p-3"
                                sm={12}
                                md={6}
                                xl={6}>
                                <img
                                    className={`${style.OurCasesImage} w-100`}
                                    src={LsiTecImg} />
                            </Col>
                            <Col
                                className="p-3"
                                sm={12}
                                md={6}
                                xl={6}>
                                <img
                                    className={`${style.OurCasesImage} w-100`}
                                    src={IncloudeImg} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurCases;