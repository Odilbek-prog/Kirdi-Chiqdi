import React from "react";
import check from "../../public/check.svg";
import { NavLink } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="jobs">
      <div className="jobs__wrapper">
        <h1 className="jobs__title">Job vacancies</h1>
        <div className="jobs__cards">
          <div className="jobs__card">
            <h3 className="jobs__subtitle">call center operator</h3>
            <div className="jobs__desc">
              <p className="jobs__req">Required Skills</p>
              <div className="jobs__reqcard">
                <img src={check} alt="" className="jobs__check" />
                <p className="jobs__text">Education: from secondary special;</p>
              </div>
              <button class="video__btn btn-13">
                <NavLink
                  class="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  {" "}
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
          <div className="jobs__card">
            <h3 className="jobs__subtitle">Web designer</h3>
            <div className="jobs__desc">
              <p className="jobs__req">Required Skills</p>
              <div className="jobs__reqcard">
                <img src={check} alt="" className="jobs__check" />
                <p className="jobs__text">3 years of experience</p>
              </div>
              <button class="video__btn btn-13">
                <NavLink
                  class="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  {" "}
                  Contact
                </NavLink>
              </button>
            </div>
          </div>
          <div className="jobs__card">
            <h3 className="jobs__subtitle">Logist</h3>
            <div className="jobs__desc">
              <p className="jobs__req">Required Skills</p>
              <div className="jobs__reqcard">
                <img src={check} alt="" className="jobs__check" />
                <p className="jobs__text">ddddd</p>
              </div>
              <button class="video__btn btn-13">
                <NavLink
                  class="cta"
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={"/#contact"}
                >
                  {" "}
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

export default Jobs;
