import { Col, Row } from "react-bootstrap";
import HealthSpeeches from "../../../assets/images/health-speeches.svg";
import Consultancy from "../../../assets/images/consultancy.svg";
import SalesMarket4 from "../../../assets/images/sales-market-4.svg";
import SmarthLeadership from "../../../assets/images/smart-leadership.svg";
import style from "./our-soluctions.module.css";



const OurSolutions = () => {
    return (
        <section className="p-4" id="services">
            <h2 className="text-uppercase text-center mb-5">
                Nossas <span className="text-bio-yellow">soluções</span>
            </h2>

            <Row className="mb-3">
                <Col
                    className="text-center"
                    sm={12}
                    md={6}
                    xl={6}>
                    <img
                        className={`${style.OurSoluctionsImg} w-100`}
                        alt="Ilustração de uma mulher discursando"
                        src={HealthSpeeches} />
                </Col>
                <Col
                    sm={12}
                    xl={6}
                    md={6}
                    className="mt-5 mt-md-0">
                    <h3 className="text-uppercase mb-3">
                        Palestras: Saúde <span className="text-bio-yellow">4.0</span>
                    </h3>
                    <p className="text-justify fs-5">
                        Estamos vivendo a convergência entre as tecnologias exponenciais e as <strong className="text-bio-yellow">ciências da vida</strong>. Tecnologias como <strong className="text-bio-yellow">Internet das Coisas (IOT)</strong> e <strong className="text-bio-yellow">Inteligência Artificial</strong> estão impactando profundamente nossa realidade e o ambiente de negócios da saúde. Sua empresa está preparada para essas mudanças?
                    </p>
                </Col>
            </Row>

            <Row className="mt-5 mb-3">
                <Col
                    className="mt-5 mt-md-0"
                    xs={{ span: 12, order: 2 }}
                    sm={{ span: 12, order: 2 }}
                    xl={{ span: 6, order: 1 }}
                    md={{ span: 6, order: 1 }}>
                    <h3 className="text-uppercase mb-3">
                        Consultoria e <span className="text-bio-yellow">transformação digital</span>
                    </h3>
                    <p className="text-justify fs-5">
                        Atuamos com consultoria para instituições públicas e privadas Levantamento dos gargalos e fragilidades das instituições e dos processos. E verificação de todas as possibilidades de aumento da eficiência, economia de recursos e melhoria dos serviços prestados ao cidadão através de soluções tecnológicas. Ofertas de cursos e capacitações necessárias para os membros da equipe e engajamento para garantir a plena utilização.
                    </p>
                </Col>
                <Col
                    xs={{ span: 12, order: 1 }}
                    sm={{ span: 12, order: 1 }}
                    xl={{ span: 6, order: 2 }}
                    md={{ span: 6, order: 2 }}
                    className="text-center">
                    <img
                        className={`${style.OurSoluctionsImg} w-100`}
                        alt="Ilustração de duas pessoas trabalhando juntas"
                        src={Consultancy} />
                </Col>
            </Row>

            <Row className="mt-5 mb-3">
                <Col
                    className="text-center"
                    sm={12}
                    md={6}
                    xl={6}>
                    <img
                        className={`${style.OurSoluctionsImg} w-100`}
                        alt="Ilustração de uma pessoa interagindo com um sistema de compras."
                        src={SalesMarket4} />
                </Col>
                <Col
                    sm={12}
                    xl={6}
                    md={6}
                    className="mt-5 mt-md-0">
                    <h3 className="text-uppercase mb-3">
                        Vendas no <span className="text-bio-yellow">mercado 4.0</span>
                    </h3>
                    <p className="text-justify fs-5">
                        Quer expandir seu negócio de forma inteligente e eficiente? Temos as melhores soluções para empresas da área da saúde e Startups que vendem inovação. Conhecimento estruturado de forma objetiva e aplicável.
                    </p>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col
                    className="mt-5 mt-md-0"
                    xs={{ span: 12, order: 2 }}
                    sm={{ span: 12, order: 2 }}
                    xl={{ span: 6, order: 1 }}
                    md={{ span: 6, order: 1 }}>
                    <h3 className="text-uppercase mb-3">
                        Liderança <span className="text-bio-yellow">inteligente</span>
                    </h3>
                    <p className="text-justify fs-5">
                        Entenda os desafios e oportunidades que o novo mercado traz e guie seu time nesse caminho. Como criar estratégias claras, medir o progresso e implementar melhorias.
                    </p>
                </Col>
                <Col
                    xs={{ span: 12, order: 1 }}
                    sm={{ span: 12, order: 1 }}
                    xl={{ span: 6, order: 2 }}
                    md={{ span: 6, order: 2 }}
                    className="text-center">
                    <img
                        className={`${style.OurSoluctionsImg} w-100`}
                        alt="Ilustração de três pessoas conversando e trabalhando juntas."
                        src={SmarthLeadership} />
                </Col>
            </Row>
        </section>
    )
}

export default OurSolutions;