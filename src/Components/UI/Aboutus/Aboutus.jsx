import React from "react";
import { useTranslation } from "react-i18next";
import "./Aboutus.scss";
import logo from "../../../../public/img/kirdichiqdi.png";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Aboutus = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutus">
      <div className="aboutus__wrapper">
        <img src={logo} alt="" className="aboutus__img" />
        <div className="aboutus__right">
          <div className="aboutus__desc">
            <h1 className="aboutus__title">{t("about_us_title")}</h1>
            <button className="aboutus__btn btn-13">
              <NavLink
                className="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/about"}
              >
                {t("learn_more_button")}
              </NavLink>
            </button>
          </div>
          <div className="about__static">
            <div className="about__stats">
              <CountUp end={3} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span className="countb">+</span>
              <p className="about__statext">{t("successful_teamwork")}</p>
            </div>
            <div className="about__stats">
              <CountUp end={24} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p className="about__statext">{t("work_in_company")}</p>
            </div>
            <div className="about__stats">
              <CountUp end={138} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p className="about__statext">{t("promoted_on_social_media")}</p>
            </div>
            <div className="about__stats">
              <CountUp end={336} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p className="about__statext">{t("developed_and_launched")}</p>
            </div>
            <div className="about__stats">
              <CountUp end={53} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p className="about__statext">{t("promoted_on_networks")}</p>
            </div>
            <div className="about__stats">
              <CountUp end={218} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p className="about__statext">{t("products_in_grafana")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
