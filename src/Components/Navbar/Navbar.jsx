import React, { useEffect } from "react";
import "./Navbar.scss";
import logo from "../../../public/kirdichiqdi.png";
import tg from "../../../public/telegram.png";
import download from "../../../public/download.png";
import chat from "../../../public/chat.png";
import down from "../../../public/down.png";
import right from "../../../public/right.png";
import search from "../../../public/search.png";
import clock from "../../../public/clock.png";
import phone from "../../../public/phone.png";
import moon from "../../../public/moon.png";
import heart from "../../../public/heart.png";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
import file from "../../assets/file.pdf";

const fixed = document.getElementsByClassName("fixed");

const Navbar = () => {
  // let dark = localStorage.getItem("dark");

  // useEffect(() => {
  //   dark = localStorage.getItem(dark);
  // }, [localStorage.getItem(dark)]);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      fixed[0].classList.add("fixed__active");
    } else {
      fixed[0].classList.remove("fixed__active");
    }
  });

  // const handleDark = () => {
  //   if (dark === true) {
  //     localStorage.setItem("dark", false);
  //     dark = false;
  //   } else {
  //     localStorage.setItem("dark", true);
  //     dark = true;
  //   }
  // };

  return (
    <div className="navbar">
      <div className="topnav">
        <div className="topnav__wrapper">
          <div className="topnav__left">
            <img className="topnav__logo" src={logo} alt="" />
            <div className="topnav__desc">
              <button className="button-85" role="button">
                <img className="logos" src={tg} alt="" />
                Telegram
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
                  Presentation (35 mb)
                </a>
              </button>
              <button className="button-85" role="button">
                <img className="logos" src={chat} alt="" />
                Submit your application
              </button>
            </div>
          </div>
          <select className="topnav__lang">
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
                  Home
                </NavLink>
              </li>
              <li class="fixed__list dropdown1">
                <p className="fixed__link">
                  Our services <img className="arrows" src={down} alt="" />
                </p>
                <div class="dropdown-content1">
                  <p className="fixed__link dropdown2">
                    Services <img className="arrows" src={right} alt="" />
                    <div class="dropdown-content2">
                      <p className="fixed__link dropdown3">
                        Options
                        <img className="arrows" src={right} alt="" />
                        <div class="dropdown-content3">
                          <NavLink className={"fixed__link"}>
                            Advertising inside the salon
                          </NavLink>
                          <hr />

                          <NavLink className={"fixed__link"}>
                            Advertising outside the bus
                          </NavLink>
                          <hr />

                          <NavLink className={"fixed__link"}>
                            Ochiq ma’lumotlar
                          </NavLink>
                        </div>
                      </p>
                      <hr />

                      <NavLink className={"fixed__link"}>
                        In the tunnels
                      </NavLink>
                      <hr />

                      <NavLink className={"fixed__link"}>
                        Outside the subway
                      </NavLink>
                      <hr />

                      <NavLink className={"fixed__link"}>
                        Inside the subway
                      </NavLink>
                      <hr />
                    </div>
                  </p>
                  <hr />
                  <NavLink to={"/services"} className={"fixed__link"}>
                    On the way
                  </NavLink>
                  <hr />
                  <NavLink to={"/services"} className={"fixed__link"}>
                    On the bridges
                  </NavLink>
                  <hr />
                  <NavLink to={"/services"} className={"fixed__link"}>
                    Led screen
                  </NavLink>
                  <hr />
                  <p className="fixed__link dropdown4">
                    Advertising on the highway{" "}
                    <img className="arrows" src={right} alt="" />
                    <div class="dropdown-content4">
                      <NavLink to={"/services"} className={"fixed__link"}>
                        Advertising in copiers
                      </NavLink>
                      <hr />

                      <NavLink to={"/services"} className={"fixed__link"}>
                        Advertising in the stall
                      </NavLink>
                      <hr />

                      <NavLink to={"/services"} className={"fixed__link"}>
                        advertising on the pass
                      </NavLink>
                      <hr />
                      <p className="fixed__link dropdown5">
                        telvediniya
                        <img className="arrows" src={right} alt="" />
                        <div class="dropdown-content5">
                          <NavLink to={"/services"} className={"fixed__link"}>
                            telekanallar
                          </NavLink>
                        </div>
                      </p>
                    </div>
                  </p>
                </div>
              </li>
              <li className="fixed__list">
                <NavLink className="fixed__link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="fixed__list">
                <NavLink className="fixed__link" to="/#contact">
                  Contact
                </NavLink>
              </li>
              <li className="fixed__list">
                <NavLink className="fixed__link" to="/jobs">
                  Vacancies
                </NavLink>
              </li>
              <li className="fixed__list">
                <NavLink className="fixed__link" to="/#reviews">
                  Reviews
                </NavLink>
              </li>
            </ul>
            <form className="fixed__form">
              <img className="fixed__searchicon" src={search} alt="" />
              <ReactTyped
                strings={[
                  "Advertisement on billboards",
                  "Advertisement on buses",
                  "Advertisement on LED screens",
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
              <img src={moon} alt="" />
              <input
                style={{
                  borderRadius: "25px",
                  border: "none",
                  animation: "glow 2s linear infinite",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                }}
                type="checkbox"
                // onChange={handleDark}
              />
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
