import { Col, Row } from "react-bootstrap";
import HealthSpeeches from "../../../assets/images/health-speeches.svg";
import Consultancy from "../../../assets/images/consultancy.svg";
import style from "./our-soluctions.module.css";

const OurSolutions = () => {
    return (
        <section className="p-4">
            <h2 className="text-uppercase text-center mb-5">
                Nossas <span className="text-bio-yellow">soluções</span>
            </h2>

            <Row>
                <Col className="text-center" xl={6}>
                    <img
                        className={`${style.OurSoluctionsImg} w-100`}
                        alt="Ilustração de uma mulher discursando"
                        src={HealthSpeeches} />
                </Col>
                <Col xl={6}>
                    <h3 className="text-uppercase mb-3">
                        Palestras: Saúde <span className="text-bio-yellow">4.0</span>
                    </h3>
                    <p className="text-justify fs-5">
                        Estamos vivendo a convergência entre as tecnologias exponenciais e as <strong className="text-bio-yellow">ciências da vida</strong>. Tecnologias como <strong className="text-bio-yellow">Internet das Coisas (IOT)</strong> e <strong className="text-bio-yellow">Inteligência Artificial</strong> estão impactando profundamente nossa realidade e o ambiente de negócios da saúde. Sua empresa está preparada para essas mudanças?
                    </p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col xl={6}>
                    <h3 className="text-uppercase mb-3">
                        Consultoria e <span className="text-bio-yellow">transformação digital</span>
                    </h3>
                    <p className="text-justify fs-5">
                        Atuamos com consultoria para instituições públicas e privadas Levantamento dos gargalos e fragilidades das instituições e dos processos. E verificação de todas as possibilidades de aumento da eficiência, economia de recursos e melhoria dos serviços prestados ao cidadão através de soluções tecnológicas. Ofertas de cursos e capacitações necessárias para os membros da equipe e engajamento para garantir a plena utilização.
                    </p>
                </Col>
                <Col xl={6} className="text-center">
                    <img
                        className={`${style.OurSoluctionsImg} w-100`}
                        alt="Ilustração de uma mulher discursando"
                        src={Consultancy} />
                </Col>
            </Row>
        </section>
    )
}

export default OurSolutions;