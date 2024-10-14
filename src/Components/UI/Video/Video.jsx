import React from "react";
import "./Video.scss";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next"; // useTranslation qo'shildi

const Video = () => {
  const { t } = useTranslation(); // useTranslation qo'shildi

  return (
    <div className="video">
      <div className="video__wrapper">
        <div className="video__desc">
          <h1 className="video__title">{t("video")}</h1>{" "}
          {/* Tarjima qo'shildi */}
          <button className="video__btn btn-13">
            <NavLink
              className="cta"
              style={{ textDecoration: "none", color: "#fff" }}
              to="/allvideos"
            >
              {t("allVideos")} {/* Tarjima qo'shildi */}
            </NavLink>
          </button>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="video__swiper"
        >
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i className="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i className="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i className="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i className="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i className="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i className="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i className="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i className="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i className="fas fa-play"></i>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Video;
