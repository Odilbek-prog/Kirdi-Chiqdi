import React from "react";
import "./What.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import bus from "../../../../public/bus.jpeg";
import cat from "../../../../public/cat.png";
import uchd from "../../../../public/3d.jpeg";
import nike from "../../../../public/nike.jpeg";
import dia from "../../../../public/dia.jpeg";
import isrof from "../../../../public/isrof.jpeg";
import banner3 from "../../../../public/banner2.png";
import { NavLink } from "react-router-dom";

const What = () => {
  return (
    <div className="what">
      <div className="what__wrapper">
        <h1 className="what__title">What do we do?</h1>
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
              <h2 className="what__cardtitle">Avtobusda tashqi tomon</h2>
              <p className="what__text">
                We will place your banner on the outside of City Buses Branding
                of the left sides of the buses "MAN" and...
              </p>
              <button class="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/services/1"}
                >
                  More
                </NavLink>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="what__card">
            <img src={cat} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">Advertising on LED screens</h2>
              <p className="what__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt nisi placeat rerum quod atque fuga odit magni modi
                ullam ratione...
              </p>
              <button class="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/services/2"}
                >
                  More
                </NavLink>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="what__card">
            <img src={uchd} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">Advertising service</h2>
              <p className="what__text">
                The company is a team of professionals specializing in providing
                the widest range of services in the field of outdoor...
              </p>
              <button class="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/services/3"}
                >
                  More
                </NavLink>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="what__card">
            <img src={nike} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">HD screen</h2>
              <p className="what__text">
                Z-Edge 4K Monitor, U28I4K 28inch IPS Monitor Ultra HD 3840x2160
                IPS Gaming Monitor, 300 cd/m², 60Hz...
              </p>
              <button class="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/services/4"}
                >
                  More
                </NavLink>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="what__card">
            <img src={dia} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">4K monitor</h2>
              <p className="what__text">
                Z-Edge U27P4K 27-дюймовый игровой монитор Ultra HD 4K,
                частота...
              </p>
              <button class="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/services/5"}
                >
                  More
                </NavLink>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="what__card">
            <img src={isrof} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">Hello world</h2>
              <p className="what__text">
                In fiction, the planet Mars, fourth from the Sun, has appeared
                as a setting in at least 5,000 works, portrayed differently as
                planetary...
              </p>
              <button class="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/services/6"}
                >
                  More
                </NavLink>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="what__card">
            <img src={banner3} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">On the side of the road</h2>
              <p className="what__text">
                In Gabon, President Ali Bongo Ondimba (pictured) is deposed by a
                military coup shortly after his re-election. A business jet ...
              </p>
              <button class="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/services/6"}
                >
                  More
                </NavLink>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default What;
