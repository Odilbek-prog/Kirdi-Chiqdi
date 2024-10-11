import React from "react";
import "./Intro.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import { NavLink } from "react-router-dom";
import banner from "../../../../public/banner.jpeg";
import hog from "../../../../public/hog.jpeg";

const Intro = () => {
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
            <SwiperSlide>Full cycle advertising agency</SwiperSlide>
            <SwiperSlide>Join Inout Advertising Agency</SwiperSlide>
          </Swiper>
          <button class="btn-13">
            <NavLink
              class="cta"
              style={{ textDecoration: "none", color: "#fff" }}
              to={"#contact"}
            >
              Get consult
            </NavLink>
          </button>
        </div>
        <Swiper
          // effect={"cube"}
          // cubeEffect={{
          //   shadow: true,
          //   slideShadows: true,
          //   shadowOffset: 20,
          //   shadowScale: 0.94,
          // }}
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
