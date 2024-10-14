import React from "react";
import { useTranslation } from "react-i18next";
import "./Trust.scss";
import { NavLink } from "react-router-dom";
import click from "../../../../public/img/click.jpeg";
import payme from "../../../../public/img/payme.png";
import fanta from "../../../../public/img/fanta.png";
import pepsi from "../../../../public/img/pepsi.png";
import cola from "../../../../public/img/cola.png";
import turan1 from "../../../../public/img/turan1.png";
import turan2 from "../../../../public/img/turan2.png";
import turan4 from "../../../../public/img/turan4.png";
import uzum from "../../../../public/img/uzum.jpeg";
import turan3 from "../../../../public/img/turan3.jpeg";
import joyda from "../../../../public/img/joyda.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Trust = () => {
  const { t } = useTranslation();

  return (
    <div className="trust">
      <div className="trust__wrapper">
        <div className="team__top">
          <div className="team__desc">
            <h2 className="team__title">{t("trust_title")}</h2>
            <p className="team__text">{t("trust_text")}</p>
          </div>
          <button className="team__btn btn-13">
            <a
              className="cta"
              style={{ textDecoration: "none", color: "#fff" }}
              to={"/#contact"}
            >
              {t("become_client")}
            </a>
          </button>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="video__swiper"
        >
          {/* Tasvir va linklarni o'zgartirishsiz qoldirildi */}
          <SwiperSlide className="trust__banner">
            <NavLink className={"trust__link"} to={"https://click.uz"}>
              <img src={click} alt="" className="trust__img" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="trust__banner">
            <NavLink className={"trust__link"} to={"https://payme.uz"}>
              <img src={payme} alt="" className="trust__img" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="trust__banner">
            <NavLink className={"trust__link"} to={"https://uzumbank.uz"}>
              <img src={uzum} alt="" className="trust__img" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="trust__banner">
            <NavLink className={"trust__link"} to={"https://fanta.uz"}>
              <img src={fanta} alt="" className="trust__img" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="trust__banner">
            <NavLink className={"trust__link"} to={"https://pepsi.uz"}>
              <img src={pepsi} alt="" className="trust__img" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="trust__banner">
            <NavLink className={"trust__link"} to={"https://joyda.uz"}>
              <img src={joyda} alt="" className="trust__img" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="trust__banner">
            <NavLink className={"trust__link"} to={"https://cocacola.uz"}>
              <img src={cola} alt="" className="trust__img" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="trust__banner">
            <NavLink className={"trust__link"} to={"https://turan.uz"}>
              <img src={turan1} alt="" className="trust__img" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="trust__banner">
            <NavLink className={"trust__link"} to={"https://turanteam.uz"}>
              <img src={turan2} alt="" className="trust__img" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="trust__banner">
            <NavLink className={"trust__link"} to={"https://turanteam.uz"}>
              <img src={turan3} alt="" className="trust__img" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="trust__banner">
            <NavLink className={"trust__link"} to={"https://turanteam.uz"}>
              <img src={turan4} alt="" className="trust__img" />
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trust;
