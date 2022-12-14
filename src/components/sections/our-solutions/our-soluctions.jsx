import { Col, Row } from "react-bootstrap";
import HealthSpeeches from "../../../assets/images/health-speeches.svg";
import Consultancy from "../../../assets/images/consultancy.svg";
import SalesMarket4 from "../../../assets/images/sales-market-4.svg";
import SmarthLeadership from "../../../assets/images/smart-leadership.svg";
import Courses from "../../../assets/images/courses.svg";
import style from "./our-soluctions.module.css";
import FadeInSection from "../../fade-in-section/fade-in-section";


const RightSection = ({ image, title, children }) => {
    // Texts is in right and image in left

    const { alt, src, ...imgRest } = image;

    return (
        <FadeInSection className={'bg-light my-4 my-md-0 my-lg-0'}>
            <Row
                className={`w-100 m-0 ${style.SectionContainer} ${style.SectionContainerYellow}`}>
                <Col
                    className={`d-flex flex-column align-self-center text-center`}
                    sm={12}
                    md={6}
                    xl={6}>
                    <img
                        className={`${style.OurSoluctionsImg} mb-5 w-100 m-auto`}
                        alt={alt}
                        src={src}
                        {...imgRest}
                    />

                    <h3 className="text-uppercase">
                        {title}
                    </h3>
                </Col>
                <Col
                    sm={12}
                    xl={6}
                    md={6}
                    className="d-flex bg-light justify-content-center align-items-center p-md-5 p-lg-5">
                    {children}
                </Col>
            </Row>
        </FadeInSection>
    )
}

const LeftSection = ({ image, title, children }) => {
    // texts is in left and image in right
    const { alt, src, ...imgRest } = image;

    return (
        <FadeInSection className={'bg-light my-4 my-md-0 my-lg-0'}>
            <Row
                className={`w-100 m-0 ${style.SectionContainer} ${style.SectionContainerBlue}`}>
                <Col
                    className="d-flex justify-content-center align-items-center p-md-5 p-lg-5"
                    xs={{ span: 12, order: 2 }}
                    sm={{ span: 12, order: 2 }}
                    xl={{ span: 6, order: 1 }}
                    md={{ span: 6, order: 1 }}>

                    {children}
                </Col>
                <Col
                    xs={{ span: 12, order: 1 }}
                    sm={{ span: 12, order: 1 }}
                    xl={{ span: 6, order: 2 }}
                    md={{ span: 6, order: 2 }}
                    className={`d-flex flex-column align-self-center text-center`}>
                    <img
                        className={`${style.OurSoluctionsImg} w-100 mb-5 m-auto`}
                        alt={alt}
                        src={src}
                        {...imgRest}
                    />
                    <h3 className="text-uppercase mb-3">
                        {title}
                    </h3>
                </Col>
            </Row>
        </FadeInSection>
    )
}

const OurSolutions = () => {
    return (
        <section id="services">
            <div className={`${style.OurSolutionsHeader} d-flex justify-content-center align-items-center`}>
                <h2 className="text-uppercase text-center">
                    Nossas <span className="text-bio-yellow">solu????es</span>
                </h2>
            </div>
            <RightSection
                image={{
                    src: HealthSpeeches,
                    alt: "Ilustra????o de uma mulher discursando"
                }}
                title="Palestras"
            >
                <ul className="text-justify fs-5 list-unstyled">
                    <li className="mb-2">
                        <strong className="text-bio-yellow">Ci??ncias da Vida e Neg??cios 4.0:</strong> Vis??o sobre o potencial de mercado  gerado pelo avan??o da biotecnologia e sua converg??ncia com as tecnologias digitais.
                    </li>
                    <li className="mb-2">
                        <strong className="text-bio-yellow">Internet das Coisas na Sa??de:</strong>  Aplica????o de IoT no segmento de sa??de e os ganhos gerados para o ecossistema.
                    </li>
                    <li>
                        <strong className="text-bio-yellow">Bioempreendedorismo:</strong> As tend??ncias e os desafios desde a concep????o at?? o lan??amento da solu????o.
                    </li>
                </ul>
            </RightSection>

            <LeftSection image={{
                src: Consultancy,
                alt: "Ilustra????o de duas pessoas trabalhando juntas"
            }}
                title={
                    <span>
                        Consultoria e <span className="text-bio-yellow">transforma????o digital</span>
                    </span>
                }
            >
                <ul className="text-justify fs-5">
                    <li>
                        Pesquisa de mercado para solu????es inovadoras;
                    </li>
                    <li>
                        Assessoria cient??fica para Healthtechs;
                    </li>
                    <li>
                        Digitaliza????o de processos para ganho de efici??ncia, redu????o de custos e inser????o de novas tecnologias;
                    </li>
                    <li>
                        Suporte e treinamento para a implementa????o de novas tecnologias;
                    </li>
                    <li>
                        Consultoria t??cnica para cria????o e desenvolvimento de startups de ci??ncias da vida, desde a concep????o at?? o mercado;
                    </li>
                    <li>
                        Consultoria para Cidades Inteligentes: planejamento para a ??rea de sa??de, desenvolvimento de projetos e capta????o de recursos.
                    </li>
                </ul>
            </LeftSection>

            <RightSection
                image={{
                    src: SalesMarket4,
                    alt: "Ilustra????o de uma pessoa interagindo com um sistema de compras."
                }}
                title={<span>Vendas no <span className="text-bio-blue">mercado 4.0</span></span>}
            >
                <p className="text-justify fs-5 m-0">
                    Quer expandir seu neg??cio de forma inteligente e eficiente? Temos as melhores solu????es para empresas da ??rea da sa??de e Startups que vendem inova????o. Conhecimento estruturado de forma objetiva e aplic??vel.
                </p>
            </RightSection>

            <LeftSection
                image={{
                    src: SmarthLeadership,
                    alt: "Ilustra????o de tr??s pessoas conversando e trabalhando juntas."
                }}
                title={<span>Lideran??a <span className="text-bio-yellow">inteligente</span></span>}

            >
                <p className="text-justify fs-5 m-0">
                    Entenda os desafios e oportunidades que o novo mercado traz e guie seu time nesse caminho. Como criar estrat??gias claras, medir o progresso e implementar melhorias.
                </p>

            </LeftSection>



            <RightSection
                image={{
                    src: Courses,
                    alt: "Ilustra????o de uma pessoa apontando para uma lousa e explicando."
                }}
                title="Cursos">
                <div className="text-justify fs-5">
                    <div>
                        <p>
                            <strong className="text-bio-yellow">Vendas para Startups:</strong> Existe uma maneira s??lida e sustent??vel de estruturar um processo de vendas capaz de levar sua empresa para outro patamar:
                        </p>
                        <ul>
                            <li>
                                Estrat??gia de capta????o de leads;
                            </li>
                            <li>
                                Gest??o de Funil de Vendas;
                            </li>
                            <li>
                                Estrat??gias de convers??o;
                            </li>
                            <li>
                                Elabora????o de speech de vendas personalizado para o seu segmento;
                            </li>
                            <li>
                                Ferramentas de automa????o.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>
                            <strong className="text-bio-yellow">Bioempreendedorismo:</strong> As tend??ncias e os desafios deste mercado, desde a concep????o at?? o lan??amento da solu????o. O r??pido crescimento da biotecnologia abre diversas oportunidades para empreendedores e investidores. Trazemos o conhecimento necess??rio para abra??ar essas oportunidades.
                        </p>
                        <ul>
                            <li>O que ?? BioEmpreendedorismo;</li>
                            <li>Como lucrar nesse mercado;</li>
                            <li>Como estruturar meu projeto e captar recursos.</li>
                        </ul>
                    </div>
                </div>
            </RightSection>

        </section>
    )
}

export default OurSolutions;