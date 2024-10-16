import React from "react";
import { useTranslation } from "react-i18next";
import "./Review.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import team1 from "../../../assets/team1.jpeg";
import team2 from "../../../assets/team2.jpeg";
import team5 from "../../../assets/team5.png";
import blues from "../../../assets/bluestar.png";
import grays from "../../../assets/graystar.png";

const Review = () => {
  const { t } = useTranslation();

  return (
    <div className="review" id="reviews">
      <div className="review__wrapper">
        <div className="review__desc">
          <h1 className="review__title">{t("reviews_title")}</h1>
          <button className="review__btn btn-13">
            <a
              className="cta"
              style={{ textDecoration: "none", color: "#fff" }}
              href={"#contact"}
            >
              {t("write_review_button")}
            </a>
          </button>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="video__swiper"
        >
          <SwiperSlide className="review__card">
            <div className="review__carddesc">
              <img src={team2} alt="" className="review__img" />
              <h4 className="review__title">Alisa</h4>
              <p className="review__date">12.09.2023 13:05</p>
              <p className="review__text">{t("alisa_review")}</p>
            </div>
            <div className="review__stars">
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
              <img src={grays} alt="" className="review__star" />
              <img src={grays} alt="" className="review__star" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="review__card">
            <div className="review__carddesc">
              <img src={team1} alt="" className="review__img" />
              <h4 className="review__title">Feruza</h4>
              <p className="review__date">5.06.2023 13:05</p>
              <p className="review__text">{t("feruza_review")}</p>
            </div>
            <div className="review__stars">
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
              <img src={grays} alt="" className="review__star" />
              <img src={grays} alt="" className="review__star" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="review__card">
            <div className="review__carddesc">
              <img src={team5} alt="" className="review__img" />
              <h4 className="review__title">Pem</h4>
              <p className="review__date">29.12.2022 13:05</p>
              <p className="review__text">nhn</p>
            </div>
            <div className="review__stars">
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="review__card">
            <div className="review__carddesc">
              <img src={team2} alt="" className="review__img" />
              <h4 className="review__title">Alisa</h4>
              <p className="review__date">12.09.2023 13:05</p>
              <p className="review__text">{t("alisa_review")}</p>
            </div>
            <div className="review__stars">
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
              <img src={grays} alt="" className="review__star" />
              <img src={grays} alt="" className="review__star" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="review__card">
            <div className="review__carddesc">
              <img src={team2} alt="" className="review__img" />
              <h4 className="review__title">Alisa</h4>
              <p className="review__date">12.09.2023 13:05</p>
              <p className="review__text">{t("alisa_review")}</p>
            </div>
            <div className="review__stars">
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
              <img src={blues} alt="" className="review__star" />
              <img src={grays} alt="" className="review__star" />
              <img src={grays} alt="" className="review__star" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
