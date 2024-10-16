import React from "react";
import leftb from "../assets/leftb.png";
import logo from "../assets/kirdichiqdi.png";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import tg from "../assets/telegram.png";
import what from "../assets/whatsapp.png";
import face from "../assets/face.png";
import inst from "../assets/ins.jpeg";
import yt from "../assets/yt.webp";
import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__wrapper">
        <NavLink className={"about__link"} to={"/"}>
          <img src={leftb} alt="" />
          {t("back")}
        </NavLink>
        <div className="about__main">
          <img src={logo} alt="Kirdi Chiqdi logo" className="about__img" />
          <div className="about__desc">
            <div className="about__titles">
              <h1 className="about__title">{t("aboutTitle")}</h1>
              <h1 className="about__subtitle">{t("aboutSubtitle")}</h1>
            </div>
            <p className="about__text">{t("aboutText1")}</p>
            <p className="about__text">{t("clearProfit")}</p>
            <p className="about__text">{t("aboutText2")}</p>
            <p className="about__text">{t("theRightChoice")}</p>
            <p className="about__text">{t("aboutText3")}</p>
            <p className="about__text">{t("aboutText4")}</p>
            <p className="about__text">{t("aboutText5")}</p>
          </div>
          <div className="about__work">
            <div className="about__titles">
              <h1 className="about__title">{t("ourStatistics")}</h1>
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
                <p className="about__statext">{t("successfulTeamwork")}</p>
              </div>
              <div className="about__stats">
                <CountUp end={24} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className="count" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className="about__statext">{t("workInCompany")}</p>
              </div>
              <div className="about__stats">
                <CountUp end={138} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className="count" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className="about__statext">{t("promotedOnSocialMedia")}</p>
              </div>
              <div className="about__stats">
                <CountUp end={336} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className="count" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className="about__statext">{t("developedAndLaunched")}</p>
              </div>
              <div className="about__stats">
                <CountUp end={53} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className="count" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className="about__statext">{t("productsInGrafana")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about__social">
          <p className="about__title">{t("findUsSocial")}</p>
          <div className="about__icons">
            <NavLink to={"https://t.me"}>
              <img src={tg} alt="Telegram" className="about__icon" />
            </NavLink>
            <NavLink to={"https://www.whatsapp.com/"}>
              <img src={what} alt="WhatsApp" className="about__icon" />
            </NavLink>
            <NavLink to={"https://www.facebook.com/"}>
              <img src={face} alt="Facebook" className="about__icon" />
            </NavLink>
            <NavLink to={"https://instagram.com"}>
              <img src={inst} alt="Instagram" className="about__icon" />
            </NavLink>
            <NavLink to={"https://youtube.com"}>
              <img src={yt} alt="YouTube" className="about__icon" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
