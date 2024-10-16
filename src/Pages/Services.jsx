import React from "react";
import { NavLink } from "react-router-dom";
import bus from "../assets/bus.jpeg";
import cat from "../assets/cat.png";
import uchd from "../assets/3d.jpeg";
import nike from "../assets/nike.jpeg";
import dia from "../assets/dia.jpeg";
import isrof from "../assets/isrof.jpeg";
import banner3 from "../assets/banner2.png";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services">
      <div className="services__wrapper">
        <h1 className="services__title">{t("servicesTitle")}</h1>
        <div className="services__cards">
          <div className="what__card">
            <img src={bus} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("busAdvertising")}</h2>
              <p className="what__text">{t("busDescription")}</p>
              <button className="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
          <div className="what__card">
            <img src={cat} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("ledAdvertising")}</h2>
              <p className="what__text">{t("ledDescription")}</p>
              <button className="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
          <div className="what__card">
            <img src={uchd} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("advertisingService")}</h2>
              <p className="what__text">{t("serviceDescription")}</p>
              <button className="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
          <div className="what__card">
            <img src={nike} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("hdScreen")}</h2>
              <p className="what__text">{t("hdDescription")}</p>
              <button className="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
          <div className="what__card">
            <img src={dia} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("fourKMonitor")}</h2>
              <p className="what__text">{t("fourKDescription")}</p>
              <button className="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
          <div className="what__card">
            <img src={isrof} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("helloWorld")}</h2>
              <p className="what__text">{t("helloWorldDescription")}</p>
              <button className="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
          <div className="what__card">
            <img src={banner3} alt="" />
            <div className="what__desc">
              <h2 className="what__cardtitle">{t("roadSide")}</h2>
              <p className="what__text">{t("roadSideDescription")}</p>
              <button className="video__btn btn-13">
                <NavLink
                  className="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
