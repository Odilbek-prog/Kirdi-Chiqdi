import React from "react";
import "./Team.scss";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import ins from "../../../../public/ins.jpeg";
import tg from "../../../../public/telegram.png";
import phone from "../../../../public/phoneb.png";
import team1 from "../../../../public/team1.jpeg";
import team2 from "../../../../public/team2.jpeg";
import team3 from "../../../../public/team3.png";
import team4 from "../../../../public/team4.png";
import team5 from "../../../../public/team5.png";
import team6 from "../../../../public/team6.jpeg";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Team = () => {
  return (
    <div className="team">
      <div className="team__wrapper">
        <div className="team__top">
          <div className="team__desc">
            <h2 className="team__title">Our team</h2>
            <p className="team__text">
              It is this team that makes your order quality , reliable, and safe
            </p>
          </div>
          <button className="team__btn btn-13">
            <NavLink
              className="cta"
              style={{ textDecoration: "none", color: "#fff" }}
              to={"/team"}
            >
              See the full list
            </NavLink>
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
              <h4 className="team__subtitle">Feruza</h4>
              <p className="team__text">Head of sales department</p>
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
            <button class="team__btn btn-13">
              <a
                class="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                Estimate
              </a>
            </button>
          </SwiperSlide>
          <SwiperSlide className="team__card">
            <Zoom>
              <img src={team2} alt="" className="team__img" />
            </Zoom>
            <div className="team__carddesc">
              <h4 className="team__subtitle">Alisa</h4>
              <p className="team__text">Designer</p>
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
            <button class="team__btn btn-13">
              <a
                class="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                Estimate
              </a>
            </button>
          </SwiperSlide>
          <SwiperSlide className="team__card">
            <Zoom>
              <img src={team3} alt="" className="team__img" />
            </Zoom>
            <div className="team__carddesc">
              <h4 className="team__subtitle">Mira</h4>
              <p className="team__text">Android Developer</p>
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
            <button class="team__btn btn-13">
              <a
                class="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                Estimate
              </a>
            </button>
          </SwiperSlide>
          <SwiperSlide className="team__card">
            <Zoom>
              <img src={team4} alt="" className="team__img" />
            </Zoom>
            <div className="team__carddesc">
              <h4 className="team__subtitle">Lisa</h4>
              <p className="team__text">Secretar</p>
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
            <button class="team__btn btn-13">
              <a
                class="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                Estimate
              </a>
            </button>
          </SwiperSlide>
          <SwiperSlide className="team__card">
            <Zoom>
              <img src={team5} alt="" className="team__img" />
            </Zoom>
            <div className="team__carddesc">
              <h4 className="team__subtitle">Pem</h4>
              <p className="team__text">Product Manager</p>
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
            <button class="team__btn btn-13">
              <a
                class="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                Estimate
              </a>
            </button>
          </SwiperSlide>
          <SwiperSlide className="team__card">
            <Zoom>
              <img src={team6} alt="" className="team__img" />
            </Zoom>
            <div className="team__carddesc">
              <h4 className="team__subtitle">Nasha</h4>
              <p className="team__text">Bloger</p>
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
            <button class="team__btn btn-13">
              <a
                class="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                href={"#contact"}
              >
                Estimate
              </a>
            </button>
          </SwiperSlide>
        </Swiper>
        <div className="team__num">
          <h1 className="team__title">We're in Numbers</h1>
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
              <p className="about__statext">The number of employees</p>
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
              <p className="about__statext">launched advertising campaigns</p>
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
              <p className="about__statext">successful cases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
