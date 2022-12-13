import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

import "./swiper-cases.css";
import style from "./swiper-cases.module.css";

import AlticeForumLogo from "../../assets/images/our-cases/altice-forum-braga-logo.png";
import EaiLogo from "../../assets/images/our-cases/eai-logo.png";
import IotDayLogo from "../../assets/images/our-cases/iot-day-logo.png";
import UPortLogo from "../../assets/images/our-cases/u-porto-logo.png";
import CampusMobileLogo from "../../assets/images/our-cases/campus-mobile-logo.png";
import EricssonLogo from "../../assets/images/our-cases/ericsson-logo.png";
import GallagherLogo from "../../assets/images/our-cases/gallagher-logo.jpg";
import UspLogo from "../../assets/images/our-cases/usp-logo.png";
import FeiLogo from "../../assets/images/our-cases/fei-logo.png";
import FisioCloud from "../../assets/images/our-cases/fiso-cloud-logo.svg";
import SmartCity from "../../assets/images/our-cases/smart-city-logo.png";
import HisaLogo from "../../assets/images/our-cases/hisa-logo.jpg";
import VivoLogo from "../../assets/images/our-cases/vivo-logo.png";

const SwiperCases = () => {
    const logoImages = [
        {
            src: AlticeForumLogo,
            alt: "Logo Altice Forum Braga",
            title: "Logo Altice Forum Braga",
        },
        {
            src: EaiLogo,
            alt: "Logo EAI (European Alliance for Innovation) - Research Meets Innovation",
            title: "Logo EAI (European Alliance for Innovation) - Research Meets Innovation",
        },
        {
            src: IotDayLogo,
            alt: "Logo IOT Day SP 2018",
            title: "Logo IOT Day SP 2018",
        },
        {
            src: UPortLogo,
            alt: "Logo U.Port inovação",
            title: "Logo U.Port inovação",
        },
        {
            src: CampusMobileLogo,
            alt: "Logo Campus Mobile",
            title: "Logo Campus Mobile",
        },
        {
            src: EricssonLogo,
            alt: "Logo Ericsson",
            title: "Logo Ericsson",
        },
        {
            src: GallagherLogo,
            alt: "Logo Gallagher convention centre",
            title: "Logo Gallagher convention centre",
        },
        {
            src: UspLogo,
            alt: "Logo USP (Universidade de São Paulo)",
            title: "Logo USP (Universidade de São Paulo)",
        },
        {
            src: FeiLogo,
            alt: "Logo centro universitário FEI (Fundação Educacional Inaciana 'Padre Sabóia de Medeiros')",
            title: "Logo centro universitário FEI (Fundação Educacional Inaciana 'Padre Sabóia de Medeiros')",
        },
        {
            src: FisioCloud,
            alt: "Logo FisioCloud",
            title: "Logo FisioCloud",
        },
        {
            src: SmartCity,
            alt: "Logo Smart City 360° The gateway to innovation",
            title: "Logo Smart City 360° The gateway to innovation",
        },
        {
            src: HisaLogo,
            alt: "Logo Healthcare Innovation Summit Africa 2018",
            title: "Logo Healthcare Innovation Summit Africa 2018",
        },
        {
            src: VivoLogo,
            alt: "Logo Vivo",
            title: "Logo Vivo",
        },
    ];

    return (
        <Swiper
            className='mt-5'
            pagination={{
                clickable: true,                
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                568: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                2000: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                }
            }}
            grabCursor={true}
            loop={true}
            modules={[Pagination, Autoplay]}
        >
            {
                logoImages.map(({ alt, src, title }, index) => (
                    <SwiperSlide key={index}>
                        <div className={style.ImgLogoContainer}>
                            <img 
                                className={`${style.ImgLogo}`}
                                alt={alt}
                                title={title}
                                src={src} />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default SwiperCases;