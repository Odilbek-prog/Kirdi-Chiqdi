import React from "react";
import "./Aboutus.scss";
import logo from "../../../../public/kirdichiqdi.png";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="aboutus__wrapper">
        <img src={logo} alt="" className="aboutus__img" />
        <div className="aboutus__right">
          <div className="aboutus__desc">
            <h1 className="aboutus__title">About Us</h1>
            <button class="aboutus__btn btn-13">
              <NavLink
                class="cta"
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/about"}
              >
                Learn more
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
              <p className="about__statext">Successful teamwork</p>
            </div>
            <div className="about__stats">
              <CountUp end={24} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p className="about__statext">Work in our company</p>
            </div>
            <div className="about__stats">
              <CountUp end={138} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p className="about__statext">Promoted on social media</p>
            </div>
            <div className="about__stats">
              <CountUp end={336} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p className="about__statext">Developed and launched</p>
            </div>
            <div className="about__stats">
              <CountUp end={53} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p className="about__statext">Promoted on social networks</p>
            </div>
            <div className="about__stats">
              <CountUp end={218} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span className="count" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p className="about__statext">products in grafana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
