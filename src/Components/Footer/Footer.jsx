import React from "react";
import "./Footer.scss";
import logo from "../../assets/kirdichiqdi.png";
import calendar from "../../assets/calendar.png";
import map from "../../assets/map.png";
import creative from "../../assets/creative.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__topwrapper">
          <NavLink to={"/"} className={"footer__linkhome"}>
            <img className="footer__logo" src={logo} alt={t("logoAlt")} />
          </NavLink>
          <div className="footer__work">
            <img src={calendar} alt={t("calendarAlt")} />
            <p className="footer__text">{t("workHours")}</p>
          </div>
          <div className="footer__work">
            <img src={map} alt={t("mapAlt")} />
            <p className="footer__text">{t("uzbekistan")}</p>
          </div>
          <div className="footer__work">
            <img src={map} alt={t("mapAlt")} />
            <NavLink
              className={"footer__link"}
              to={"mailto:inoutadsagency@gmail.com"}
            >
              {t("email")}
            </NavLink>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <img src={creative} alt={t("creativeAlt")} />
        <div className="footer__about">
          <img className="footer__logo2" src={logo} alt={t("logoAlt")} />
          <p className="footer__subtitle">{t("teamName")}</p>
        </div>
        <p>{t("copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;
