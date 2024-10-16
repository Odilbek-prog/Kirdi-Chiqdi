import React from "react";
import "./What.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import bus from "../../../assets/bus.jpeg";
import cat from "../../../assets/cat.png";
import uchd from "../../../assets/3d.jpeg";
import nike from "../../../assets/nike.jpeg";
import dia from "../../../assets/dia.jpeg";
import isrof from "../../../assets/isrof.jpeg";
import banner3 from "../../../assets/banner2.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // useTranslation qo'shildi

const What = () => {
  const { t } = useTranslation(); // useTranslation qo'shildi

  return (
    <div className="what">
      <div className="what__wrapper">
        <h1 className="what__title">{t("whatDoWeDo")}</h1>{" "}
        {/* Tarjima qo'shildi */}
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="what__swiper"
        >
          <SwiperSlide className="what__card">
            <img src={bus} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("outsideOnBus")}</h2>{" "}
              {/* Tarjima qo'shildi */}
              <p className="what__text">
                {t("bannerOnCityBuses")} {/* Tarjima qo'shildi */}
              </p>
              <button className="video__btn btn-13">
                <a
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/#contact"
                >
                  {t("contact")} {/* Tarjima qo'shildi */}
                </a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="what__card">
            <img src={cat} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("ledScreenAdvertising")}</h2>{" "}
              {/* Tarjima qo'shildi */}
              <p className="what__text">
                {t("ledScreenText")} {/* Tarjima qo'shildi */}
              </p>
              <button className="video__btn btn-13">
                <a
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/#contact"
                >
                  {t("contact")} {/* Tarjima qo'shildi */}
                </a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="what__card">
            <img src={uchd} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("advertisingService")}</h2>{" "}
              {/* Tarjima qo'shildi */}
              <p className="what__text">
                {t("serviceDescription")} {/* Tarjima qo'shildi */}
              </p>
              <button className="video__btn btn-13">
                <a
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/#contact"
                >
                  {t("contact")} {/* Tarjima qo'shildi */}
                </a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="what__card">
            <img src={nike} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("hdScreen")}</h2>{" "}
              {/* Tarjima qo'shildi */}
              <p className="what__text">
                {t("hdMonitorDescription")} {/* Tarjima qo'shildi */}
              </p>
              <button className="video__btn btn-13">
                <a
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/#contact"
                >
                  {t("contact")} {/* Tarjima qo'shildi */}
                </a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="what__card">
            <img src={dia} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("fourKMonitor")}</h2>{" "}
              {/* Tarjima qo'shildi */}
              <p className="what__text">
                {t("fourKMonitorDescription")} {/* Tarjima qo'shildi */}
              </p>
              <button className="video__btn btn-13">
                <a
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/#contact"
                >
                  {t("contact")} {/* Tarjima qo'shildi */}
                </a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="what__card">
            <img src={isrof} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("helloWorld")}</h2>{" "}
              {/* Tarjima qo'shildi */}
              <p className="what__text">
                {t("marsDescription")} {/* Tarjima qo'shildi */}
              </p>
              <button className="video__btn btn-13">
                <a
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/#contact"
                >
                  {t("contact")} {/* Tarjima qo'shildi */}
                </a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="what__card">
            <img src={banner3} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("roadsideAdvertising")}</h2>{" "}
              {/* Tarjima qo'shildi */}
              <p className="what__text">
                {t("roadsideDescription")} {/* Tarjima qo'shildi */}
              </p>
              <button className="video__btn btn-13">
                <a
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/#contact"
                >
                  {t("contact")} {/* Tarjima qo'shildi */}
                </a>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default What;
