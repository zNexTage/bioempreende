import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import BioEmpreendeLogo from "../../assets/images/bioempreende-logo.png";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { WHATSAPP_URL } from '../../utils/consts';
import Lottie from "lottie-react";
import DnaBio from "../../assets/lottiefiles/dna-bio.json";
import style from "./header.module.css";


const Header = () => {
    return (
        <header>
            <Navbar
                bg="bio-dark-blue"
                expand="md"
                variant="dark"
                className="p-2"
                fixed="top"
                collapseOnSelect >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#about-us">Sobre nós</Nav.Link>
                        <Nav.Link href="#our-cases">Nossos cases</Nav.Link>
                        <Nav.Link href="#services">Serviços</Nav.Link>
                        <Nav.Link href="#contact">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <section className={`py-5 px-sm-2 px-md-3 px-lg-5 bg-bio-dark-blue ${style.HeaderSection}`}>
                <Container className='mt-5 mb-2' fluid>
                    <Row>
                        <Col sm={12} md={6} xl={6} className="align-self-center">
                            <img
                                alt="Logo da BioEmpreende"
                                src={BioEmpreendeLogo}
                                className="w-100 mb-0 mb-md-5 mb-lg-5" />

                            <p
                                className="lead text-justify text-white mb-5 mt-5 mt-md-0 mt-lg-0">
                                A BioEmpreende é uma consultoria estratégica que fortalece empresas de ciências da vida. Reconhecida especialmente por sua atuação com tecnologias emergentes como computação em nuvem, a internet das coisas (IoT) e a inteligência artificial (IA), a BioEmpreende conecta  cientistas, empresários e investidores, ampliando a sinergia entre os avanços da ciência e as novas possibilidades de negócios.
                            </p>
                            <Button
                                as="a"
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
                        <Col sm={12} md={6} xl={6}>
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

        </header>
    )
}

export default Header;