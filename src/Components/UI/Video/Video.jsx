import React from "react";
import "./Video.scss";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Video = () => {
  return (
    <div className="video">
      <div className="video__wrapper">
        <div className="video__desc">
          <h1 className="video__title">Video</h1>
          <button class="video__btn btn-13">
            <NavLink
              class="cta"
              style={{ textDecoration: "none", color: "#fff" }}
              to={"/allvideos"}
            >
              All videos
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
              <i class="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="video__banner">
            <a className="video__pause">
              <i class="fas fa-play"></i>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Video;
