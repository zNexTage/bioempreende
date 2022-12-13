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
                    Nossas <span className="text-bio-yellow">soluções</span>
                </h2>
            </div>
            <RightSection
                image={{
                    src: HealthSpeeches,
                    alt: "Ilustração de uma mulher discursando"
                }}
                title="Palestras"
            >
                <ul className="text-justify fs-5 list-unstyled">
                    <li className="mb-2">
                        <strong className="text-bio-yellow">Ciências da Vida e Negócios 4.0:</strong> Visão sobre o potencial de mercado  gerado pelo avanço da biotecnologia e sua convergência com as tecnologias digitais.
                    </li>
                    <li className="mb-2">
                        <strong className="text-bio-yellow">Internet das Coisas na Saúde:</strong>  Aplicação de IoT no segmento de saúde e os ganhos gerados para o ecossistema.
                    </li>
                    <li>
                        <strong className="text-bio-yellow">Bioempreendedorismo:</strong> As tendências e os desafios desde a concepção até o lançamento da solução.
                    </li>
                </ul>
            </RightSection>

            <LeftSection image={{
                src: Consultancy,
                alt: "Ilustração de duas pessoas trabalhando juntas"
            }}
                title={
                    <span>
                        Consultoria e <span className="text-bio-yellow">transformação digital</span>
                    </span>
                }
            >
                <ul className="text-justify fs-5">
                    <li>
                        Pesquisa de mercado para soluções inovadoras;
                    </li>
                    <li>
                        Assessoria científica para Healthtechs;
                    </li>
                    <li>
                        Digitalização de processos para ganho de eficiência, redução de custos e inserção de novas tecnologias;
                    </li>
                    <li>
                        Suporte e treinamento para a implementação de novas tecnologias;
                    </li>
                    <li>
                        Consultoria técnica para criação e desenvolvimento de startups de ciências da vida, desde a concepção até o mercado;
                    </li>
                    <li>
                        Consultoria para Cidades Inteligentes: planejamento para a área de saúde, desenvolvimento de projetos e captação de recursos.
                    </li>
                </ul>
            </LeftSection>

            <RightSection
                image={{
                    src: SalesMarket4,
                    alt: "Ilustração de uma pessoa interagindo com um sistema de compras."
                }}
                title={<span>Vendas no <span className="text-bio-blue">mercado 4.0</span></span>}
            >
                <p className="text-justify fs-5 m-0">
                    Quer expandir seu negócio de forma inteligente e eficiente? Temos as melhores soluções para empresas da área da saúde e Startups que vendem inovação. Conhecimento estruturado de forma objetiva e aplicável.
                </p>
            </RightSection>

            <LeftSection
                image={{
                    src: SmarthLeadership,
                    alt: "Ilustração de três pessoas conversando e trabalhando juntas."
                }}
                title={<span>Liderança <span className="text-bio-yellow">inteligente</span></span>}

            >
                <p className="text-justify fs-5 m-0">
                    Entenda os desafios e oportunidades que o novo mercado traz e guie seu time nesse caminho. Como criar estratégias claras, medir o progresso e implementar melhorias.
                </p>

            </LeftSection>



            <RightSection
                image={{
                    src: Courses,
                    alt: "Ilustração de uma pessoa apontando para uma lousa e explicando."
                }}
                title="Cursos">
                <div className="text-justify fs-5">
                    <div>
                        <p>
                            <strong className="text-bio-yellow">Vendas para Startups:</strong> Existe uma maneira sólida e sustentável de estruturar um processo de vendas capaz de levar sua empresa para outro patamar:
                        </p>
                        <ul>
                            <li>
                                Estratégia de captação de leads;
                            </li>
                            <li>
                                Gestão de Funil de Vendas;
                            </li>
                            <li>
                                Estratégias de conversão;
                            </li>
                            <li>
                                Elaboração de speech de vendas personalizado para o seu segmento;
                            </li>
                            <li>
                                Ferramentas de automação.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>
                            <strong className="text-bio-yellow">Bioempreendedorismo:</strong> As tendências e os desafios deste mercado, desde a concepção até o lançamento da solução. O rápido crescimento da biotecnologia abre diversas oportunidades para empreendedores e investidores. Trazemos o conhecimento necessário para abraçar essas oportunidades.
                        </p>
                        <ul>
                            <li>O que é BioEmpreendedorismo;</li>
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