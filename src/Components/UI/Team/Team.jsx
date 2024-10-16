import React from "react";
import { useTranslation } from "react-i18next";
import "./Team.scss";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import ins from "../../../assets/ins.jpeg";
import tg from "../../../assets/telegram.png";
import phone from "../../../assets/phoneb.png";
import team1 from "../../../assets/team1.jpeg";
import team2 from "../../../assets/team2.jpeg";
import team3 from "../../../assets/team3.png";
import team4 from "../../../assets/team4.png";
import team5 from "../../../assets/team5.png";
import team6 from "../../../assets/team6.jpeg";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Team = () => {
  const { t } = useTranslation();

  return (
    <div className="team">
      <div className="team__wrapper">
        <div className="team__top">
          <div className="team__desc">
            <h2 className="team__title">{t("title")}</h2>
            <p className="team__text">{t("description")}</p>
          </div>
          <button className="team__btn btn-13">
            <a
              className="cta"
              style={{ textDecoration: "none", color: "#fff" }}
              href="/#contact"
            >
              {t("contact")}
            </a>
          </button>
        </div>
        <Swiper
          slidesPerView={4}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="team__swiper"
        >
          <SwiperSlide className="team__card">
            <Zoom>
              <img src={team1} alt="" className="team__img" />
            </Zoom>
            <div className="team__carddesc">
              <h4 className="team__subtitle">{t("member1_name")}</h4>
              <p className="team__text">{t("member1_role")}</p>
            </div>
            <div className="team__icons">
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://instagram.com"}
              >
                <img src={ins} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://telegram.com"}
              >
                <img src={tg} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"tel:+998999899519"}
              >
                <img src={phone} alt="" className="team__icon" />
              </NavLink>
            </div>
            <button className="team__btn btn-13">
              <a
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                {t("estimate")}
              </a>
            </button>
          </SwiperSlide>
          <SwiperSlide className="team__card">
            <Zoom>
              <img src={team2} alt="" className="team__img" />
            </Zoom>
            <div className="team__carddesc">
              <h4 className="team__subtitle">{t("member2_name")}</h4>
              <p className="team__text">{t("member2_role")}</p>
            </div>
            <div className="team__icons">
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://instagram.com"}
              >
                <img src={ins} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://telegram.com"}
              >
                <img src={tg} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"tel:+998999899519"}
              >
                <img src={phone} alt="" className="team__icon" />
              </NavLink>
            </div>
            <button className="team__btn btn-13">
              <a
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                {t("estimate")}
              </a>
            </button>
          </SwiperSlide>
          <SwiperSlide className="team__card">
            <Zoom>
              <img src={team3} alt="" className="team__img" />
            </Zoom>
            <div className="team__carddesc">
              <h4 className="team__subtitle">{t("member3_name")}</h4>
              <p className="team__text">{t("member3_role")}</p>
            </div>
            <div className="team__icons">
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://instagram.com"}
              >
                <img src={ins} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://telegram.com"}
              >
                <img src={tg} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"tel:+998999899519"}
              >
                <img src={phone} alt="" className="team__icon" />
              </NavLink>
            </div>
            <button className="team__btn btn-13">
              <a
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                {t("estimate")}
              </a>
            </button>
          </SwiperSlide>
          <SwiperSlide className="team__card">
            <Zoom>
              <img src={team4} alt="" className="team__img" />
            </Zoom>
            <div className="team__carddesc">
              <h4 className="team__subtitle">{t("member4_name")}</h4>
              <p className="team__text">{t("member4_role")}</p>
            </div>
            <div className="team__icons">
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://instagram.com"}
              >
                <img src={ins} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://telegram.com"}
              >
                <img src={tg} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"tel:+998999899519"}
              >
                <img src={phone} alt="" className="team__icon" />
              </NavLink>
            </div>
            <button className="team__btn btn-13">
              <a
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                {t("estimate")}
              </a>
            </button>
          </SwiperSlide>
          <SwiperSlide className="team__card">
            <Zoom>
              <img src={team5} alt="" className="team__img" />
            </Zoom>
            <div className="team__carddesc">
              <h4 className="team__subtitle">{t("member5_name")}</h4>
              <p className="team__text">{t("member5_role")}</p>
            </div>
            <div className="team__icons">
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://instagram.com"}
              >
                <img src={ins} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://telegram.com"}
              >
                <img src={tg} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"tel:+998999899519"}
              >
                <img src={phone} alt="" className="team__icon" />
              </NavLink>
            </div>
            <button className="team__btn btn-13">
              <a
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                {t("estimate")}
              </a>
            </button>
          </SwiperSlide>
          <SwiperSlide className="team__card">
            <Zoom>
              <img src={team6} alt="" className="team__img" />
            </Zoom>
            <div className="team__carddesc">
              <h4 className="team__subtitle">{t("member6_name")}</h4>
              <p className="team__text">{t("member6_role")}</p>
            </div>
            <div className="team__icons">
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://instagram.com"}
              >
                <img src={ins} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"https://telegram.com"}
              >
                <img src={tg} alt="" className="team__icon" />
              </NavLink>
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"tel:+998999899519"}
              >
                <img src={phone} alt="" className="team__icon" />
              </NavLink>
            </div>
            <button className="team__btn btn-13">
              <a
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                {t("estimate")}
              </a>
            </button>
          </SwiperSlide>
        </Swiper>
        <div className="team__num">
          <h1 className="team__title">{t("we_are_in_numbers")}</h1>
          <div className="team__static">
            <div className="team__stats">
              <CountUp end={20} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count team__count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span className="countb">+</span>
              <p className="about__statext">{t("employees")}</p>
            </div>
            <div className="team__stats">
              <CountUp end={1672} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count team__count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span className="countb">+</span>
              <p className="about__statext">{t("campaigns_launched")}</p>
            </div>
            <div className="team__stats">
              <CountUp end={1660} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count team__count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span className="countb">+</span>
              <p className="about__statext">{t("successful_cases")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
