import React from "react";
import leftb from "../../public/leftb.png";
import logo from "../../public/kirdichiqdi.png";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import tg from "../../public/telegram.png";
import what from "../../public/whatsapp.png";
import face from "../../public/face.png";
import inst from "../../public/ins.jpeg";
import yt from "../../public/yt.webp";
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <NavLink className={"about__link"} to={"/"}>
          <img src={leftb} alt="" />
          Back
        </NavLink>
        <div className="about__main">
          <img src={logo} alt="" className="about__img" />
          <div className="about__desc">
            <div className="about__titles">
              <h1 className="about__title">About</h1>
              <h1 className="about__subtitle">Us</h1>
            </div>
            <p className="about__text">
              InOut offers a wide range of advertising placement services, the
              most popular of which is outdoor advertising in Tashkent. You can
              order and place ads on LED screens, as well as lightboxes and
              banners. Advertising is done as quickly as possible, guaranteed
              and at an affordable price.
            </p>
            <p className="about__text">CLEAR PROFIT</p>
            <p className="about__text">
              Outdoor advertising is a cheap and very effective way to provide
              the target audience with the necessary information. Using a
              business card to provide initial information will help you capture
              the attention of your target audience. The use of LED screens as
              outdoor advertising is one of the most promising formats, which at
              the same time shows the high status of the company or organization
              that advertises its goods (services).
            </p>
            <p className="about__text">THE RIGHT CHOICE</p>
            <p className="about__text">
              Every entrepreneur who has opened or expanded his business in
              Tashkent should find a company that will help him in the
              production of high-quality, modern, high-tech outdoor advertising.
              Our team has a sufficient level of professionalism, which allows
              us to solve problems of any complexity in the shortest possible
              time. We can produce any advertising products: from printing
              business cards to outdoor advertising on ice screens. The
              company's clients are guaranteed the following:
            </p>
            <p className="about__text">High quality finished products.</p>
            <p className="about__text">Order fulfillment efficiency.</p>
            <p className="about__text">Affordable price.</p>
            <p className="about__text">
              We use the latest advanced technologies and high-quality materials
              in the preparation of outdoor advertising. The wishes of the
              customers are definitely taken into account.
            </p>
            <p className="about__text">
              We are ready to do the full range of work, from the development of
              the concept and design of outdoor advertising, to placement on the
              LED display, to commissioning.
            </p>
          </div>
          <div className="about__work">
            <div className="about__titles">
              <h1 className="about__title">Our</h1>
              <h1 className="about__subtitle">brief statistics</h1>
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
        <div className="about__social">
          <p className="about__title">Find us on social media</p>
          <div className="about__icons">
            <NavLink to={"https://t.me"}>
              <img src={tg} alt="" className="about__icon" />
            </NavLink>
            <NavLink to={"https://www.whatsapp.com/"}>
              <img src={what} alt="" className="about__icon" />
            </NavLink>
            <NavLink to={"https://www.facebook.com/"}>
              <img src={face} alt="" className="about__icon" />
            </NavLink>
            <NavLink to={"https://instagram.com"}>
              <img src={inst} alt="" className="about__icon" />
            </NavLink>
            <NavLink to={"https://youtube.com"}>
              <img src={yt} alt="" className="about__icon" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
