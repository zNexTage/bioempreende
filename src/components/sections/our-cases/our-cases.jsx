import { Container } from "react-bootstrap";
import SwiperCases from "../../swiper-cases";

const OurCases = () => {
    return (
        <section
            id="our-cases"
            className="bg-bio-dark-blue px-4 pb-4 p-top text-white mt-4">
            <Container fluid>
                <h2 className="text-uppercase mb-4">
                    Nossos <span className="text-bio-yellow">cases</span>
                </h2>
                <p className="lead text-justify">
                    Nossa consultoria possui cases nacionais e internacionais com empresas, startups e instituições de pesquisa.
                </p>
                <SwiperCases />
            </Container>
        </section>
    )
}

export default OurCases;