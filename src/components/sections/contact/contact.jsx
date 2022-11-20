import { Col, Row } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { WHATSAPP_URL } from "../../../utils/consts";

const Contact = () => {
    return (
        <section className="mb-4 text-white" id="contact">
            <Row>
                <Col
                    xl={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="d-flex flex-column mb-sm-2 align-items-md-center align-items-lg-center">
                    <div>
                        <h3 className="text-uppercase">
                            Nosso escritório
                        </h3>
                        <p className="lead">
                            Estamos de portas aberta para você
                        </p>

                        <address className="mt-3">
                            <strong>
                                BioEmpreende
                            </strong> <br />
                            Avenida Paulista, 2202, São Paulo - SP<br />
                            Brasil
                        </address>
                    </div>
                </Col>
                <Col
                    xl={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="d-flex flex-column align-items-md-center align-items-lg-center">
                    <div>
                        <h3 className="text-uppercase">
                            Fale conosco
                        </h3>
                        <p className="lead">
                            Será um prazer te atender
                        </p>

                        <address className="mt-3">
                            <a href={WHATSAPP_URL} className="text-white" target="__blank">
                                <BsFillTelephoneFill title="Telefone/Celular" />
                                +55 11 983823705
                            </a>
                            <br />
                            <a href="mailto:contato@bioempreende.com.br" className="text-white">
                                <AiOutlineMail title="Email" className="me-1" />
                                contato@bioempreende.com.br
                            </a>
                            <br />
                            <div className="mt-2">
                                <a
                                    href="https://www.instagram.com/bioempreende/"
                                    className="text-white fs-3"
                                    target="__blank"
                                >
                                    <AiFillInstagram title="Instagram" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/company/bioempreendebiobusiness/"
                                    className="text-white fs-3"
                                    target="__blank"
                                >
                                    <AiFillLinkedin title="Linkedin" />
                                </a>
                            </div>
                        </address>

                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Contact;