import React from "react";
import "./Location.scss";
import inb from "../../../../public/inb.png";
import iny from "../../../../public/iny.png";
import inp from "../../../../public/inp.png";
import inr from "../../../../public/inr.png";
import ingray from "../../../../public/ingray.png";
import inw from "../../../../public/inw.png";
import ing from "../../../../public/ing.png";

const Location = () => {
  return (
    <div className="location">
      <div className="location__wrapper">
        <h1 className="location__title">Places for your advertising...</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.25298617416!2d69.2793667!3d41.28259745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YI!5e0!3m2!1sru!2s!4v1728644276563!5m2!1sru!2s"
          allowfullscreen=""
          className="map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="location__btns">
          <button className="location__btn">
            <img src={ing} alt="" className="location__icon" />
            <h3 className="location__text">All posters</h3>
          </button>
          <button className="location__btn">
            <img src={inb} alt="" className="location__icon" />
            <h3 className="location__text">Free</h3>
          </button>
          <button className="location__btn">
            <img src={inr} alt="" className="location__icon" />
            <h3 className="location__text">Busy until</h3>
          </button>
          <button className="location__btn">
            <img src={inb} alt="" className="location__icon" />
            <h3 className="location__text">By regions</h3>
          </button>
          <button className="location__btn">
            <img src={inb} alt="" className="location__icon" />
            <h3 className="location__text">Flagpoles</h3>
          </button>
          <button className="location__btn">
            <img src={iny} alt="" className="location__icon" />
            <h3 className="location__text">Billboards</h3>
          </button>
          <button className="location__btn">
            <img src={inp} alt="" className="location__icon" />
            <h3 className="location__text">Banner stand</h3>
          </button>
          <button className="location__btn">
            <img src={inr} alt="" className="location__icon" />
            <h3 className="location__text">Prismatrons</h3>
          </button>
          <button className="location__btn">
            <img src={ingray} alt="" className="location__icon" />
            <h3 className="location__text">Firewall</h3>
          </button>
          <button className="location__btn">
            <img src={inw} alt="" className="location__icon" />
            <h3 className="location__text">Cityformats</h3>
          </button>
          <button className="location__btn">
            <img src={ing} alt="" className="location__icon" />
            <h3 className="location__text">LED monitor</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
