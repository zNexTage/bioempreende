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
    /**
     * TODO: Create an array with all images with alt text
     */
    return (
        <Swiper
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
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img className={`${style.ImgLogo}`} src={AlticeForumLogo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img className={`${style.ImgLogo}`} src={EaiLogo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img className={`${style.ImgLogo}`} src={IotDayLogo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img className={`${style.ImgLogo}`} src={UPortLogo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img className={`${style.ImgLogo}`} src={CampusMobileLogo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img className={`${style.ImgLogo}`} src={EricssonLogo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img className={`${style.ImgLogo}`} src={GallagherLogo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img className={`${style.ImgLogo}`} src={UspLogo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img className={`${style.ImgLogo}`} src={FeiLogo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img
                        className={`${style.ImgLogo}`}
                        src={FisioCloud} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img
                        className={`${style.ImgLogo}`}
                        src={SmartCity} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img
                        className={`${style.ImgLogo}`}
                        src={HisaLogo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.ImgLogoContainer}>
                    <img
                        className={`${style.ImgLogo}`}
                        src={VivoLogo} />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperCases;