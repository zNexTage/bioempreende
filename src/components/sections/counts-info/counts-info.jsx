import { Col, Container, Row } from "react-bootstrap";
import Counter from "../../counter";


const CountsInfo = () => {

    return (
        <section className="bg-bio-yellow p-4 text-white text-center">
            <Container fluid>
                <Row>
                    <Col sm={12} xl={4} className="text-center">
                        <Counter
                            end={1246}
                        >
                            <span className="text-uppercase">
                                <b>pessoas atingidas</b>
                            </span>
                        </Counter>
                    </Col>
                    <Col sm={12} xl={4} className="text-center">
                        <Counter
                            end={56}
                        >
                            <span className="text-uppercase">
                                <b>palestras e cursos</b>
                            </span>
                        </Counter>
                    </Col>
                    <Col sm={12} xl={4} className="text-center">
                        <Counter
                            end={8}
                        >
                            <span className="text-uppercase">
                                <b>países</b>
                            </span>
                        </Counter>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CountsInfo;