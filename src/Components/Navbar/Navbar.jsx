import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.scss";
import logo from "../../../public/img/kirdichiqdi.png";
import tg from "../../../public/img/telegram.png";
import download from "../../../public/img/download.png";
import chat from "../../../public/img/chat.png";
import down from "../../../public/img/down.png";
import right from "../../../public/img/right.png";
import search from "../../../public/img/search.png";
import clock from "../../../public/img/clock.png";
import phone from "../../../public/img/phone.png";
import heart from "../../../public/img/heart.png";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
import file from "../../assets/file.pdf";
import sun from "../../../public/img/Sun.svg";
import moon from "../../../public/img/Moon.svg";

const fixed = document.getElementsByClassName("fixed");

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Sayt yuklanganda tilni localStorage'dan olish
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      i18n.changeLanguage(savedLang); // Sayt yuklanganda saqlangan tilni tiklash
    }
  }, [i18n]);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      fixed[0].classList.add("fixed__active");
    } else {
      fixed[0].classList.remove("fixed__active");
    }
  });

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const con = document.getElementById("con");
    if (isDark) {
      con.classList.add("darkmode");
    } else {
      con.classList.remove("darkmode");
    }
  }, [isDark]);

  const handledark = () => {
    setIsDark(!isDark);
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Tanlangan tilni localStorage ga saqlash
  };

  return (
    <div className="navbar">
      <div className="topnav">
        <div className="topnav__wrapper">
          <div className="topnav__left">
            <img className="topnav__logo" src={logo} alt="" />
            <div className="topnav__desc">
              <button className="button-85" role="button">
                <img className="logos" src={tg} alt="" />
                <a
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  href="https://telegram.com"
                >
                  {t("telegram")}
                </a>
              </button>
              <button className="button-85" role="button">
                <img className="logos" src={download} alt="" />

                <a
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  href={file}
                  download
                >
                  {t("presentation")} (35 MB)
                </a>
              </button>
              <button className="button-85" role="button">
                <img className="logos" src={chat} alt="" />
                <a
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  href="/#contact"
                >
                  {t("submitApplication")}
                </a>
              </button>
            </div>
          </div>
          {/* Tilni o‘zgartirish dropdown */}
          <select
            className="topnav__lang"
            value={i18n.language}
            onChange={(e) => {
              changeLang(e.target.value);
            }}
          >
            <option value="uz">UZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </div>
      <div className="fixed">
        <div className="fixed__wrapper">
          <div className="fixed__left">
            <ul className="fixed__ul">
              <li className="fixed__list">
                <NavLink className="fixed__link" to="/">
                  {t("home")}
                </NavLink>
              </li>
              <li className="fixed__list dropdown1">
                <p className="fixed__link">
                  {t("ourServices")}{" "}
                  <img className="arrows" src={down} alt="" />
                </p>
                <div className="dropdown-content1">
                  <p className="fixed__link dropdown2">
                    {t("services")}{" "}
                    <img className="arrows" src={right} alt="" />
                    <div className="dropdown-content2">
                      <p className="fixed__link dropdown3">
                        {t("options")}
                        <img className="arrows" src={right} alt="" />
                        <div className="dropdown-content3">
                          <NavLink to={"/services"} className={"fixed__link"}>
                            {t("advertisingInsideSalon")}
                          </NavLink>
                          <hr />

                          <NavLink to={"/services"} className={"fixed__link"}>
                            {t("advertisingOutsideBus")}
                          </NavLink>
                          <hr />

                          <NavLink to={"/services"} className={"fixed__link"}>
                            {t("openData")}
                          </NavLink>
                        </div>
                      </p>
                      <hr />

                      <NavLink to={"/services"} className={"fixed__link"}>
                        {t("inTunnels")}
                      </NavLink>
                      <hr />

                      <NavLink to={"/services"} className={"fixed__link"}>
                        {t("outsideSubway")}
                      </NavLink>
                      <hr />

                      <NavLink to={"/services"} className={"fixed__link"}>
                        {t("insideSubway")}
                      </NavLink>
                      <hr />
                    </div>
                  </p>
                  <hr />
                  <NavLink to={"/services"} className={"fixed__link"}>
                    {t("onTheWay")}
                  </NavLink>
                  <hr />
                  <NavLink to={"/services"} className={"fixed__link"}>
                    {t("onTheBridges")}
                  </NavLink>
                  <hr />
                  <NavLink to={"/services"} className={"fixed__link"}>
                    {t("ledScreen")}
                  </NavLink>
                  <hr />
                  <p className="fixed__link dropdown4">
                    {t("advertisingOnHighway")}{" "}
                    <img className="arrows" src={right} alt="" />
                    <div className="dropdown-content4">
                      <NavLink to={"/services"} className={"fixed__link"}>
                        {t("advertisingInCopiers")}
                      </NavLink>
                      <hr />

                      <NavLink to={"/services"} className={"fixed__link"}>
                        {t("advertisingInStall")}
                      </NavLink>
                      <hr />

                      <NavLink to={"/services"} className={"fixed__link"}>
                        {t("advertisingOnPass")}
                      </NavLink>
                      <hr />
                      <p className="fixed__link dropdown5">
                        {t("television")}{" "}
                        <img className="arrows" src={right} alt="" />
                        <div className="dropdown-content5">
                          <NavLink to={"/services"} className={"fixed__link"}>
                            {t("tvChannels")}
                          </NavLink>
                        </div>
                      </p>
                    </div>
                  </p>
                </div>
              </li>
              <li className="fixed__list">
                <NavLink className="fixed__link" to="/about">
                  {t("aboutUs")}
                </NavLink>
              </li>
              <li className="fixed__list">
                <a className="fixed__link" href="/#contact">
                  {t("contact")}
                </a>
              </li>
              <li className="fixed__list">
                <NavLink className="fixed__link" to="/jobs">
                  {t("vacancies")}
                </NavLink>
              </li>
              <li className="fixed__list">
                <a className="fixed__link" href="/#reviews">
                  {t("reviews")}
                </a>
              </li>
            </ul>
            <form className="fixed__form">
              <img className="fixed__searchicon" src={search} alt="" />
              <ReactTyped
                strings={[
                  t("advertisementOnBillboards"),
                  t("advertisementOnBuses"),
                  t("advertisementOnLEDscreens"),
                ]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
              >
                <input className="fixed__search" type="text" />
              </ReactTyped>
            </form>
          </div>
          <div className="fixed__right">
            <div className="fixed__about">
              <div className="fixed__top">
                <img src={clock} alt="" className="fixed__icon" />
                <p className="fixed__text">9:00-17:00 Mon-Fri</p>
              </div>
              <div className="fixed__bottom">
                <img src={phone} alt="" className="fixed__icon" />
                <NavLink className="fixed__text" to={"tel:+998 55 201 90 10"}>
                  +998 55 201 90 10
                </NavLink>
              </div>
            </div>
            <div className="fixed__btns">
              <div className="dark_mode">
                <input
                  className="dark_mode_input"
                  type="checkbox"
                  id="darkmode-toggle"
                  checked={isDark}
                  onChange={handledark}
                />
                <label className="dark_mode_label" htmlFor="darkmode-toggle">
                  <img src={sun} alt="" className="sun" />
                  <img src={moon} alt="" className="moon" />
                </label>
              </div>
              <button className="fixed__btn" role="button">
                <img className="fixed__logos" src={heart} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
