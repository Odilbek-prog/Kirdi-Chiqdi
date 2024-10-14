import React from "react";
import "./Intro.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import { NavLink } from "react-router-dom";
import banner from "../../../../public/img/banner.jpeg";
import hog from "../../../../public/img/hog.jpeg";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation(); // useTranslation qo'shildi

  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="intro__desc">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>{t("fullCycleAdAgency")}</SwiperSlide>{" "}
            {/* Tarjima qo'shildi */}
            <SwiperSlide>{t("joinAdvertisingAgency")}</SwiperSlide>{" "}
            {/* Tarjima qo'shildi */}
          </Swiper>
          <button className="btn-13" style={{ fontSize: "15px" }}>
            <a
              className="cta"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/#contact"
            >
              {t("getConsult")} {/* Tarjima qo'shildi */}
            </a>
          </button>
        </div>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCube, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={banner} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hog} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Intro;
