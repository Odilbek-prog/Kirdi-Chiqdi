import React from "react";
import "./Footer.scss";
import logo from "../../../public/kirdichiqdi.png";
import calendar from "../../../public/calendar.png";
import map from "../../../public/map.png";
import creative from "../../../public/creative.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__topwrapper">
          <NavLink to={"/"} className={"footer__linkhome"}>
            <img className="footer__logo" src={logo} alt="" />
          </NavLink>
          <div className="footer__work">
            <img src={calendar} alt="" />
            <p className="footer__text">9:00-17:00 du-ju</p>
          </div>
          <div className="footer__work">
            <img src={map} alt="" />
            <p className="footer__text">O'zbekiston barcha xududlarda</p>
          </div>
          <div className="footer__work">
            <img src={map} alt="" />
            <NavLink
              className={"footer__link"}
              to={"mailto:inoutadsagency@gmail.com"}
            >
              info@inoutgroup.uz inoutadsagency@gmail.com
            </NavLink>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <img src={creative} alt="" />
        <div className="footer__about">
          <img className="footer__logo2" src={logo} alt="" />
          <p className="footer__subtitle">Kirdi Chiqdi jamoasi</p>
        </div>
        <p>Mualliflik © huquqi 2014-2023 Barcha huquqlar himoyalangan</p>
      </div>
    </div>
  );
};

export default Footer;
