import React from "react";
import "./Location.scss";
import inb from "../../../assets/inb.png";
import iny from "../../../assets/iny.png";
import inp from "../../../assets/inp.png";
import inr from "../../../assets/inr.png";
import ingray from "../../../assets/ingray.png";
import inw from "../../../assets/inw.png";
import ing from "../../../assets/ing.png";
import { useTranslation } from "react-i18next"; // useTranslation qo'shildi

const Location = () => {
  const { t } = useTranslation(); // useTranslation qo'shildi

  return (
    <div className="location">
      <div className="location__wrapper">
        <h1 className="location__title">{t("placesForYourAdvertising")}</h1>{" "}
        {/* Tarjima qo'shildi */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.25298617416!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YI!5e0!3m2!1sru!2s!4v1728644276563!5m2!1sru!2s"
          allowFullScreen=""
          className="map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="location__btns">
          <button className="location__btn">
            <img src={ing} alt="" className="location__icon" />
            <h3 className="location__text">{t("allPosters")}</h3>{" "}
            {/* Tarjima qo'shildi */}
          </button>
          <button className="location__btn">
            <img src={inb} alt="" className="location__icon" />
            <h3 className="location__text">{t("free")}</h3>{" "}
            {/* Tarjima qo'shildi */}
          </button>
          <button className="location__btn">
            <img src={inr} alt="" className="location__icon" />
            <h3 className="location__text">{t("busyUntil")}</h3>{" "}
            {/* Tarjima qo'shildi */}
          </button>
          <button className="location__btn">
            <img src={inb} alt="" className="location__icon" />
            <h3 className="location__text">{t("byRegions")}</h3>{" "}
            {/* Tarjima qo'shildi */}
          </button>
          <button className="location__btn">
            <img src={inb} alt="" className="location__icon" />
            <h3 className="location__text">{t("flagpoles")}</h3>{" "}
            {/* Tarjima qo'shildi */}
          </button>
          <button className="location__btn">
            <img src={iny} alt="" className="location__icon" />
            <h3 className="location__text">{t("billboards")}</h3>{" "}
            {/* Tarjima qo'shildi */}
          </button>
          <button className="location__btn">
            <img src={inp} alt="" className="location__icon" />
            <h3 className="location__text">{t("bannerStand")}</h3>{" "}
            {/* Tarjima qo'shildi */}
          </button>
          <button className="location__btn">
            <img src={inr} alt="" className="location__icon" />
            <h3 className="location__text">{t("prismatrons")}</h3>{" "}
            {/* Tarjima qo'shildi */}
          </button>
          <button className="location__btn">
            <img src={ingray} alt="" className="location__icon" />
            <h3 className="location__text">{t("firewall")}</h3>{" "}
            {/* Tarjima qo'shildi */}
          </button>
          <button className="location__btn">
            <img src={inw} alt="" className="location__icon" />
            <h3 className="location__text">{t("cityformats")}</h3>{" "}
            {/* Tarjima qo'shildi */}
          </button>
          <button className="location__btn">
            <img src={ing} alt="" className="location__icon" />
            <h3 className="location__text">{t("ledMonitor")}</h3>{" "}
            {/* Tarjima qo'shildi */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
