import { Col, Container, Row } from "react-bootstrap"

const CountsInfo = () => {
    return (
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
    )
}

export default CountsInfo;