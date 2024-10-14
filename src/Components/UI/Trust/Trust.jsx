import React from "react";
import "./Trust.scss";
import { NavLink } from "react-router-dom";
import click from "../../../../public/click.jpeg";
import payme from "../../../../public/payme.png";
import fanta from "../../../../public/fanta.png";
import pepsi from "../../../../public/pepsi.png";
import cola from "../../../../public/cola.png";
import turan1 from "../../../../public/turan1.png";
import turan2 from "../../../../public/turan2.png";
import turan4 from "../../../../public/turan4.png";
import uzum from "../../../../public/uzum.jpeg";
import turan3 from "../../../../public/turan3.jpeg";
import joyda from "../../../../public/joyda.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Trust = () => {
  return (
    <div className="trust">
      <div className="trust__wrapper">
        <div className="team__top">
          <div className="team__desc">
            <h2 className="team__title">Trusted by</h2>
            <p className="team__text">
              To be continued... There is a place for your logo too
            </p>
          </div>
          <button className="team__btn btn-13">
            <a
              className="cta"
              style={{ textDecoration: "none", color: "#fff" }}
              to={"/#contact"}
            >
              Become a client
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
